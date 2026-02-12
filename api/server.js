const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' });
});

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Create contact in Resend
    const { data, error } = await resend.contacts.create({
      email: email.trim().toLowerCase(),
      firstName: firstName?.trim() || undefined,
      lastName: lastName?.trim() || undefined,
      unsubscribed: false,
    });

    if (error) {
      console.error('Resend API Error:', error);
      
      // Handle specific error cases
      if (error.message && error.message.includes('already exists')) {
        return res.status(409).json({
          success: false,
          error: 'This email is already subscribed to our newsletter'
        });
      }

      return res.status(500).json({
        success: false,
        error: 'Failed to subscribe. Please try again later.'
      });
    }

    // Success response
    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      contactId: data.id
    });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    });
  }
});

// Contact form submission endpoint
app.post('/api/contact/submit', async (req, res) => {
  try {
    const { name, email, phone, subject, message, preferredContact, preferredTime } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Send email notification using Resend
    const { data, error } = await resend.emails.send({
      from: 'Just People <noreply@justpeoplebybarkhagupta.in>',
      to: 'contact@justpeoplebybarkhagupta.in',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Preferred Contact Method:</strong> ${preferredContact || 'Not specified'}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (error) {
      console.error('Resend Email Error:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to send message. Please try again later.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    });
  }
});

// Email validation helper function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Start server
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
  console.log(`Resend API Key configured: ${process.env.RESEND_API_KEY ? 'Yes' : 'No'}`);
});

module.exports = app;
