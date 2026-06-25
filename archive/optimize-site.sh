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