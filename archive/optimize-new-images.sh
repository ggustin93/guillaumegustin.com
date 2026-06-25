#!/bin/bash

# Vérifier si cwebp et avifenc sont installés
if ! command -v cwebp &> /dev/null; then
    echo "cwebp n'est pas installé. Installation en cours..."
    brew install webp
fi

if ! command -v avifenc &> /dev/null; then
    echo "avifenc n'est pas installé. Installation en cours..."
    brew install libavif
fi

# Fonction pour convertir une image en WebP et AVIF
convert_image() {
    local input_file="$1"
    local base_name=$(basename "$input_file")
    local dir_name=$(dirname "$input_file")
    local name_without_ext="${base_name%.*}"
    
    # Ignorer les fichiers qui ne sont pas des images
    if [[ ! "$input_file" =~ \.(jpg|jpeg|png|gif)$ ]]; then
        return
    fi
    
    # Vérifier si les versions WebP et AVIF existent déjà
    if [ -f "${dir_name}/${name_without_ext}.webp" ] && [ -f "${dir_name}/${name_without_ext}.avif" ]; then
        echo "Les versions optimisées de ${input_file} existent déjà."
        return
    fi
    
    echo "Conversion de $input_file"
    
    # Convertir en WebP si nécessaire
    if [ ! -f "${dir_name}/${name_without_ext}.webp" ]; then
        echo "Création de la version WebP..."
        cwebp -q 85 "$input_file" -o "${dir_name}/${name_without_ext}.webp"
    fi
    
    # Convertir en AVIF si nécessaire
    if [ ! -f "${dir_name}/${name_without_ext}.avif" ]; then
        echo "Création de la version AVIF..."
        avifenc -q 80 -s 0 "$input_file" "${dir_name}/${name_without_ext}.avif"
    fi
}

# Fonction pour mettre à jour les balises HTML pour une image spécifique
update_html_for_image() {
    local image_path="$1"
    local base_name=$(basename "$image_path")
    local name_without_ext="${base_name%.*}"
    local dir_name=$(dirname "$image_path")
    local relative_path="${dir_name#public/}/$base_name"
    
    echo "Mise à jour des références HTML pour $relative_path..."
    
    # Utiliser node pour mettre à jour les balises HTML
    node -e "
    const fs = require('fs');
    const path = require('path');
    const cheerio = require('cheerio');
    
    function updateHtmlForImage(imagePath) {
        const publicDir = 'public';
        const htmlFiles = [];
        
        function findHtmlFiles(dir) {
            const items = fs.readdirSync(dir);
            for (const item of items) {
                const fullPath = path.join(dir, item);
                if (fs.statSync(fullPath).isDirectory()) {
                    findHtmlFiles(fullPath);
                } else if (item.endsWith('.html')) {
                    htmlFiles.push(fullPath);
                }
            }
        }
        
        findHtmlFiles(publicDir);
        
        let updatedCount = 0;
        
        for (const htmlFile of htmlFiles) {
            const content = fs.readFileSync(htmlFile, 'utf8');
            const $ = cheerio.load(content);
            let updated = false;
            
            $('img').each(function() {
                const img = $(this);
                const src = img.attr('src');
                
                if (src && src.includes('$relative_path')) {
                    const parent = img.parent();
                    
                    // Si l'image est déjà dans une balise picture, ne rien faire
                    if (parent.is('picture')) {
                        return;
                    }
                    
                    const alt = img.attr('alt') || '';
                    const className = img.attr('class') || '';
                    const width = img.attr('width') || '';
                    const height = img.attr('height') || '';
                    
                    // Construire les chemins pour les versions WebP et AVIF
                    const srcExt = path.extname(src);
                    const srcWithoutExt = src.substring(0, src.length - srcExt.length);
                    const webpSrc = `\${srcWithoutExt}.webp`;
                    const avifSrc = `\${srcWithoutExt}.avif`;
                    
                    // Créer la balise picture
                    const picture = $('<picture></picture>');
                    
                    // Ajouter la source AVIF
                    picture.append(`<source srcset='\${avifSrc}' type='image/avif'>`);
                    
                    // Ajouter la source WebP
                    picture.append(`<source srcset='\${webpSrc}' type='image/webp'>`);
                    
                    // Cloner l'image originale et l'ajouter à la balise picture
                    const imgClone = img.clone();
                    picture.append(imgClone);
                    
                    // Remplacer l'image originale par la balise picture
                    img.replaceWith(picture);
                    
                    updated = true;
                }
            });
            
            if (updated) {
                fs.writeFileSync(htmlFile, $.html());
                updatedCount++;
            }
        }
        
        console.log(`Mise à jour de \${updatedCount} fichiers HTML.`);
    }
    
    updateHtmlForImage('$image_path');
    "
}

# Traiter les images spécifiées en arguments ou toutes les nouvelles images
if [ $# -gt 0 ]; then
    # Traiter les images spécifiées en arguments
    for image in "$@"; do
        if [ -f "$image" ]; then
            # Vérifier si l'image est dans le dossier public
            if [[ "$image" == public/* ]]; then
                convert_image "$image"
                update_html_for_image "$image"
            else
                echo "L'image $image n'est pas dans le dossier public/. Ignorée."
            fi
        else
            echo "L'image $image n'existe pas. Ignorée."
        fi
    done
else
    # Chercher les nouvelles images dans public/img
    echo "Recherche de nouvelles images dans public/img..."
    find public/img -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read -r image; do
        base_name=$(basename "$image")
        dir_name=$(dirname "$image")
        name_without_ext="${base_name%.*}"
        
        # Vérifier si les versions WebP et AVIF existent déjà
        if [ ! -f "${dir_name}/${name_without_ext}.webp" ] || [ ! -f "${dir_name}/${name_without_ext}.avif" ]; then
            convert_image "$image"
            update_html_for_image "$image"
        fi
    done
fi

echo "Optimisation terminée !"
chmod +x optimize-new-images.sh 