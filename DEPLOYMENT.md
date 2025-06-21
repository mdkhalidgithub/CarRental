# Deployment Guide for Car Rental App

## Issue: Cars not showing and booking not working on Vercel

The problem is that your frontend is hardcoded to use `localhost:5000` for API calls, but when deployed on Vercel, your backend needs to be hosted separately.

## Solution Steps:

### 1. Deploy Backend First

You need to deploy your backend to a platform that supports Node.js:

**Option A: Render (Recommended - Free)**
1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service
4. Set the root directory to `backend`
5. Set build command: `npm install`
6. Set start command: `npm start`
7. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure random string
   - `EMAIL_USER`: Your email for notifications
   - `EMAIL_PASSWORD`: Your email app password
   - `ADMIN_EMAIL`: Admin email address

**Option B: Railway**
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Deploy the backend folder
4. Add the same environment variables

### 2. Update Frontend Environment Variables

In your Vercel deployment, add this environment variable:

**Vercel Dashboard → Your Project → Settings → Environment Variables**

Add:
- **Name**: `VITE_API_BASE_URL`
- **Value**: `https://your-backend-url.com` (replace with your actual backend URL)

### 3. Verify Backend is Working

Test your backend API endpoints:
- `https://your-backend-url.com/api/cars` - Should return car data
- `https://your-backend-url.com/api/auth/login` - Should handle login

### 4. Redeploy Frontend

After setting the environment variable, redeploy your frontend on Vercel.

## Environment Variables Checklist

### Backend (.env file):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/carrental
JWT_SECRET=your-secret-key-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@carrental.com
```

### Frontend (Vercel Environment Variables):
```
VITE_API_BASE_URL=https://your-backend-url.com
```

## Common Issues:

1. **CORS Error**: Make sure your backend has CORS configured properly
2. **MongoDB Connection**: Ensure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0)
3. **Environment Variables**: Double-check that all environment variables are set correctly
4. **Backend URL**: Make sure the backend URL is accessible and returns data

## Testing:

1. Visit your Vercel frontend URL
2. Check browser console for any errors
3. Try to load the cars page
4. Test login/signup functionality
5. Test booking functionality

## Quick Fix for Testing:

If you want to test quickly, you can temporarily update the hardcoded URLs in your components to point to your deployed backend URL, but using environment variables is the proper solution. 