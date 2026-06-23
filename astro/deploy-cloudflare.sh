#!/bin/bash
# Build + deploy the Astro site to Cloudflare Pages.
# Run from the astro/ directory:  ./deploy-cloudflare.sh
# (functions/ is auto-bundled by Wrangler → /api/contact ships with the build)
set -euo pipefail

PROJECT="guillaumegustin-be"
BRANCH="main"

cd "$(dirname "$0")"

echo "▶ Building Astro site…"
npm run build

echo "▶ Deploying dist/ to Cloudflare Pages project '$PROJECT' (branch: $BRANCH)…"
npx wrangler pages deploy dist \
  --project-name="$PROJECT" \
  --branch="$BRANCH" \
  --commit-dirty=true

echo "✓ Done — https://$PROJECT.pages.dev"
