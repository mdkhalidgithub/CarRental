# Email Configuration Setup

## Prerequisites
1. Gmail account
2. App Password (not regular password)

## Setup Steps

### 1. Enable 2-Factor Authentication
- Go to your Google Account settings
- Enable 2-Factor Authentication

### 2. Generate App Password
1. Go to Google Account settings
2. Navigate to Security
3. Under "2-Step Verification", click "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 3. Update Environment Variables
Add these to your `.env` file:

```env
# Email Configuration
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
ADMIN_EMAIL=admin@carrental.com
```

### 4. Test Configuration
The email service will automatically send:
- **User Email**: Booking confirmation with all details
- **Admin Email**: Notification about new booking

## Email Templates

### User Email Features:
- ✅ Booking confirmation
- ✅ Car details
- ✅ Rental period
- ✅ Total price
- ✅ Location information
- ✅ Additional services
- ✅ Contact information
- ✅ Important notes

### Admin Email Features:
- ✅ New booking notification
- ✅ Customer details
- ✅ Vehicle information
- ✅ Financial summary
- ✅ Action items
- ✅ Booking ID for tracking

## Troubleshooting

### Common Issues:
1. **Authentication failed**: Check app password
2. **Email not sending**: Verify Gmail settings
3. **Spam folder**: Check spam/junk folder

### Gmail Settings:
- Less secure app access: OFF
- 2-Factor Authentication: ON
- App Password: Required

## Security Notes
- Never commit `.env` file to version control
- Use app passwords, not regular passwords
- Regularly rotate app passwords
- Monitor email sending logs 