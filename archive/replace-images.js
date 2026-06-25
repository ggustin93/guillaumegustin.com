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