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
    local webp_file="${dir_name}/${name_without_ext}.webp"
    local avif_file="${dir_name}/${name_without_ext}.avif"
    local need_conversion=false
    
    if [ ! -f "$webp_file" ]; then
        need_conversion=true
        echo "Version WebP manquante pour $input_file"
    fi
    
    if [ ! -f "$avif_file" ]; then
        need_conversion=true
        echo "Version AVIF manquante pour $input_file"
    fi
    
    if [ "$need_conversion" = false ]; then
        echo "Les versions optimisées de $input_file existent déjà. Ignoré."
        return
    fi
    
    echo "Conversion de $input_file"
    
    # Convertir en WebP si nécessaire
    if [ ! -f "$webp_file" ]; then
        echo "Création de la version WebP..."
        cwebp -q 85 "$input_file" -o "$webp_file"
    fi
    
    # Convertir en AVIF si nécessaire
    if [ ! -f "$avif_file" ]; then
        echo "Création de la version AVIF..."
        avifenc -q 80 -s 0 "$input_file" -o "$avif_file"
    fi
}

# Fonction pour parcourir récursivement un répertoire
process_directory() {
    local dir="$1"
    local count=0
    local total=0
    
    # Compter le nombre total de fichiers à traiter
    total=$(find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | wc -l)
    total=$(echo $total | tr -d ' ')
    
    echo "Nombre total d'images à vérifier: $total"
    
    # Traiter chaque fichier dans le répertoire
    find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read -r file; do
        convert_image "$file"
        count=$((count + 1))
        if [ $((count % 10)) -eq 0 ]; then
            echo "Progression: $count/$total images traitées"
        fi
    done
    
    echo "Toutes les images ont été vérifiées et optimisées si nécessaire."
}

# Répertoire principal à traiter
main_dir="public/img"

# Vérifier si le répertoire existe
if [ ! -d "$main_dir" ]; then
    echo "Le répertoire $main_dir n'existe pas."
    exit 1
fi

echo "Début de l'optimisation des images dans $main_dir..."
process_directory "$main_dir"
echo "Optimisation terminée !" 