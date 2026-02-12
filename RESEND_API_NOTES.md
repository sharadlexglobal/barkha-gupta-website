# Resend API Integration Notes

## Base URL
```
https://api.resend.com
```

## Authentication
```
Authorization: Bearer re_xxxxxxxxx
```

## Create Contact Endpoint

**Endpoint:** `POST https://api.resend.com/contacts`

### Request Body Parameters:
- `email` (string, required) - The email address of the contact
- `firstName` (string, optional) - The first name of the contact
- `lastName` (string, optional) - The last name of the contact
- `unsubscribed` (boolean, optional) - Global subscription status
- `properties` (object, optional) - Custom property keys and values
- `segments` (array, optional) - Array of segment IDs to add contact to
- `topics` (array, optional) - Array of topic subscriptions

### Example Request (Node.js):
```javascript
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

const { data, error } = await resend.contacts.create({
  email: 'steve.wozniak@gmail.com',
  firstName: 'Steve',
  lastName: 'Wozniak',
  unsubscribed: false,
});
```

### Example Response:
```json
{
  "object": "contact",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

## Implementation Plan for Newsletter

### Frontend (HTML):
1. Create newsletter signup form with email input
2. Add to footer and/or dedicated section on homepage
3. Include success/error message display

### Backend (Node.js/Express):
1. Create `/api/newsletter/subscribe` endpoint
2. Accept POST request with email address
3. Call Resend API to create contact
4. Return success/error response to frontend

### Environment Variables Needed:
- `RESEND_API_KEY` - The Resend API key

### Error Handling:
- 400: Invalid email format
- 401: Missing API key
- 403: Invalid API key
- 429: Rate limit exceeded (2 requests/second)
- 5xx: Server errors

## Rate Limits
- Default: 2 requests per second per team
- Applies across all API keys
