# Sapienz Technologies Website

This is the official website for Sapienz Technologies, a innovative software solutions company.

## Project Overview

This project is built with:
- Vite
- TypeScript
- React
- Tailwind CSS

## Local Development

To run this project locally:

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment on Vercel

### Option 1: Deploy with GitHub

1. Push this repository to GitHub:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Connect to Vercel:
   - Go to [Vercel](https://vercel.com) and sign up/login
   - Create a new project and import your GitHub repository
   - Vercel will automatically detect the correct settings
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```

2. Deploy the project:
   ```sh
   vercel login
   vercel
   ```

3. Follow the CLI prompts to complete deployment

## Project Structure

- `src/` - Source code
  - `components/` - Reusable UI components
  - `pages/` - Page components
  - `assets/` - Static assets
- `public/` - Public assets (images, favicons)
