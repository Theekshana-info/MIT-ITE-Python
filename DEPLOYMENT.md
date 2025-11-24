# MIT/ITE Python Learning Platform - Deployment Guide

## Vercel Deployment Instructions

### Prerequisites
1. A [Vercel account](https://vercel.com/signup) (free)
2. A PostgreSQL database (you can use [Neon](https://neon.tech/), [Supabase](https://supabase.com/), or [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres))

### Step 1: Prepare Your Database
1. Create a PostgreSQL database on your chosen platform
2. Copy the connection string (it should look like: `postgresql://username:password@host:port/database`)

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

5. Add environment variables:
   ```bash
   vercel env add DATABASE_URL
   ```
   Paste your PostgreSQL connection string when prompted.
   Select: **Production, Preview, and Development**

6. Deploy to production:
   ```bash
   vercel --prod
   ```

#### Option B: Using Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Add Environment Variables:
   - Click **"Environment Variables"**
   - Add: `DATABASE_URL` with your PostgreSQL connection string
   - Click **"Deploy"**

### Step 3: Initialize Database Schema
After deployment, you need to push your database schema:

```bash
# Set your DATABASE_URL locally
echo "DATABASE_URL=your_connection_string_here" > .env

# Push the schema
npm run db:push
```

### Step 4: Verify Deployment
Visit your Vercel deployment URL (e.g., `https://mit-ite-python.vercel.app`)

---

## Troubleshooting

### Build Errors
- **Error: "Cannot find module"**: Make sure all dependencies are in `package.json`
- **Replit plugin errors**: These have been removed from production builds
- **Build timeout**: Vercel free tier has a 45-second build limit

### Runtime Errors
- **500 Error**: Check environment variables are set correctly
- **Database connection failed**: Verify `DATABASE_URL` is correct
- **Port binding error**: Vercel automatically sets the PORT variable

### Common Issues
1. **Missing DATABASE_URL**: Add it in Vercel project settings → Environment Variables
2. **Build output not found**: The build now outputs to `dist/public` correctly
3. **API routes not working**: The `vercel.json` configuration handles routing

---

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   DATABASE_URL=your_postgresql_connection_string
   PORT=5000
   ```

4. Push database schema:
   ```bash
   npm run db:push
   ```

5. Run development server:
   ```bash
   npm run dev
   ```

6. Visit `http://localhost:5000`

---

## Files Modified for Vercel Deployment

✅ **vite.config.ts** - Fixed build output path and removed Replit-specific plugins
✅ **vercel.json** - Added Vercel configuration for routing
✅ **package.json** - Fixed start script to use cross-env
✅ **.gitignore** - Added .env and .vercel to ignore list
✅ **.env.example** - Template for environment variables

---

## Environment Variables Required

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `PORT` | Server port (auto-set by Vercel) | `5000` |

---

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Ensure database is accessible from Vercel's servers
4. Check that all dependencies are properly installed
