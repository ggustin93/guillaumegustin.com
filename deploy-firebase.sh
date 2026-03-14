#!/bin/bash

# Script de déploiement manuel sur Firebase
# Usage: ./deploy-firebase.sh

set -e

echo "🚀 Déploiement sur Firebase Hosting"
echo "===================================="

# Build avec Hugo
echo "📦 Construction du site..."
hugo --minify

# Déploiement Firebase
echo "📤 Déploiement sur Firebase..."
firebase deploy --only hosting

echo "✅ Déploiement terminé !"
echo "🌐 Site: https://guillaumegustin.com"
