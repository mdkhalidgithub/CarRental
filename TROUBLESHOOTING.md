# Troubleshooting Guide for Car Rental App Deployment

## Quick Diagnosis Steps:

### 1. Check Browser Console
Open your Vercel app and check the browser console (F12) for errors:
- Look for CORS errors
- Look for network errors
- Look for API call failures

### 2. Test Backend API Directly
Try accessing your backend API directly in the browser:
- `https://your-backend-url.com/health` - Should return status OK
- `https://your-backend-url.com/api/cars` - Should return car data

### 3. Check Environment Variables
In Vercel Dashboard:
- Go to your project settings
- Check Environment Variables
- Ensure `VITE_API_BASE_URL` is set correctly

## Common Error Messages and Solutions:

### "Failed to fetch" Error
**Cause**: Backend not deployed or wrong URL
**Solution**: 
1. Deploy backend to Render/Railway/Heroku
2. Update `VITE_API_BASE_URL` in Vercel environment variables
3. Redeploy frontend

### CORS Error
**Cause**: Backend CORS not configured for Vercel domain
**Solution**: 
1. Backend CORS is already updated to allow Vercel domains
2. Make sure backend is deployed with the updated code

### "Loading cars..." Forever
**Cause**: API call failing silently
**Solution**:
1. Check browser network tab
2. Verify backend URL is correct
3. Check if backend is responding

### MongoDB Connection Error
**Cause**: Database not accessible from deployed backend
**Solution**:
1. Check MongoDB Atlas network access (allow 0.0.0.0/0)
2. Verify connection string in backend environment variables
3. Check if database has data (run seed script)

## Testing Checklist:

### Frontend (Vercel):
- [ ] App loads without console errors
- [ ] Cars page shows cars (not loading forever)
- [ ] Login/Signup forms work
- [ ] Booking form loads and submits

### Backend (Render/Railway):
- [ ] Health endpoint responds: `/health`
- [ ] Cars endpoint returns data: `/api/cars`
- [ ] Auth endpoints work: `/api/auth/login`, `/api/auth/register`
- [ ] Booking endpoint works: `/api/bookings`

## Quick Fix Commands:

### If you need to test locally:
```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend  
npm install
npm run dev
```

### If you need to seed data:
```bash
cd backend
# Uncomment the seedCars() line in src/index.js
npm run dev
# Comment it back after seeding
```

## Emergency Contact:
If you're still having issues:
1. Check the browser console for specific error messages
2. Verify all environment variables are set
3. Test backend endpoints directly
4. Check MongoDB connection 