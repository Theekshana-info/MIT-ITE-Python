# MIT/ITE Python Learning Platform - Deployment Guide

## Vercel Deployment Instructions

### Prerequisites
1. A [Vercel account](https://vercel.com/signup) (free)
2. ~~A PostgreSQL database~~ **NO DATABASE REQUIRED** - This project uses in-memory storage

### Step 1: ~~Prepare Your Database~~ (Skip - Not Needed)
**This project doesn't require a database.** It uses in-memory storage for any data.

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - What's your project's name? Enter a name (e.g., `mit-ite-python`)
   - In which directory is your code located? **./** (press Enter)

5. Deploy to production:
   ```bash
   vercel --prod
   ```

**That's it!** No environment variables or database setup needed.

#### Option B: Using Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Click **"Deploy"**

**No environment variables needed!**

### Step 3: ~~Initialize Database Schema~~ (Skip - Not Needed)

### Step 4: Verify Deployment
Visit your Vercel deployment URL (e.g., `https://mit-ite-python.vercel.app`)

---

## Troubleshooting

### Build Errors
- **Error: "Cannot find module"**: Make sure all dependencies are in `package.json`
- **Replit plugin errors**: These have been removed from production builds
- **Build timeout**: Vercel free tier has a 45-second build limit

### Runtime Errors
- **500 Error**: Check Vercel deployment logs for specific errors
- **Port binding error**: Vercel automatically sets the PORT variable

### Common Issues
1. **Build output not found**: The build outputs to `dist/public` correctly
2. **API routes not working**: The `vercel.json` configuration handles routing
3. **Missing files after deployment**: Ensure all files are committed to Git

---

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:5000`

**No database or environment variables needed for local development!**

---

## Files Modified for Vercel Deployment

✅ **vite.config.ts** - Fixed build output path and removed Replit-specific plugins
✅ **vercel.json** - Added Vercel configuration for routing
✅ **package.json** - Fixed start script to use cross-env
✅ **server/index-prod.ts** - Fixed path to built files
✅ **drizzle.config.ts** - Made DATABASE_URL optional (not required)
✅ **.gitignore** - Added .env and .vercel to ignore list

---

## Environment Variables

**None required!** This project uses in-memory storage and doesn't need a database or any environment variables.

The `PORT` variable is automatically set by Vercel.

---

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify the build completed successfully
3. Ensure all files are committed to Git
4. Check that all dependencies are properly installed

**Note**: This project uses in-memory storage, so any data will be reset when the server restarts. This is perfect for a learning platform where no persistent user data is needed.
