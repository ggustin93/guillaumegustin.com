#!/bin/bash

# Script de déploiement manuel sur Firebase
# Usage: ./deploy-firebase.sh

set -e

# Load environment variables
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

if [ -z "$FIREBASE_TOKEN" ]; then
    echo "❌ FIREBASE_TOKEN not found in .env"
    exit 1
fi

echo "🚀 Déploiement sur Firebase Hosting"
echo "===================================="

# Build avec Hugo
echo "📦 Construction du site..."
hugo --minify

# Déploiement Firebase
echo "📤 Déploiement sur Firebase..."
firebase deploy --only hosting --token "$FIREBASE_TOKEN"

echo "✅ Déploiement terminé !"
echo "🌐 Site: https://guillaumegustin.com"
