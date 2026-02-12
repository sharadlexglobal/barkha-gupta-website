// Main JavaScript for Just People by Barkha Gupta Website

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('newsletterEmail').value;
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';
        newsletterMessage.textContent = '';
        newsletterMessage.className = 'form-message';
        
        try {
            // Call API endpoint (you'll need to deploy the API separately)
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });
            
            const data = await response.json();
            
            if (data.success) {
                newsletterMessage.textContent = '✓ Successfully subscribed! Check your email for confirmation.';
                newsletterMessage.style.color = '#27ae60';
                newsletterForm.reset();
            } else {
                newsletterMessage.textContent = '✗ ' + (data.error || 'Subscription failed. Please try again.');
                newsletterMessage.style.color = '#e74c3c';
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            newsletterMessage.textContent = '✗ Unable to subscribe. Please try again later or email us directly.';
            newsletterMessage.style.color = '#e74c3c';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';
        }
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        contactMessage.textContent = '';
        contactMessage.className = 'form-message';
        
        try {
            // Call API endpoint (you'll need to deploy the API separately)
            const response = await fetch('/api/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                contactMessage.textContent = '✓ Message sent successfully! We will get back to you soon.';
                contactMessage.style.color = '#27ae60';
                contactForm.reset();
            } else {
                contactMessage.textContent = '✗ ' + (result.error || 'Failed to send message. Please try again.');
                contactMessage.style.color = '#e74c3c';
            }
        } catch (error) {
            console.error('Contact form error:', error);
            contactMessage.textContent = '✗ Unable to send message. Please email us directly at contact@justpeoplebybarkhagupta.in';
            contactMessage.style.color = '#e74c3c';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('.section, .feature-card, .testimonial-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

console.log('Just People by Barkha Gupta - Website Loaded Successfully');
