# Just People API Server

Backend API server for newsletter subscriptions and contact form submissions using Resend.

## Features

- Newsletter subscription endpoint
- Contact form submission endpoint
- Resend API integration
- Email validation
- Error handling

## Setup Instructions

### 1. Install Dependencies

```bash
cd api
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your Resend API key:

```
RESEND_API_KEY=re_your_actual_api_key_here
PORT=3000
```

**Get your Resend API key:**
1. Sign up at [https://resend.com](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy and paste it into your `.env` file

### 3. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### 1. Health Check
```
GET /api/health
```

**Response:**
```json
{
  "status": "ok",
  "message": "API server is running"
}
```

### 2. Newsletter Subscription
```
POST /api/newsletter/subscribe
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter!",
  "contactId": "479e3145-dd38-476b-932c-529ceb705947"
}
```

**Error Responses:**
- `400`: Invalid email format
- `409`: Email already subscribed
- `500`: Server error

### 3. Contact Form Submission
```
POST /api/contact/submit
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "subject": "Consultation Request",
  "message": "I would like to schedule a consultation...",
  "preferredContact": "Email",
  "preferredTime": "Morning"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully! We will get back to you soon."
}
```

**Error Responses:**
- `400`: Missing required fields or invalid email
- `500`: Server error

## Deployment

### Option 1: Deploy with Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Add environment variable `RESEND_API_KEY` in Vercel dashboard

### Option 2: Deploy with Railway

1. Create account at [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Add environment variable `RESEND_API_KEY`
4. Deploy

### Option 3: Deploy with Render

1. Create account at [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Add environment variable `RESEND_API_KEY`
5. Deploy

## CORS Configuration

The API is configured to accept requests from any origin. For production, update the CORS settings in `server.js`:

```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

## Rate Limiting

Resend has a default rate limit of 2 requests per second. The API handles rate limit errors gracefully.

## Error Handling

All endpoints include comprehensive error handling:
- Input validation
- API error handling
- Server error handling
- User-friendly error messages

## Security Notes

1. Never commit `.env` file to version control
2. Keep your Resend API key secure
3. Use environment variables for sensitive data
4. Configure CORS for production use
5. Consider adding rate limiting middleware

## Support

For issues or questions:
- Email: contact@justpeoplebybarkhagupta.in
- Website: [Your website URL]
