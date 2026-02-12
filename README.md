# Just People by Barkha Gupta - Official Website

![Website Status](https://img.shields.io/badge/status-live-success)
![GitHub Pages](https://img.shields.io/badge/deployment-GitHub%20Pages-blue)

**Professional family and matrimonial law advisory services with over 32 years of judicial experience.**

---

## 🌐 Live Website

**View the website:** [https://sharadlexglobal.github.io/barkha-gupta-website/](https://sharadlexglobal.github.io/barkha-gupta-website/)

---

## 📖 About

Just People by Barkha Gupta provides expert legal advisory services in family and matrimonial law. Founded by Ms. Barkha Gupta, a retired District Judge with 32+ years of experience in the Delhi judiciary, we offer compassionate, professional guidance for families navigating complex legal matters.

### Our Services
- Divorce & Separation Advisory
- Child Custody & Visitation Rights
- Matrimonial Property Disputes
- Domestic Violence Protection
- Maintenance & Alimony Matters
- Pre & Post-Nuptial Agreements
- Cross-Border Family Law Issues
- Mediation & Alternative Dispute Resolution

---

## 🎨 Website Features

✨ **Ultra-Premium Design**
- Sophisticated color palette (ivory, cream, beige, navy, gold)
- Smooth geometric background animations
- Professional typography (Cormorant Garamond + Inter)
- Museum-quality aesthetic

📱 **Fully Responsive**
- Optimized for desktop, tablet, and mobile
- Touch-friendly navigation
- Fast loading times

🔧 **Functionality**
- Newsletter subscription (Resend API)
- Contact form with validation
- Social media integration
- OFF THE RECORD podcast section
- Blog/insights section
- Smooth scroll animations

---

## 📁 Project Structure

```
barkha-gupta-website/
├── index.html              # Home page
├── about.html              # About Us
├── services.html           # Services
├── founder.html            # About Founder
├── insights.html           # Blog/Insights
├── contact.html            # Contact
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── api/
│   ├── server.js           # Backend API (Node.js/Express)
│   ├── package.json        # API dependencies
│   └── README.md           # API documentation
├── images/                 # Image assets
└── DEPLOYMENT_GUIDE.md     # Detailed deployment instructions
```

---

## 🚀 Quick Start

### View Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sharadlexglobal/barkha-gupta-website.git
   cd barkha-gupta-website
   ```

2. Open `index.html` in your browser

### Deploy to GitHub Pages

1. Go to **Settings → Pages**
2. Select **Source:** `master` branch, `/` (root)
3. Click **Save**
4. Website will be live at: `https://[username].github.io/barkha-gupta-website/`

---

## 🔧 Setup Newsletter & Contact Forms

The website includes newsletter and contact forms that require backend API setup.

### Option 1: Deploy API to Vercel (Recommended)

```bash
cd api
npm install
vercel
```

Add environment variable in Vercel dashboard:
- `RESEND_API_KEY` = your API key from [Resend](https://resend.com/api-keys)

### Option 2: Use Form Services

Replace API calls with services like:
- [Formspree](https://formspree.io)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Google Forms](https://www.google.com/forms/about/)

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

---

## 🎨 Customization

### Update Social Media Links

Find and replace in all HTML files:
- `https://twitter.com/justpeople` → Your Twitter/X URL
- `https://linkedin.com/company/justpeople` → Your LinkedIn URL
- `https://instagram.com/justpeople` → Your Instagram URL
- `https://youtube.com/@justpeople` → Your YouTube URL

### Update Contact Email

Replace `contact@justpeoplebybarkhagupta.in` with your email address.

### Modify Colors

Edit `css/style.css` - CSS variables at the top:
```css
:root {
    --color-ivory: #FFFFF0;
    --color-navy: #2C3E50;
    --color-gold: #D4AF37;
    /* ... */
}
```

---

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Email Service:** Resend API
- **Hosting:** GitHub Pages
- **Fonts:** Google Fonts (Cormorant Garamond, Inter)

---

## 📝 Content Management

### Add Blog Posts

Edit `insights.html` and add:
```html
<article class="blog-card">
    <time class="blog-date">FEB 12, 2026</time>
    <h3 class="blog-title">Your Title</h3>
    <p class="blog-excerpt">Your excerpt...</p>
</article>
```

### Add Services

Edit `services.html` and add:
```html
<div class="service-detail">
    <h3>🎯 Service Name</h3>
    <p>Service description...</p>
</div>
```

### Add Testimonials

Edit `index.html` testimonials section:
```html
<div class="testimonial-card">
    <div class="testimonial-quote">"</div>
    <p class="testimonial-text">Testimonial text...</p>
    <p class="testimonial-author">— Client Name, Location</p>
</div>
```

---

## 📧 Contact

**Email:** contact@justpeoplebybarkhagupta.in  
**Office Hours:** Monday - Saturday, 10:00 AM - 6:00 PM  
**Location:** Delhi, India

---

## 📄 License

© 2026 Just People by Barkha Gupta. All rights reserved.

---

## 🤝 Contributing

This is a private website for Just People by Barkha Gupta. For inquiries about modifications or updates, please contact via email.

---

## 📚 Documentation

- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete deployment instructions
- **[api/README.md](api/README.md)** - API documentation
- **[WEBSITE_REDESIGN_PLAN.md](WEBSITE_REDESIGN_PLAN.md)** - Original design plan

---

**Built with care and attention to detail** ⚖️
