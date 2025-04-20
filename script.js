// Particles.js Background
document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('particles-js')) {
      particlesJS("particles-js", {
        "particles": {
          "number": { 
            "value": 60, 
            "density": { 
              "enable": true, 
              "value_area": 800 
            } 
          },
          "color": { 
            "value": "#3a86ff" 
          },
          "shape": { 
            "type": "circle" 
          },
          "opacity": { 
            "value": 0.5, 
            "random": true 
          },
          "size": { 
            "value": 3, 
            "random": true 
          },
          "line_linked": { 
            "enable": true, 
            "distance": 150, 
            "color": "#3a86ff", 
            "opacity": 0.2, 
            "width": 1 
          },
          "move": { 
            "enable": true, 
            "speed": 1.5, 
            "direction": "none", 
            "random": true, 
            "straight": false, 
            "out_mode": "out" 
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { 
              "enable": true, 
              "mode": "grab" 
            },
            "onclick": { 
              "enable": true, 
              "mode": "push" 
            }
          }
        }
      });
    }
  });
  // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate buttons on hover
const buttons = document.querySelectorAll('.btn, .service-btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});
// ===== LUXURY PRELOADER =====
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.luxury-loader');
    const letters = document.querySelectorAll('.loader-logo span');
    
    // Animate letters sequentially
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    
    // Animate progress bar
    const progress = document.querySelector('.loader-progress');
    let width = 0;
    const interval = setInterval(() => {
        width += 2;
        progress.style.width = `${width}%`;
        if (width >= 100) {
            clearInterval(interval);
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 1000);
        }
    }, 30);

    // Initialize all other functionality
    initCalculator();
    initAnimations();
    initMobileMenu();
    updateCopyrightYear();
    initHeatmap();
    initFadeInAnimation();
    animateButterfly();
});

// ===== ROI CALCULATOR =====
function initCalculator() {
    const budgetSlider = document.getElementById('monthly-budget');
    const budgetValue = document.getElementById('budget-value');
    const bookingsResult = document.getElementById('bookings-result');
    const revenueResult = document.getElementById('revenue-result');
    const roasResult = document.getElementById('roas-result');

    // Tourism industry average conversion rates
    const CONVERSION_RATE = 0.03; // 3% conversion rate
    const AVERAGE_BOOKING_VALUE = 550; // $550 per booking
    const MIN_ROAS = 3.5;
    const MAX_ROAS = 5.2;

    if (budgetSlider) {
        budgetSlider.addEventListener('input', (e) => {
            const budget = parseInt(e.target.value);
            
            // Calculate estimated bookings
            const estimatedBookings = Math.round(budget * CONVERSION_RATE);
            const bookingRange = `${estimatedBookings - 3}-${estimatedBookings + 5}`;
            
            // Calculate potential revenue
            const potentialRevenue = estimatedBookings * AVERAGE_BOOKING_VALUE;
            
            // Calculate ROAS range (randomized within realistic bounds)
            const currentROAS = MIN_ROAS + (Math.random() * (MAX_ROAS - MIN_ROAS));
            const roasRange = `${MIN_ROAS.toFixed(1)}-${MAX_ROAS.toFixed(1)}X`;
            
            // Update UI
            budgetValue.textContent = budget.toLocaleString();
            bookingsResult.textContent = bookingRange;
            revenueResult.textContent = `$${potentialRevenue.toLocaleString()}`;
            roasResult.textContent = roasRange;
        });

        // Trigger initial calculation
        budgetSlider.dispatchEvent(new Event('input'));
    }
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Special handling for offer list items
                if (entry.target.classList.contains('offer-text')) {
                    animateListItems(entry.target);
                }
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all animateable elements
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrollY * 0.2}px)`;
        }
    });
}

function animateListItems(container) {
    const listItems = container.querySelectorAll('li');
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100 * index);
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
}



// ===== COPYRIGHT YEAR =====
function updateCopyrightYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===== LUXURY BUTTON EFFECTS =====
document.querySelectorAll('.btn-luxury').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===== FADE-IN ANIMATION =====
function initFadeInAnimation() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  }, { threshold: 0.1 });

  fadeInElements.forEach(el => observer.observe(el));
}

// Initialize fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  initFadeInAnimation();
});

// Track current language
let currentLang = localStorage.getItem('lang') || 'en';

// Update ALL language displays
function updateLanguageDisplay() {
  // 1. Update dropdown button text
  document.querySelector('.language-btn').innerHTML = 
    currentLang === 'en' 
      ? 'EN <i class="bx bx-chevron-down"></i>' 
      : 'SR <i class="bx bx-chevron-down"></i>';
  
  // 2. Update all translatable text
  document.querySelectorAll('[data-en], [data-sr]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
  
  // 3. Force Calendly text update
  if (window.location.pathname.includes('calendly')) {
    document.querySelector('h1').textContent = 
      currentLang === 'en' ? 'Schedule Meeting' : 'Zakažite Sastanak';
    document.querySelector('p').textContent = 
      currentLang === 'en' ? 'Choose time' : 'Izaberite vreme';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set up click handlers
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentLang = e.target.getAttribute('data-lang');
      localStorage.setItem('lang', currentLang);
      updateLanguageDisplay();
    });
  });
  
  // First load
  updateLanguageDisplay();
});

document.getElementById('language-select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  // Implement language switch logic here
});

document.getElementById('hamburger-btn').addEventListener('click', function() {
  // Toggle navigation menu visibility
});

function animateButterfly() {
  const butterfly = document.querySelector('.butterfly');
  if (!butterfly) return;

  let x = -100; // Start off-screen
  let y = Math.random() * window.innerHeight; // Random vertical position
  let direction = 1; // 1 for right, -1 for left

  function moveButterfly() {
    x += 2 * direction; // Move horizontally
    y += Math.sin(x / 50) * 2; // Add a wave-like motion

    // Update butterfly position
    butterfly.style.transform = `translate(${x}px, ${y}px)`;

    // Reverse direction if it goes off-screen
    if (x > window.innerWidth + 100 || x < -100) {
      direction *= -1;
      butterfly.style.transform = `scaleX(${direction})`; // Flip the butterfly
      y = Math.random() * window.innerHeight; // Reset vertical position
    }

    requestAnimationFrame(moveButterfly);
  }

  moveButterfly();
}

// Initialize butterfly animation
document.addEventListener('DOMContentLoaded', () => {
  animateButterfly();
});

