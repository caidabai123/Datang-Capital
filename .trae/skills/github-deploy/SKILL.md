---
name: "github-deploy"
description: "Uploads project to GitHub and deploys to GitHub Pages using GitHub Actions. Invoke when user asks to deploy, push to GitHub, or set up CI/CD for GitHub Pages."
---

# GitHub Deploy Skill

This skill guides you through uploading a project to GitHub and deploying it to GitHub Pages using GitHub Actions.

## Prerequisites

1. Git installed on your system
2. A GitHub account
3. A GitHub repository created for your project

## Step 1: Initialize Git Repository (if not already initialized)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M master
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin master
```

## Step 2: Configure Vite for GitHub Pages

Update `vite.config.js` to set the correct base path:

```js
export default defineConfig({
  // ... other config
  base: './'
})
```

## Step 3: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Step 4: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click "Settings" > "Pages"
3. Under "Source", select "GitHub Actions"
4. Save

## Step 5: Commit and Push Changes

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin master
```

## Step 6: Verify Deployment

1. Go to `https://github.com/<username>/<repository>/actions`
2. Check the workflow run status
3. Once successful, your site will be available at `https://<username>.github.io/<repository>/`

## Common Issues and Fixes

### Issue 1: Deployment fails due to missing permissions

**Solution:** Add permissions block to the workflow:

```yaml
permissions:
  contents: write
  pages: write
  id-token: write
```

### Issue 2: `npm ci` fails

**Solution:** Use `npm install` instead:

```yaml
run: npm install
```

### Issue 3: Build fails with module resolution errors

**Solution:** Ensure `vite.config.js` has correct alias configuration:

```js
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
```

### Issue 4: Pages not updating after deployment

**Solution:** Clear browser cache or hard refresh (Ctrl+Shift+R). Check GitHub Pages settings for correct branch.

## Verification Checklist

- [ ] Git repository initialized and remote configured
- [ ] `vite.config.js` has `base: './'`
- [ ] `.github/workflows/deploy.yml` created with proper permissions
- [ ] GitHub Pages enabled in repository settings
- [ ] Workflow runs successfully on push
- [ ] Site accessible at `https://<username>.github.io/<repository>/`
