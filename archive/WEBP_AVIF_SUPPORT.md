# Support des formats d'image modernes (WebP et AVIF) dans le site Hugo

Ce document explique les modifications apportées au site pour prendre en charge les formats d'image modernes WebP et AVIF, qui offrent une meilleure compression et qualité par rapport aux formats traditionnels (JPEG, PNG).

## Avantages des formats WebP et AVIF

- **Taille réduite** : WebP est environ 25-35% plus petit que JPEG à qualité équivalente, AVIF peut être jusqu'à 50% plus petit.
- **Meilleure qualité** : À taille égale, WebP et AVIF offrent une meilleure qualité visuelle.
- **Support de la transparence** : Comme PNG, mais avec une meilleure compression.
- **Amélioration du SEO** : Google favorise les sites qui utilisent des formats d'image modernes.
- **Amélioration des performances** : Temps de chargement réduits, particulièrement important pour les utilisateurs mobiles.

## Modifications apportées

### 1. Configuration Hugo

Nous avons ajouté la configuration nécessaire dans `config.toml` pour activer le traitement des images WebP et AVIF :

```toml
[imaging]
  resampleFilter = "lanczos"
  quality = 90
  anchor = "smart"
  
  # Formats d'images modernes
  [imaging.exif]
    disableDate = true
    disableLatLong = true
    includeFields = ""
    excludeFields = ""
  
  # Configuration pour WebP et AVIF
  [imaging.webp]
    quality = 85
  
  [imaging.avif]
    quality = 80
```

### 2. Shortcode personnalisé pour les images

Nous avons créé un shortcode `image.html` qui permet d'utiliser les formats WebP et AVIF dans les nouveaux contenus :

```html
{{- $src := .Get "src" -}}
{{- $alt := .Get "alt" | default "" -}}
{{- $class := .Get "class" | default "" -}}
{{- $width := .Get "width" | default "auto" -}}
{{- $height := .Get "height" | default "auto" -}}
{{- $lazy := .Get "lazy" | default true -}}

{{- $original := resources.Get $src -}}
{{- if not $original -}}
  {{- errorf "Image %s not found" $src -}}
{{- end -}}

{{- $webp := $original.Resize (printf "%vx webp q85" ($original.Width)) -}}
{{- $avif := "" -}}
{{- if ge hugo.Version "0.83.0" -}}
  {{- $avif = $original.Resize (printf "%vx avif q80" ($original.Width)) -}}
{{- end -}}

<picture>
  {{- if $avif -}}
  <source srcset="{{ $avif.RelPermalink }}" type="image/avif">
  {{- end -}}
  <source srcset="{{ $webp.RelPermalink }}" type="image/webp">
  <img 
    src="{{ $original.RelPermalink }}" 
    alt="{{ $alt }}" 
    {{ with $class }}class="{{ . }}"{{ end }}
    {{ if ne $width "auto" }}width="{{ $width }}"{{ end }}
    {{ if ne $height "auto" }}height="{{ $height }}"{{ end }}
    {{ if $lazy }}loading="lazy"{{ end }}
  >
</picture>
```

Utilisation dans les fichiers Markdown :
```
{{< image src="images/exemple.jpg" alt="Description de l'image" >}}
```

### 3. Partial pour les images responsives

Nous avons créé un partial `responsive-image.html` qui peut être utilisé dans les templates du thème :

```html
{{- $src := .src -}}
{{- $alt := .alt | default "" -}}
{{- $class := .class | default "" -}}
{{- $width := .width | default "auto" -}}
{{- $height := .height | default "auto" -}}
{{- $lazy := .lazy | default true -}}

{{- $webp_path := replace $src (path.Ext $src) ".webp" -}}
{{- $avif_path := replace $src (path.Ext $src) ".avif" -}}

<picture>
  {{- if fileExists (printf "static/%s" $avif_path) -}}
  <source srcset="{{ $avif_path | relURL }}" type="image/avif">
  {{- end -}}
  {{- if fileExists (printf "static/%s" $webp_path) -}}
  <source srcset="{{ $webp_path | relURL }}" type="image/webp">
  {{- end -}}
  <img 
    src="{{ $src | relURL }}" 
    alt="{{ $alt }}" 
    {{ with $class }}class="{{ . }}"{{ end }}
    {{ if ne $width "auto" }}width="{{ $width }}"{{ end }}
    {{ if ne $height "auto" }}height="{{ $height }}"{{ end }}
    {{ if $lazy }}loading="lazy"{{ end }}
  >
</picture>
```

### 4. Scripts d'optimisation

#### Script de conversion d'images (`optimize-images.sh`)

Ce script parcourt le dossier `public/img` et convertit toutes les images en formats WebP et AVIF :

```bash
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
    
    echo "Conversion de $input_file"
    
    # Convertir en WebP
    cwebp -q 85 "$input_file" -o "${dir_name}/${name_without_ext}.webp"
    
    # Convertir en AVIF
    avifenc -q 80 -s 0 "$input_file" "${dir_name}/${name_without_ext}.avif"
}

# Fonction pour parcourir récursivement un répertoire
process_directory() {
    local dir="$1"
    
    # Traiter chaque fichier dans le répertoire
    find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read -r file; do
        convert_image "$file"
    done
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
```

#### Script de mise à jour des fichiers HTML (`replace-images.js`)

Ce script parcourt les fichiers HTML générés et remplace les balises `<img>` par des balises `<picture>` avec support pour WebP et AVIF :

```javascript
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Fonction pour remplacer les balises img par des balises picture
function replaceImagesWithPicture(htmlContent, basePath) {
  const $ = cheerio.load(htmlContent);
  
  $('img').each(function() {
    const img = $(this);
    const src = img.attr('src');
    
    // Ignorer les images sans src ou les images externes
    if (!src || src.startsWith('http') || src.startsWith('//')) {
      return;
    }
    
    const alt = img.attr('alt') || '';
    const className = img.attr('class') || '';
    const width = img.attr('width') || '';
    const height = img.attr('height') || '';
    
    // Construire les chemins pour les versions WebP et AVIF
    const srcExt = path.extname(src);
    const srcWithoutExt = src.substring(0, src.length - srcExt.length);
    const webpSrc = `${srcWithoutExt}.webp`;
    const avifSrc = `${srcWithoutExt}.avif`;
    
    // Vérifier si les fichiers WebP et AVIF existent
    const fullWebpPath = path.join(basePath, webpSrc);
    const fullAvifPath = path.join(basePath, avifSrc);
    const webpExists = fs.existsSync(fullWebpPath);
    const avifExists = fs.existsSync(fullAvifPath);
    
    // Si aucun format moderne n'existe, ne rien faire
    if (!webpExists && !avifExists) {
      return;
    }
    
    // Créer la balise picture
    const picture = $('<picture></picture>');
    
    // Ajouter la source AVIF si elle existe
    if (avifExists) {
      picture.append(`<source srcset="${avifSrc}" type="image/avif">`);
    }
    
    // Ajouter la source WebP si elle existe
    if (webpExists) {
      picture.append(`<source srcset="${webpSrc}" type="image/webp">`);
    }
    
    // Cloner l'image originale et l'ajouter à la balise picture
    const imgClone = img.clone();
    picture.append(imgClone);
    
    // Remplacer l'image originale par la balise picture
    img.replaceWith(picture);
  });
  
  return $.html();
}

// Fonction pour parcourir récursivement un répertoire
function processDirectory(directory, basePath) {
  const items = fs.readdirSync(directory);
  
  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Récursion pour les sous-répertoires
      processDirectory(fullPath, basePath);
    } else if (item.endsWith('.html')) {
      // Traiter les fichiers HTML
      console.log(`Traitement de ${fullPath}`);
      const htmlContent = fs.readFileSync(fullPath, 'utf8');
      const modifiedContent = replaceImagesWithPicture(htmlContent, basePath);
      fs.writeFileSync(fullPath, modifiedContent);
    }
  }
}

// Répertoire principal à traiter
const publicDir = 'public';

// Vérifier si le répertoire existe
if (!fs.existsSync(publicDir)) {
  console.error(`Le répertoire ${publicDir} n'existe pas.`);
  process.exit(1);
}

console.log(`Début du remplacement des images dans ${publicDir}...`);
processDirectory(publicDir, publicDir);
console.log('Remplacement terminé !');
```

#### Script d'optimisation du site (`optimize-site.sh`)

Ce script automatise tout le processus d'optimisation :

```bash
#!/bin/bash

# Arrêter le script en cas d'erreur
set -e

echo "=== Début de l'optimisation du site ==="

# 1. Construire le site avec Hugo
echo "Construction du site avec Hugo..."
hugo

# 2. Optimiser les images
echo "Optimisation des images..."
./optimize-images.sh

# 3. Mettre à jour les fichiers HTML
echo "Mise à jour des fichiers HTML..."
node replace-images.js

echo "=== Optimisation du site terminée ==="
echo "Le site optimisé est disponible dans le dossier 'public'."
```

## Utilisation

### Pour les nouveaux contenus

Utilisez le shortcode `image` dans vos fichiers Markdown :

```
{{< image src="images/exemple.jpg" alt="Description de l'image" >}}
```

### Pour générer une version optimisée du site

Exécutez le script d'optimisation :

```bash
./optimize-site.sh
```

## Compatibilité des navigateurs

- **WebP** : Chrome, Firefox, Edge, Safari 14+, Opera
- **AVIF** : Chrome 85+, Firefox 93+, Opera 76+

Les navigateurs qui ne supportent pas ces formats utiliseront automatiquement l'image originale.

## Dépendances

- Hugo (version 0.83.0+ recommandée pour le support AVIF)
- Node.js et npm (pour le script de mise à jour des fichiers HTML)
- cwebp (pour la conversion en WebP)
- avifenc (pour la conversion en AVIF)

## Installation des dépendances

```bash
# Installation de Hugo
brew install hugo

# Installation des outils de conversion d'images
brew install webp libavif

# Installation des dépendances Node.js
npm install cheerio
``` 