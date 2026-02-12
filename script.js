// ===================================
// ULTRA-PREMIUM WEBSITE INTERACTIONS
// Barkha Gupta - Judicial Blog
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.blog-card, .contact-section');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('scroll-reveal', 'revealed');
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    
    // Add hover effect sound feedback (optional premium touch)
    const interactiveElements = document.querySelectorAll('.blog-card, .youtube-btn, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    
    // Parallax effect for background shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    
    // Add stagger animation to blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('scroll-reveal');
    });
    
    
    // Cursor trail effect for premium feel (optional)
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    
    // Enhanced YouTube button interaction
    const youtubeBtn = document.querySelector('.youtube-btn');
    if (youtubeBtn) {
        youtubeBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        youtubeBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    
    // Add subtle animation to microphone icon
    const micIcon = document.querySelector('.microphone-icon');
    if (micIcon) {
        setInterval(() => {
            micIcon.style.transform = 'scale(1.05)';
            setTimeout(() => {
                micIcon.style.transform = 'scale(1)';
            }, 1000);
        }, 3000);
    }
    
    
    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    function throttle(func, wait) {
        return function executedFunction(...args) {
            if (!ticking) {
                func.apply(this, args);
                ticking = true;
                setTimeout(() => {
                    ticking = false;
                }, wait);
            }
        };
    }
    
    const throttledReveal = throttle(revealOnScroll, 100);
    window.addEventListener('scroll', throttledReveal);
    
});


// Add intersection observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe all blog cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => observer.observe(card));
});
