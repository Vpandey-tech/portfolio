# Deployment Guide for Vivek Pandey's Portfolio

Since Render has hit its limit, **Vercel** is the best alternative. It is free, fast, has 24/7 uptime, and makes adding custom domains (`vivek.technewity.com`) extremely easy.

## Step 1: Push Code to GitHub
Ensure your latest code is pushed to your GitHub repository.
1. Open your terminal in the project folder.
2. Run these commands:
   ```bash
   git add .
   git commit -m "Final portfolio updates"
   git push
   ```

## Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and Sign Up (Login with GitHub).
2. On your dashboard, click **"Add New..."** -> **"Project"**.
3. You will see your GitHub repository listed. Click **"Import"** next to `vivek-pandey-portfolio` (or whatever your repo is named).
4. **Configure Project**:
   - **Framework Preset**: Select "Other" (or leave as default).
   - **Build Command**: `npm run build`
   - **Output Directory**: Leave it as `.` (dot) or explicitly set it to `.` so it serves the root `index.html`. 
   *(Note: Since your `index.html` is in the root and accesses `build/app.bundle.js`, Vercel needs to serve the root directory).*
5. Click **Deploy**.
   - Vercel will build your project and give you a live URL (e.g., `project-name.vercel.app`).

## Step 3: Connect Custom Domain to Vercel
1. Once deployed, go to the **Settings** tab of your project in Vercel.
2. Click on **Domains** in the left sidebar.
3. Enter your domain: `vivek.technewity.com`.
4. Click **Add**.
5. Vercel will provide **DNS Records** (usually a CNAME record) that you need to add to your domain provider (where you bought `technewity.com`).
   - **Type**: CNAME
   - **Name**: `vivek`
   - **Value**: `cname.vercel-dns.com` (or whatever Vercel shows).
6. Save the DNS record in your domain provider's dashboard.
7. Vercel will automatically detect the change (usually within minutes) and generate an SSL certificate (HTTPS) for you.

## Alternative: Netlify
If you prefer Netlify, the steps are very similar:
1. Login to Netlify -> "Add new site" -> "Import an existing project".
2. Link GitHub.
3. Build command: `npm run build`.
4. Publish directory: `.`
5. Go to "Domain Management" -> "Add custom domain" -> `vivek.technewity.com`.
6. Add the CNAME record provided by Netlify to your DNS.

**Recommendation**: Start with **Vercel** as it is often faster for static/hybrid sites and has excellent free tier limits.
