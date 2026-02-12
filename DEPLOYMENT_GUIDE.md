# Deployment Guide - Just People by Barkha Gupta Website

## 🎉 Your Website is Ready!

All files have been successfully pushed to GitHub:
**Repository:** https://github.com/sharadlexglobal/barkha-gupta-website

---

## 📋 What's Been Built

### ✅ Complete Multi-Page Website
1. **Home Page** (`index.html`) - Hero, services, testimonials, podcast, newsletter
2. **About Us** (`about.html`) - Mission, vision, values
3. **Services** (`services.html`) - 8 service categories
4. **About Founder** (`founder.html`) - Ms. Barkha Gupta's profile
5. **Insights** (`insights.html`) - Blog/podcast content
6. **Contact** (`contact.html`) - Contact form

### ✅ Features Implemented
- Ultra-premium design with animated geometric backgrounds
- Responsive navigation
- Newsletter subscription form (Resend API ready)
- Contact form (Resend API ready)
- Social media integration (Twitter/X, LinkedIn, Instagram)
- OFF THE RECORD podcast section with YouTube link
- Smooth animations and transitions
- Mobile-responsive design

### ✅ Backend API
- Newsletter subscription endpoint (`/api/newsletter/subscribe`)
- Contact form endpoint (`/api/contact/submit`)
- Resend API integration ready
- Located in `/api` folder

---

## 🚀 Step 1: Enable GitHub Pages (Required)

Since automatic enablement requires additional permissions, please manually enable GitHub Pages:

1. Go to: **https://github.com/sharadlexglobal/barkha-gupta-website/settings/pages**

2. Under **"Source"**, select:
   - Branch: **master**
   - Folder: **/ (root)**

3. Click **"Save"**

4. Wait 2-3 minutes for deployment

5. Your website will be live at:
   **https://sharadlexglobal.github.io/barkha-gupta-website/**

---

## 📧 Step 2: Set Up Newsletter & Contact Forms (Optional)

The forms are ready but need the backend API deployed to work. Here's how:

### Option A: Deploy API to Vercel (Recommended - Free)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to API folder:
   ```bash
   cd api
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variable in Vercel dashboard:
   - `RESEND_API_KEY` = your Resend API key from https://resend.com/api-keys

5. Update form endpoints in `js/main.js` to point to your Vercel URL

### Option B: Deploy API to Railway (Free tier available)

1. Go to https://railway.app
2. Create new project from GitHub repo
3. Select the `/api` folder
4. Add environment variable: `RESEND_API_KEY`
5. Deploy
6. Update form endpoints in `js/main.js`

### Option C: Use Form Services (No backend needed)

Replace the API calls with services like:
- **Formspree** (https://formspree.io)
- **Netlify Forms** (if you deploy to Netlify)
- **Google Forms** (embedded)

---

## 🎨 Step 3: Customize Content

### Update Social Media Links

Edit these files and replace placeholder URLs:
- `index.html` (lines with `https://twitter.com/justpeople`, etc.)
- `about.html`
- `services.html`
- `founder.html`
- `insights.html`
- `contact.html`

**Find and replace:**
- `https://twitter.com/justpeople` → Your actual Twitter/X URL
- `https://linkedin.com/company/justpeople` → Your actual LinkedIn URL
- `https://instagram.com/justpeople` → Your actual Instagram URL
- `https://youtube.com/@justpeople` → Your actual YouTube channel URL

### Update Email Address

If needed, replace:
- `contact@justpeoplebybarkhagupta.in` with your actual email

### Add Phone Number

Currently shows `[Contact Number]` in PDF content. Add actual number:
- Format: `<a href="tel:+919876543210">+91 98765 43210</a>`

---

## 📝 Step 4: Add More Content

The website currently has core content. To add more:

1. **Blog Posts** - Edit `insights.html` and add more `<article class="blog-card">` elements

2. **Service Details** - Edit `services.html` to expand service descriptions

3. **Testimonials** - Edit `index.html` to add more client testimonials

4. **Founder Bio** - Edit `founder.html` to add more details about Ms. Barkha Gupta

---

## 🖼️ Step 5: Add Images (Optional)

To add professional photos:

1. Add images to `/images` folder
2. Update HTML to reference them:
   ```html
   <img src="images/barkha-gupta.jpg" alt="Ms. Barkha Gupta">
   ```

---

## 🔧 Technical Details

### File Structure
```
barkha-gupta-website/
├── index.html          # Home page
├── about.html          # About Us page
├── services.html       # Services page
├── founder.html        # About Founder page
├── insights.html       # Blog/Insights page
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styling
├── js/
│   └── main.js         # All JavaScript
├── api/
│   ├── server.js       # Backend API
│   ├── package.json    # Dependencies
│   └── README.md       # API documentation
└── images/             # Image assets
```

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS Grid/Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Node.js + Express** - Backend API
- **Resend API** - Email service integration

---

## 🎯 Next Steps

1. ✅ Enable GitHub Pages (see Step 1 above)
2. ✅ View your live website
3. ⏳ Set up newsletter/contact forms (optional)
4. ⏳ Update social media links
5. ⏳ Add professional photos
6. ⏳ Expand content as needed

---

## 🆘 Need Help?

### Common Issues

**Q: Website not loading?**
A: Wait 2-3 minutes after enabling GitHub Pages, then clear browser cache

**Q: Forms not working?**
A: Forms require backend API deployment (see Step 2) or use form services

**Q: Want to use custom domain?**
A: In GitHub Pages settings, add your custom domain (e.g., justpeople.in)

### Files to Edit

- **Content:** Edit HTML files directly
- **Styling:** Edit `css/style.css`
- **Functionality:** Edit `js/main.js`
- **API:** Edit `api/server.js`

---

## 📊 Website Features Summary

✅ Ultra-premium design aesthetic
✅ Fully responsive (mobile, tablet, desktop)
✅ 6 complete pages with navigation
✅ Newsletter subscription ready
✅ Contact form ready
✅ Social media integration
✅ Podcast section with YouTube link
✅ Client testimonials
✅ Service listings
✅ Smooth animations
✅ SEO-friendly structure
✅ Fast loading times
✅ Professional typography
✅ Accessible markup

---

## 🎨 Design Colors

- **Ivory:** #FFFFF0 (Background)
- **Cream:** #F5F5DC (Sections)
- **Beige:** #E8D5C4 (Accents)
- **Navy:** #2C3E50 (Primary)
- **Charcoal:** #34495E (Secondary)
- **Gold:** #D4AF37 (Highlights)

---

## 📧 Contact

For questions about the website:
- **Email:** contact@justpeoplebybarkhagupta.in
- **GitHub Repo:** https://github.com/sharadlexglobal/barkha-gupta-website

---

**Built with care for Just People by Barkha Gupta** ⚖️
