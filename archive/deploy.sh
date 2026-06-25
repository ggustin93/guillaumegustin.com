#!/bin/bash

# Arrêter le script en cas d'erreur
set -e

echo "=== Début du déploiement du site guillaumegustin.com ==="

# 1. Construire le site avec Hugo
echo "Construction du site avec Hugo..."
hugo

# 2. Optimiser les images
echo "Optimisation des images..."
./optimize-images.sh

# 3. Mettre à jour les fichiers HTML pour utiliser les balises picture
echo "Mise à jour des fichiers HTML..."
node replace-images.js

# 4. Déployer sur Firebase
echo "Déploiement sur Firebase..."
firebase deploy --only hosting

echo "=== Déploiement terminé avec succès ! ==="
echo "Le site est maintenant disponible sur https://guillaumegustin.com" 