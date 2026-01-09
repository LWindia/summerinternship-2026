# Vercel Deployment Guide

## ✅ Project Status: Ready for Deployment

Your Next.js project is ready to deploy on Vercel without errors!

## 📋 Pre-Deployment Checklist

### 1. Build Test ✅
- Build completes successfully
- Only warnings (not errors) - these won't block deployment

### 2. Required Environment Variables

Add these in **Vercel Dashboard** → **Project Settings** → **Environment Variables**:

#### **Required (for forms to work):**
```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbztK9Xr1721OD3VRMPKCYlo2L2Bt61a7h-yLzid9a5GtNH1TdzyT61t615HmJ8PoglK/exec

GOOGLE_APPS_SCRIPT_URL_APPLICATION_FORM=https://script.google.com/macros/s/AKfycbzlVL9WFaHJoZahir36kodIc4MSoxwiIl7p-uWVQDYIOpT2PvqEqDYZsu5dN1f-UOxT/exec
```

#### **Optional (for email notifications):**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=recipient@example.com
```

#### **Optional (MongoDB - currently commented out):**
```env
MONGODB_URI=your-mongodb-connection-string
```

## 🚀 Deployment Steps

### Method 1: Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "Add New Project"**
3. **Import your GitHub repository:**
   - Select: `LWindia/summerinternship-2026`
   - Vercel will auto-detect Next.js settings
4. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
5. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add all variables from above
   - Select environments: Production, Preview, Development
6. **Click "Deploy"**

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd /Users/sayeed/Downloads/summer-2026
vercel

# For production
vercel --prod
```

## ⚙️ Vercel Auto-Configuration

Vercel will automatically:
- ✅ Detect Next.js framework
- ✅ Set build command: `npm run build`
- ✅ Set output directory: `.next`
- ✅ Configure Node.js version
- ✅ Enable image optimization
- ✅ Set up serverless functions for API routes

## 📝 Build Warnings (Non-Blocking)

These warnings won't prevent deployment but can be fixed later:
- Image optimization: Install `sharp` (already done ✅)
- Some components use `<img>` instead of `<Image />` - performance optimization
- React Hook dependencies - code quality improvement

## 🔍 Post-Deployment Checklist

After deployment, verify:

1. **Homepage loads:** `https://your-project.vercel.app`
2. **Query Form works:** Submit a test query
3. **Application Form works:** Test form submission
4. **Google Sheets integration:** Check if data saves to sheets
5. **API Routes:** Test `/api/contact` and `/api/submit-application`

## 🐛 Troubleshooting

### Build Fails
- Check environment variables are set
- Verify Node.js version (Vercel uses 18.x by default)
- Check build logs in Vercel dashboard

### Forms Not Working
- Verify `GOOGLE_APPS_SCRIPT_URL` and `GOOGLE_APPS_SCRIPT_URL_APPLICATION_FORM` are set
- Check Google Apps Script deployment permissions (must be "Anyone")
- Check browser console for errors

### Images Not Loading
- Verify image paths are correct
- Check `next.config.mjs` remote patterns
- Ensure images are in `public/` folder

## 📊 Performance Tips

1. **Image Optimization:** Already using Next.js Image component in most places
2. **Sharp Package:** Installed for better image optimization ✅
3. **Static Assets:** All assets in `public/` folder are served efficiently
4. **API Routes:** Serverless functions auto-scale on Vercel

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Project Repository:** https://github.com/LWindia/summerinternship-2026
- **Vercel Docs:** https://vercel.com/docs

## ✅ Summary

**Your project is 100% ready for Vercel deployment!**

- ✅ Build successful
- ✅ No blocking errors
- ✅ Environment variables documented
- ✅ Dependencies installed
- ✅ Next.js configured correctly

Just add environment variables in Vercel dashboard and deploy! 🚀
