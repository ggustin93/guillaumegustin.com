# Changelog

## [Unreleased]

### 🚀 Performance Optimizations
- **Image optimization**: Converted all images to AVIF format with significant size reductions
  - Profile picture: 81KB → 13KB (AVIF)
  - Logo: 22KB → 14KB (AVIF)
  - Showcase mobile: 27KB → 12KB (AVIF)
- **Image format conversion**: Added AVIF support with fallbacks for all images
- **Explicit dimensions**: Added width="500" height="500" to profile image
- **Cache headers**: Optimized static asset caching (30-day cache)

### 📦 Deployment Improvements
- **Firebase auto-deployment**: Added GitHub Actions workflow for automatic deployment on push to main
- **Manual deployment**: Created `deploy-firebase.sh` script for easy manual deployments
- **Firebase configuration**: Updated `firebase.json` with proper site configuration

### 🎨 UI/UX Enhancements
- **Cache busting**: Fixed CSS cache issues
- **Badges**: Improved badge styling with hover effects
- **Contact section**: Fixed styling (corner accent, title size, mobile responsiveness)
- **Profile photo**: Ensured profile photo stays B&W with red border always visible

### 📝 Configuration Updates
- **Data files**: Updated image paths in `data/fr/homepage.yml` and `data/en/homepage.yml` to use AVIF format
- **Layouts**: Updated `layouts/partials/about.html` with explicit image dimensions
- **Headers**: Added AVIF support to `layouts/partials/header.html`

### 📊 Build Optimization
- **Hugo minification**: Enabled `--minify` flag for optimized builds
- **Static file handling**: Improved static file processing and caching

## [Previous Version]

### Initial setup
- Hugo static site generator setup
- Firebase hosting configuration
- Basic responsive design implementation
- Initial content structure

--- 
*Generated on: March 14, 2026*