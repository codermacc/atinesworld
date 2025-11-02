/**
 * ============================================
 * ATINESWORLD ENTERPRISES - MAIN JAVASCRIPT
 * ============================================
 * Modern e-commerce interactions for Nigerian products
 * Features: Smooth scrolling, animations, navigation,
 * testimonials, newsletter, and mobile menu
 */

// ============================================
// 1. STICKY NAVIGATION ON SCROLL
// ============================================
const navbar = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 50) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
  
  // Optional: Hide nav on scroll down, show on scroll up
  // Uncomment below if you want this behavior
  
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  
  
  lastScrollY = currentScrollY;
});
// ============================================
// 2. SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      // Close mobile menu if open
      const mobileMenu = document.querySelector('.nav-links');
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.querySelector('.hamburger')?.classList.remove('active');
      }
      
      // Smooth scroll to target
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// 3. ACTIVE NAVIGATION HIGHLIGHT
// ============================================
const sections = document.querySelectorAll('section[id], .hero');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 100) {
      currentSection = section.getAttribute('id') || 'home';
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ============================================
// 4. SCROLL REVEAL ANIMATIONS
// ============================================
const revealElements = document.querySelectorAll(
  '.feature-card, .product-card, .collection-card, .story-section, .community-section'
);

const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach(element => {
  element.classList.add('reveal-hidden');
  revealObserver.observe(element);
});

// ============================================
// Select the arrow
const scrollArrow = document.getElementById("scrollArrow");

// Show arrow after scrolling down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollArrow.style.opacity = "1";
    scrollArrow.style.pointerEvents = "auto";
  } else {
    scrollArrow.style.opacity = "0";
    scrollArrow.style.pointerEvents = "none";
  }
});

// Smooth scroll to top on click
scrollArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ============================================
// 6. NEWSLETTER FORM INTERACTION
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterInput = document.querySelector('.newsletter-input');

// Create toast notification element
const toast = document.createElement('div');
toast.className = 'toast-notification';
toast.innerHTML = '🎉 Thanks for joining the Atinesworld family!';
document.body.appendChild(toast);

newsletterForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = newsletterInput.value.trim();
  
  if (email && email.includes('@')) {
    // Show success toast
    toast.classList.add('show');
    
    // Clear input
    newsletterInput.value = '';
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
});

// ============================================
// 7. PRODUCT CARD HOVER INTERACTION
// ============================================
// ===============================
// PRODUCTS GRID INTERACTIONS
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.querySelector('.products-grid');
  const productCards = Array.from(productsGrid.querySelectorAll('.product-card'));
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const sortButtons = document.querySelectorAll('.sort-buttons button');
  const searchInput = document.querySelector('#searchInput');

  // --- Scroll Fade-In ---
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  productCards.forEach(card => fadeInObserver.observe(card));

  // --- Filter Function ---
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;
      productCards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.style.display = match ? '' : 'none';
      });
    });
  });

  // --- Sort Function ---
  sortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const criteria = btn.dataset.sort;
      const ascending = btn.dataset.order === 'asc';
      const sorted = productCards.sort((a, b) => {
        const valA = parseFloat(a.dataset[criteria]);
        const valB = parseFloat(b.dataset[criteria]);
        return ascending ? valA - valB : valB - valA;
      });
      sorted.forEach(card => productsGrid.appendChild(card));
    });
  });

  // --- Live Search ---
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    productCards.forEach(card => {
      const name = card.querySelector('.product-name').textContent.toLowerCase();
      card.style.display = name.includes(term) ? '' : 'none';
    });
  });
});

// ============================================
// 8. HERO SECTION TEXT ANIMATION
// ============================================
window.addEventListener('load', () => {
  const heroElements = [
    document.querySelector('.hero h1'),
    document.querySelector('.hero-description'),
    document.querySelector('.hero-buttons'),
    document.querySelector('.trust-badges')
  ];
  
  heroElements.forEach((element, index) => {
    if (element) {
      setTimeout(() => {
        element.classList.add('hero-animate');
      }, index * 200); // Stagger animations by 200ms
    }
  });
});

// 8B. HERO GRADIENT ANIMATION
// HERO GRADIENT ANIMATION
// ======================================================
function initHeroGradientAnimation() {
  const heroSection = document.querySelector('.hero');

  if (!heroSection) {
    console.warn('Hero section not found.');
    return;
  }

  console.log('🔥 Hero gradient animation initialized');

  let hueShift = 0;
  let animationPaused = false;

  // 🎨 Brand base colors
  const baseColor1 = '#E67E22';
  const baseColor2 = '#A0522D';

  // Helper: smoothly interpolate between two colors using HSL
  function mixColors(color1, color2, weight) {
    const c1 = tinycolor(color1).toHsl();
    const c2 = tinycolor(color2).toHsl();
    const h = c1.h + (c2.h - c1.h) * weight;
    const s = c1.s + (c2.s - c1.s) * weight;
    const l = c1.l + (c2.l - c1.l) * weight;
    return tinycolor({ h, s, l }).toHexString();
  }

  // 🌈 Continuous animated hue shift
  function animateGradient() {
    if (animationPaused) return;
    hueShift += 0.4;
    if (hueShift > 360) hueShift = 0;

    const shiftAmount = Math.sin(hueShift * 0.02) * 0.3 + 0.3;
    const blended1 = mixColors(baseColor1, baseColor2, shiftAmount);
    const blended2 = mixColors(baseColor2, baseColor1, 1 - shiftAmount);

    heroSection.style.background = `
      linear-gradient(135deg, ${blended1} 0%, ${blended2} 100%)
    `;

    requestAnimationFrame(animateGradient);
  }

  // 🖱️ Mouse movement glow effect
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    heroSection.style.background = `
      radial-gradient(
        circle at ${x}% ${y}%,
        rgba(230, 126, 34, 0.4),
        rgba(160, 82, 45, 0.2),
        transparent 80%
      ),
      linear-gradient(135deg, ${baseColor1}, ${baseColor2})
    `;
  });

  heroSection.addEventListener('mouseleave', () => {
    animationPaused = false;
    animateGradient();
  });

  // ⏯️ Pause when not visible for performance
  const observer = new IntersectionObserver(([entry]) => {
    animationPaused = !entry.isIntersecting;
    if (!animationPaused) animateGradient();
  });
  observer.observe(heroSection);

  // Start animation
  animateGradient();
}

// ============================================
// 9. RESPONSIVE NAVBAR TOGGLE (MOBILE)
// ============================================

// Create hamburger button if it doesn't exist
let hamburger = document.querySelector('.hamburger');
if (!hamburger) {
  hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  navbar.insertBefore(hamburger, navbar.querySelector('.nav-links'));
}

const navLinksMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksMenu.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navLinksMenu.classList.contains('active')) {
    navLinksMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

// ============================================
// 10. TESTIMONIAL SLIDER
// ============================================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
let autoPlayInterval;

function showTestimonial(index, direction = 1) {
  // Remove all classes from all testimonials
  testimonials.forEach((item) => {
    item.classList.remove('active', 'exit-left', 'exit-right');
  });
  
  // Add exit animation to current testimonial
  const exitClass = direction > 0 ? 'exit-left' : 'exit-right';
  if (testimonials[currentTestimonial]) {
    testimonials[currentTestimonial].classList.add(exitClass);
  }
  
  // Update current index
  currentTestimonial = index;
  
  // Show new testimonial with entrance animation
  setTimeout(() => {
    testimonials[currentTestimonial].classList.add('active');
  }, 100);
}

function changeTestimonial(direction) {
  let newIndex = currentTestimonial + direction;
  
  if (newIndex >= testimonials.length) {
    newIndex = 0;
  }
  if (newIndex < 0) {
    newIndex = testimonials.length - 1;
  }
  
  showTestimonial(newIndex, direction);
  resetAutoPlay();
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    changeTestimonial(1);
  }, 5000);
}

// Pause auto-play on hover
const testimonialSection = document.querySelector('.testimonials-section');
if (testimonialSection) {
  testimonialSection.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });
  
  testimonialSection.addEventListener('mouseleave', () => {
    startAutoPlay();
  });
  
  // Initialize
  if (testimonials.length > 0) {
    testimonials[0].classList.add('active');
    startAutoPlay();
  }
  
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      changeTestimonial(-1);
    } else if (e.key === 'ArrowRight') {
      changeTestimonial(1);
    }
  });
}

// Make changeTestimonial available globally for onclick handlers
window.changeTestimonial = changeTestimonial;

// ============================================
// 11. COUNTRY SELECTOR INTERACTION
// ============================================
const countryDropdown = document.querySelector('.country-dropdown');
const flagIcon = document.querySelector('.flag-icon');

const countryFlags = {
  'WORLDWIDE': '🌍',
  'Nigeria': '🇳🇬',
  'United Kingdom': '🇬🇧',
  'Canada': '🇨🇦',
  'United States': '🇺🇸'
};

countryDropdown?.addEventListener('change', (e) => {
  const selectedCountry = e.target.value;
  if (flagIcon && countryFlags[selectedCountry]) {
    flagIcon.textContent = countryFlags[selectedCountry];
  }
});

// ============================================
// 12. IMAGE LAZY LOADING ENHANCEMENT
// ============================================
const images = document.querySelectorAll('img[src]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

images.forEach(img => {
  imageObserver.observe(img);
});

// ============================================
// 13. PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll-heavy functions
window.addEventListener('scroll', debounce(updateActiveNav, 50));

// ============================================
// 14. CONSOLE BRANDING
// ============================================
console.log(
  '%c🌍 Atinesworld Enterprises ',
  'background: #1c2526; color: white; font-size: 20px; padding: 10px; border-radius: 5px;'
);
console.log(
  '%cConnecting Cultures Through Taste 🇳🇬',
  'color: #1c2526; font-size: 14px; font-weight: bold;'
);

// Rotate feature icons when they scroll into view
function initFeatureIconAnimation() {
  const icons = document.querySelectorAll('.feature-icon img');
  if (!icons.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'spinIcon 1s ease-in-out';
        // Optional: Reset animation for replay
        setTimeout(() => {
          entry.target.style.animation = '';
        }, 1200);
      }
    });
  }, { threshold: 0.5 });

  icons.forEach((icon) => observer.observe(icon));
}

// Call this on page load
document.addEventListener('DOMContentLoaded', initFeatureIconAnimation);

// Card tilt effect
const cards = document.querySelectorAll('.feature-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});

// SCROLL-BASED ANIMATION
const scrollElements = document.querySelectorAll(".scroll-fade");

const elementInView = (el, threshold = 1.25) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= window.innerHeight / threshold;
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// Trigger on page load for elements already in view
window.addEventListener("load", () => {
  handleScrollAnimation();
});
/**
 * ============================================
 * ADVANCED MODERN INTERACTIONS FOR ATINESWORLD
 * ============================================
 * Premium effects to make your site feel cutting-edge
 */

// ============================================
// 1. PARALLAX SCROLLING EFFECT
// ============================================
function initParallax() {
  const parallaxElements = document.querySelectorAll('.hero-image');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// ============================================
// 2. MAGNETIC CURSOR EFFECT FOR BUTTONS
// ============================================
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .shop-btn, .btn-collection, .btn-newsletter');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
}

// ============================================
// 3. INTERACTIVE CURSOR TRAIL
// ============================================
function initCursorTrail() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateCursor() {
    // Smooth following effect
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    dotX += (mouseX - dotX) * 0.3;
    dotY += (mouseY - dotY) * 0.3;
    
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Expand on hover over clickable elements
  const clickables = document.querySelectorAll('a, button, .product-card, .collection-card');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
}

// ============================================
// 4. TEXT REVEAL ON SCROLL ANIMATION
// ============================================
function initTextReveal() {
  const textElements = document.querySelectorAll('h1, h2, h3, p');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('text-reveal');
      }
    });
  }, { threshold: 0.1 });
  
  textElements.forEach(el => {
    el.classList.add('text-hidden');
    observer.observe(el);
  });
}

// ============================================
// 5. TILT EFFECT ON PRODUCT CARDS
// ============================================
function initTiltEffect() {
  const cards = document.querySelectorAll('.product-card, .collection-card, .feature-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

// ============================================
// 6. SMOOTH PAGE TRANSITIONS
// ============================================
function initPageTransitions() {
  // Fade in page on load
  document.body.style.opacity = '0';
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });
}

// ============================================
// 7. FLOATING ELEMENTS ANIMATION
// ============================================
function initFloatingElements() {
  const floatingElements = document.querySelectorAll('.trust-badges .badge, .feature-icon');
  
  floatingElements.forEach((el, index) => {
    el.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
    el.style.animationDelay = `${index * 0.2}s`;
  });
}

// ============================================
// 8. IMAGE ZOOM ON HOVER
// ============================================
function initImageZoom() {
  const images = document.querySelectorAll('.product-image img, .story-image img, .hero-image img');
  
  images.forEach(img => {
    const wrapper = img.parentElement;
    wrapper.style.overflow = 'hidden';
    
    wrapper.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    wrapper.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
}

// ============================================
// 9. SPLIT TEXT ANIMATION
// ============================================
function initSplitText() {
  const headings = document.querySelectorAll('.hero h1, .story-content h2');
  
  headings.forEach(heading => {
    const text = heading.textContent;
    heading.innerHTML = '';
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.03}s`;
      heading.appendChild(span);
    });
  });
}

// ============================================
// 10. SCROLL PROGRESS BAR
// ============================================
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

// ============================================
// 11. COUNTER ANIMATION
// ============================================
function initCounterAnimation() {
  const counters = document.querySelectorAll('.rating-number');
  
  const animateCounter = (counter) => {
    const target = parseFloat(counter.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toFixed(1);
        clearInterval(timer);
      } else {
        counter.textContent = current.toFixed(1);
      }
    }, 16);
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// ============================================
// 12. STAGGERED FADE-IN FOR GRIDS
// ============================================
function initStaggeredFadeIn() {
  const grids = document.querySelectorAll('.products-grid, .features-grid, .collections-grid');
  
  grids.forEach(grid => {
    const items = grid.children;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(items).forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    Array.from(items).forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    observer.observe(grid);
  });
}

// ============================================
// 13. TYPEWRITER EFFECT
// ============================================
function initTypewriter() {
  const element = document.querySelector('.hero-description');
  if (!element) return;
  
  const text = element.textContent;
  element.textContent = '';
  element.style.opacity = '1';
  
  let index = 0;
  const speed = 30;
  
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  
  setTimeout(type, 500);
}

// ============================================
// 14. RIPPLE EFFECT ON CLICK
// ============================================
function initRippleEffect() {
  const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .btn-collection');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      this.appendChild(ripple);
      
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ============================================
// 15. LAZY LOAD IMAGES WITH BLUR-UP
// ============================================
function initBlurUpImages() {
  const images = document.querySelectorAll('img[src]');
  
  images.forEach(img => {
    img.style.filter = 'blur(10px)';
    img.style.transition = 'filter 0.5s ease';
    
    if (img.complete) {
      img.style.filter = 'blur(0)';
    } else {
      img.addEventListener('load', () => {
        img.style.filter = 'blur(0)';
      });
    }
  });
}

// ============================================
// INITIALIZE ALL EFFECTS
// ============================================
function initAllAdvancedEffects() {
  console.log('%c🚀 Initializing Advanced Interactions...', 'color: #E67E22; font-size: 16px; font-weight: bold;');
  
  initParallax();
  initMagneticButtons();
  initCursorTrail();
  initTextReveal();
  initTiltEffect();
  initPageTransitions();
  initFloatingElements();
  initImageZoom();
  initScrollProgress();
  initCounterAnimation();
  initStaggeredFadeIn();
  initRippleEffect();
  initBlurUpImages();
  
  // Optional effects (can be heavy, enable selectively)
  // initSplitText();
  // initTypewriter();
  
  console.log('%c✨ All effects initialized!', 'color: #4CAF50; font-size: 14px;');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllAdvancedEffects);
} else {
  initAllAdvancedEffects();
}

// ============================================
// WHATSAPP BUTTON
// ============================================
const whatsappFloat = document.querySelector('.whatsapp-float');

if (whatsappFloat) {
    // Show after scrolling 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.visibility = 'visible';
        } else {
            whatsappFloat.style.opacity = '0';
            whatsappFloat.style.visibility = 'hidden';
        }
    });

    // Initial state
    whatsappFloat.style.opacity = '0';
    whatsappFloat.style.visibility = 'hidden';
    whatsappFloat.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
}

/**
 * ============================================
 * DARK MODE TOGGLE FUNCTIONALITY
 * Add this to your script.js file
 * ============================================
 */

// ============================================
// DARK MODE INITIALIZATION
// ============================================

// Prevent transition flash on page load
document.documentElement.classList.add('no-transition');

// Check for saved theme preference or default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme immediately (before page renders)
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Remove no-transition class after page loads
window.addEventListener('load', () => {
    // Small delay to ensure everything is rendered
    setTimeout(() => {
        document.documentElement.classList.remove('no-transition');
    }, 100);
});

// ============================================
// DARK MODE TOGGLE
// ============================================

function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    if (!themeToggle) {
        console.warn('Theme toggle button not found. Make sure to add the HTML element.');
        return;
    }
    
    // Set initial toggle state
    if (savedTheme === 'dark') {
        themeToggle.classList.add('active');
    }
    
    // Toggle theme function
    function toggleTheme() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            // Switch to light mode
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.classList.remove('active');
            
            // Analytics tracking (optional)
            console.log('Switched to light mode');
            if (typeof gtag !== 'undefined') {
                gtag('event', 'theme_change', {
                    'theme': 'light'
                });
            }
        } else {
            // Switch to dark mode
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.classList.add('active');
            
            // Analytics tracking (optional)
            console.log('Switched to dark mode');
            if (typeof gtag !== 'undefined') {
                gtag('event', 'theme_change', {
                    'theme': 'dark'
                });
            }
        }
    }
    
    // Click event
    themeToggle.addEventListener('click', toggleTheme);
    
    // Keyboard accessibility
    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    // Make toggle focusable and accessible
    themeToggle.setAttribute('tabindex', '0');
    themeToggle.setAttribute('role', 'switch');
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Update aria-checked based on current theme
    const updateAriaChecked = () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        themeToggle.setAttribute('aria-checked', isDark);
    };
    
    updateAriaChecked();
    themeToggle.addEventListener('click', updateAriaChecked);
}

// ============================================
// SYSTEM PREFERENCE DETECTION (OPTIONAL)
// ============================================

function detectSystemTheme() {
    // Check if user has a theme preference saved
    const savedTheme = localStorage.getItem('theme');
    
    // If no saved preference, check system preference
    if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (prefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            
            // Update toggle button if it exists
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.classList.add('active');
            }
        }
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Update toggle button
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                if (newTheme === 'dark') {
                    themeToggle.classList.add('active');
                } else {
                    themeToggle.classList.remove('active');
                }
            }
        }
    });
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initDarkMode();
        // detectSystemTheme(); // Uncomment to enable system preference detection
    });
} else {
    initDarkMode();
    // detectSystemTheme(); // Uncomment to enable system preference detection
}

// ============================================
// EXPORT FOR USE IN OTHER SCRIPTS (OPTIONAL)
// ============================================

window.themeManager = {
    getTheme: () => document.documentElement.getAttribute('data-theme') || 'light',
    setTheme: (theme) => {
        if (theme === 'dark' || theme === 'light') {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                if (theme === 'dark') {
                    themeToggle.classList.add('active');
                } else {
                    themeToggle.classList.remove('active');
                }
            }
        }
    },
    toggleTheme: () => {
        const currentTheme = window.themeManager.getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        window.themeManager.setTheme(newTheme);
    }
};

// ============================================
// CONSOLE LOG
// ============================================

console.log(
    '%c🌓 Dark Mode Enabled',
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 14px; padding: 8px 12px; border-radius: 4px; font-weight: bold;'
);
console.log(`Current theme: ${savedTheme}`);

// ============================================
// END OF DARK MODE SCRIPT
// ============================================

/**
 * ============================================
 * ATINESWORLD PRODUCTS JAVASCRIPT
 * Product filtering, searching, rendering & currency conversion
 * ============================================
 */

// Product Database - 50 Nigerian Products
const productsData = [
    // Snacks (15)
    { id: 1, name: "Kilishi (Spicy Beef Jerky)", category: "snacks", price: 24.99, rating: 4.9, description: "Packed with bold, smoky Nigerian flavor.", productimage: "image/kilishi.jpg" },
    { id: 2, name: "Donkwa", category: "snacks", price: 16.99, rating: 4.8, description: "Traditional Donkwa with a spicy-sweet taste.", emoji: "🍪" },
    { id: 3, name: "Kulikuli", category: "snacks", price: 14.99, rating: 4.7, description: "Crunchy groundnut snack, perfect blend.", emoji: "🥜" },
    { id: 4, name: "Danbunama", category: "snacks", price: 22.99, rating: 4.8, description: "Savory chicken flakes with Northern spices.", emoji: "🍗" },
    { id: 5, name: "Chin Chin", category: "snacks", price: 12.99, rating: 4.6, description: "Crispy fried dough snack with sweet crunch.", emoji: "🍘" },
    { id: 6, name: "Puff Puff Mix", category: "snacks", price: 11.99, rating: 4.5, description: "Ready-to-make Nigerian doughnut mix.", emoji: "🍩" },
    { id: 7, name: "Plantain Chips", category: "snacks", price: 13.99, rating: 4.7, description: "Crispy fried plantain slices.", emoji: "🍌" },
    { id: 8, name: "Coconut Candy", category: "snacks", price: 9.99, rating: 4.4, description: "Sweet chewy coconut treats.", emoji: "🥥" },
    { id: 9, name: "Akara Mix", category: "snacks", price: 15.99, rating: 4.6, description: "Bean cake mix for akara fritters.", emoji: "🫘" },
    { id: 10, name: "Boli Seasoning", category: "snacks", price: 8.99, rating: 4.3, description: "Perfect spice blend for roasted plantain.", emoji: "🌶️" },
    { id: 11, name: "Cashew Nuts", category: "snacks", price: 18.99, rating: 4.8, description: "Premium roasted cashews.", emoji: "🌰" },
    { id: 12, name: "Fried Meat Seasoning", category: "snacks", price: 10.99, rating: 4.5, description: "Special blend for fried meat.", emoji: "🧂" },
    { id: 13, name: "Ginger Candy", category: "snacks", price: 7.99, rating: 4.2, description: "Naturally spicy and sweet candy.", emoji: "🍬" },
    { id: 14, name: "Groundnut Paste", category: "snacks", price: 13.99, rating: 4.6, description: "Smooth peanut butter from groundnuts.", emoji: "🥜" },
    { id: 15, name: "Buns Mix", category: "snacks", price: 12.99, rating: 4.4, description: "Traditional Nigerian buns mix.", emoji: "🧁" },

    // Drinks (12)
    { id: 16, name: "Nutritious Aya Kunu", category: "drinks", price: 19.99, rating: 4.8, description: "Refreshing, nourishing drink.", emoji: "🥤" },
    { id: 17, name: "Zobo Drink", category: "drinks", price: 17.99, rating: 4.7, description: "Tangy hibiscus drink.", emoji: "🍹" },
    { id: 18, name: "Fura da Nono Mix", category: "drinks", price: 21.99, rating: 4.9, description: "Traditional millet and yogurt drink.", emoji: "🥛" },
    { id: 19, name: "Palm Wine Concentrate", category: "drinks", price: 24.99, rating: 4.6, description: "Authentic palm wine flavor.", emoji: "🍷" },
    { id: 20, name: "Tigernut Drink Mix", category: "drinks", price: 18.99, rating: 4.8, description: "Creamy, nutritious tiger nut beverage.", emoji: "🥤" },
    { id: 21, name: "Ginger Drink Mix", category: "drinks", price: 14.99, rating: 4.5, description: "Spicy, warming ginger beverage.", emoji: "🫚" },
    { id: 22, name: "Sobo Leaves (Dried)", category: "drinks", price: 12.99, rating: 4.7, description: "Premium dried hibiscus leaves.", emoji: "🌺" },
    { id: 23, name: "Chapman Mix", category: "drinks", price: 16.99, rating: 4.4, description: "Nigerian cocktail mix.", emoji: "🍹" },
    { id: 24, name: "Coconut Water Powder", category: "drinks", price: 19.99, rating: 4.6, description: "Natural coconut water powder.", emoji: "🥥" },
    { id: 25, name: "Baobab Drink Mix", category: "drinks", price: 22.99, rating: 4.8, description: "Vitamin C-rich baobab powder.", emoji: "🍊" },
    { id: 26, name: "Moringa Tea", category: "drinks", price: 15.99, rating: 4.7, description: "Organic moringa leaves for tea.", emoji: "🍵" },
    { id: 27, name: "Soy Milk Mix", category: "drinks", price: 13.99, rating: 4.5, description: "Protein-rich soy milk powder.", emoji: "🥛" },

    // Spices & Seasonings (8)
    { id: 28, name: "Yaji Spice", category: "spices", price: 11.99, rating: 4.9, description: "Traditional Yaji mix for suya lovers.", emoji: "🌶️" },
    { id: 29, name: "Curry Powder", category: "spices", price: 9.99, rating: 4.7, description: "Authentic Nigerian curry blend.", emoji: "🍛" },
    { id: 30, name: "Locust Beans (Iru)", category: "spices", price: 14.99, rating: 4.8, description: "Fermented locust beans for soups.", emoji: "🫘" },
    { id: 31, name: "Dried Crayfish", category: "spices", price: 16.99, rating: 4.9, description: "Ground Nigerian crayfish.", emoji: "🦐" },
    { id: 32, name: "Pepper Soup Spice", category: "spices", price: 12.99, rating: 4.8, description: "Perfect blend for pepper soup.", emoji: "🌶️" },
    { id: 33, name: "Ogbono (Ground)", category: "spices", price: 18.99, rating: 4.7, description: "Premium ground ogbono seeds.", emoji: "🌰" },
    { id: 34, name: "Thyme Leaves", category: "spices", price: 7.99, rating: 4.5, description: "Dried thyme leaves for cooking.", emoji: "🌿" },
    { id: 35, name: "Uda Spice", category: "spices", price: 13.99, rating: 4.6, description: "Negro pepper for pepper soup.", emoji: "🫚" },

    // Grains & Flours (8)
    { id: 36, name: "Garri Ijebu", category: "grains", price: 19.99, rating: 4.8, description: "Crisp, smooth, and perfect for soaking.", emoji: "🌾" },
    { id: 37, name: "Tuwo Shinkafa", category: "grains", price: 17.99, rating: 4.7, description: "Milled rice flour for swallow.", emoji: "🍚" },
    { id: 38, name: "Poundo Yam", category: "grains", price: 22.99, rating: 4.9, description: "Instant yam flour for pounded yam.", emoji: "🍠" },
    { id: 39, name: "Semovita", category: "grains", price: 16.99, rating: 4.6, description: "Semolina wheat for swallow.", emoji: "🌾" },
    { id: 40, name: "Wheat Meal", category: "grains", price: 15.99, rating: 4.5, description: "Whole wheat flour for meals.", emoji: "🌾" },
    { id: 41, name: "Eba (Cassava Flour)", category: "grains", price: 14.99, rating: 4.8, description: "Pure cassava flour for eba.", emoji: "🌱" },
    { id: 42, name: "Acha (Fonio)", category: "grains", price: 24.99, rating: 4.7, description: "Ancient Nigerian super grain.", emoji: "🌾" },
    { id: 43, name: "Millet Flour", category: "grains", price: 13.99, rating: 4.6, description: "Ground millet for fura and masa.", emoji: "🌾" },

    // Soups & Stews (7)
    { id: 44, name: "Egusi (Melon Seeds)", category: "soups", price: 21.99, rating: 4.9, description: "Ground egusi for traditional soup.", emoji: "🎃" },
    { id: 45, name: "Bitter Leaf (Dried)", category: "soups", price: 12.99, rating: 4.7, description: "Premium dried bitter leaf.", emoji: "🥬" },
    { id: 46, name: "Okra (Dried)", category: "soups", price: 11.99, rating: 4.6, description: "Dried okra for draw soup.", emoji: "🫛" },
    { id: 47, name: "Palm Oil", category: "soups", price: 19.99, rating: 4.8, description: "Pure red palm oil.", emoji: "🛢️" },
    { id: 48, name: "Stockfish", category: "soups", price: 28.99, rating: 4.9, description: "Premium dried stockfish.", emoji: "🐟" },
    { id: 49, name: "Dried Fish", category: "soups", price: 23.99, rating: 4.8, description: "Smoked dried fish for stews.", emoji: "🐟" },
    { id: 50, name: "Banga Spice", category: "soups", price: 15.99, rating: 4.7, description: "Palm fruit soup seasoning blend.", emoji: "🌴" },
];




// ============================================
// CURRENCY CONFIGURATION
// ============================================

const CURRENCIES = {
    USD: { symbol: '$', flag: '🇺🇸', name: 'US Dollar' },
    NGN: { symbol: '₦', flag: '🇳🇬', name: 'Nigerian Naira' },
    GBP: { symbol: '£', flag: '🇬🇧', name: 'British Pound' },
    EUR: { symbol: '€', flag: '🇪🇺', name: 'Euro' },
    CAD: { symbol: 'C$', flag: '🇨🇦', name: 'Canadian Dollar' }
};

// Exchange rates (base: USD)
let exchangeRates = {
    USD: 1,
    NGN: 1550,
    GBP: 0.79,
    EUR: 0.92,
    CAD: 1.35
};

// Current selected currency
let currentCurrency = localStorage.getItem('selectedCurrency') || 'USD';

// ============================================
// STATE MANAGEMENT
// ============================================

let filteredProducts = [...productsData];
let currentFilters = {
    search: '',
    category: 'all',
    priceRange: 'all',
    rating: 0,
    sort: 'default'
};

// ============================================
// INITIALIZATION
// ============================================

function initProducts() {
    updateCategoryCounts();
    initCurrencyConverter();
    renderProducts();
    attachEventListeners();
    fetchExchangeRates();
}

// ============================================
// CURRENCY FUNCTIONS
// ============================================

function initCurrencyConverter() {
    const currencySelector = document.getElementById('currencySelector');
    const currencyDropdown = document.getElementById('currencyDropdown');
    const currentFlag = document.getElementById('currentFlag');
    const currentCurrencyCode = document.getElementById('currentCurrency');
    const currencyOptions = document.querySelectorAll('.currency-option');

    if (!currencySelector) return;

    // Set initial currency display
    updateCurrencyDisplay(currentCurrency);

    // Toggle dropdown
    currencySelector.addEventListener('click', (e) => {
        e.stopPropagation();
        currencyDropdown.classList.toggle('active');
        currencySelector.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        currencyDropdown.classList.remove('active');
        if (currencySelector) {
            currencySelector.classList.remove('active');
        }
    });

    // Prevent dropdown close when clicking inside
    if (currencyDropdown) {
        currencyDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Handle currency selection
    currencyOptions.forEach(option => {
        option.addEventListener('click', () => {
            const currency = option.dataset.currency;
            changeCurrency(currency);
            currencyDropdown.classList.remove('active');
            if (currencySelector) {
                currencySelector.classList.remove('active');
            }
        });
    });
}

function changeCurrency(newCurrency) {
    if (currentCurrency === newCurrency) return;
    
    currentCurrency = newCurrency;
    localStorage.setItem('selectedCurrency', newCurrency);
    
    updateCurrencyDisplay(newCurrency);
    updateAllPrices();
    
    console.log(`Currency changed to ${newCurrency}`);
}

function updateCurrencyDisplay(currency) {
    const currentFlag = document.getElementById('currentFlag');
    const currentCurrencyCode = document.getElementById('currentCurrency');
    const currencyOptions = document.querySelectorAll('.currency-option');
    
    if (!currentFlag || !currentCurrencyCode) return;

    const currencyData = CURRENCIES[currency];
    currentFlag.textContent = currencyData.flag;
    currentCurrencyCode.textContent = currency;
    
    // Update selected option
    currencyOptions.forEach(option => {
        if (option.dataset.currency === currency) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

function updateAllPrices() {
    const priceElements = document.querySelectorAll('.product-price');
    
    priceElements.forEach(priceElement => {
        const basePrice = parseFloat(priceElement.dataset.basePrice);
        const convertedPrice = convertPrice(basePrice, 'USD', currentCurrency);
        const formattedPrice = formatPrice(convertedPrice, currentCurrency);
        
        // Add animation
        priceElement.classList.add('price-updating');
        setTimeout(() => {
            priceElement.textContent = formattedPrice;
            priceElement.classList.remove('price-updating');
        }, 250);
    });
}

function convertPrice(amount, fromCurrency, toCurrency) {
    const usdAmount = amount / exchangeRates[fromCurrency];
    return usdAmount * exchangeRates[toCurrency];
}

function formatPrice(amount, currency) {
    const symbol = CURRENCIES[currency].symbol;
    
    // Format with proper decimals based on currency
    let decimals = 2;
    if (currency === 'NGN') {
        decimals = 0; // Naira typically doesn't use decimals
    }
    
    const formatted = amount.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Symbol position based on currency
    if (currency === 'EUR') {
        return `${formatted}${symbol}`;
    } else {
        return `${symbol}${formatted}`;
    }
}

async function fetchExchangeRates() {
    const loading = document.getElementById('currencyLoading');
    
    try {
        if (loading) {
            loading.classList.add('active');
        }
        
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates) {
            exchangeRates = {
                USD: 1,
                NGN: data.rates.NGN || 1550,
                GBP: data.rates.GBP || 0.79,
                EUR: data.rates.EUR || 0.92,
                CAD: data.rates.CAD || 1.35
            };
            
            updateAllPrices();
            console.log('Exchange rates updated:', exchangeRates);
        }
    } catch (error) {
        console.warn('Could not fetch live rates, using default rates:', error);
    } finally {
        if (loading) {
            loading.classList.remove('active');
        }
    }
}

// ============================================
// FILTER & SEARCH FUNCTIONS
// ============================================

function updateCategoryCounts() {
    const counts = {
        all: productsData.length,
        snacks: productsData.filter(p => p.category === 'snacks').length,
        drinks: productsData.filter(p => p.category === 'drinks').length,
        spices: productsData.filter(p => p.category === 'spices').length,
        grains: productsData.filter(p => p.category === 'grains').length,
        soups: productsData.filter(p => p.category === 'soups').length,
    };

    Object.keys(counts).forEach(category => {
        const countElement = document.getElementById(`count-${category}`);
        if (countElement) {
            countElement.textContent = counts[category];
        }
    });
}

function attachEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('productSearch');
    const clearSearch = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    if (clearSearch) {
        clearSearch.addEventListener('click', clearSearchInput);
    }

    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });

    // Sort dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }

    // Price range filter
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('change', handlePriceFilter);
    }

    // Rating filter
    const ratingFilter = document.getElementById('ratingFilter');
    if (ratingFilter) {
        ratingFilter.addEventListener('change', handleRatingFilter);
    }

    // Reset filters button
    const resetBtn = document.getElementById('resetFilters');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', resetFilters);
    }
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    currentFilters.search = searchTerm;
    
    const clearBtn = document.getElementById('clearSearch');
    if (clearBtn) {
        clearBtn.style.display = searchTerm ? 'block' : 'none';
    }
    
    applyFilters();
}

function clearSearchInput() {
    const searchInput = document.getElementById('productSearch');
    const clearBtn = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.value = '';
        currentFilters.search = '';
    }
    
    if (clearBtn) {
        clearBtn.style.display = 'none';
    }
    
    applyFilters();
}

function handleCategoryFilter(e) {
    const button = e.currentTarget;
    const category = button.dataset.category;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    currentFilters.category = category;
    applyFilters();
}

function handleSort(e) {
    currentFilters.sort = e.target.value;
    applyFilters();
}

function handlePriceFilter(e) {
    currentFilters.priceRange = e.target.value;
    applyFilters();
}

function handleRatingFilter(e) {
    currentFilters.rating = parseFloat(e.target.value);
    applyFilters();
}

function applyFilters() {
    filteredProducts = productsData.filter(product => {
        if (currentFilters.search) {
            const searchLower = currentFilters.search.toLowerCase();
            const matchesName = product.name.toLowerCase().includes(searchLower);
            const matchesDesc = product.description.toLowerCase().includes(searchLower);
            if (!matchesName && !matchesDesc) return false;
        }

        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) {
            return false;
        }

        if (currentFilters.priceRange !== 'all') {
            const maxPrice = parseFloat(currentFilters.priceRange);
            if (product.price > maxPrice) return false;
        }

        if (currentFilters.rating > 0 && product.rating < currentFilters.rating) {
            return false;
        }

        return true;
    });

    sortProducts();
    renderProducts();
}

function sortProducts() {
    switch (currentFilters.sort) {
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            break;
    }
}

// ============================================
// RENDERING FUNCTIONS
// ============================================

function renderProducts() {
    const container = document.getElementById('productsRow');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;

    const displayProducts = filteredProducts.slice(0, 8);

    updateResultsCounter(displayProducts.length, filteredProducts.length);

    if (displayProducts.length === 0) {
        container.innerHTML = '';
        if (noResults) {
            noResults.style.display = 'block';
        }
        return;
    }

    if (noResults) {
        noResults.style.display = 'none';
    }

    container.innerHTML = displayProducts.map(product => createProductCard(product)).join('');
    
    // Update prices after rendering
    updateAllPrices();
}

function createProductCard(product) {
    const convertedPrice = convertPrice(product.price, 'USD', currentCurrency);
    const formattedPrice = formatPrice(convertedPrice, currentCurrency);
    
    return `
        <div class="product-card" data-category="${product.category}" data-price="${product.price}" data-rating="${product.rating}">
            <a href="product-detail.html?id=${product.id}" class="product-link">
                <div class="product-image">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ''}
                    <span class="buy-now-btn">Buy Now</span>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price" data-base-price="${product.price}">${formattedPrice}</span>
                        <div class="product-rating">
                            <span class="star-icon">★</span>
                            <span class="rating-number">${product.rating}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

function updateResultsCounter(displayed, total) {
    const resultsCount = document.getElementById('resultsCount');
    const totalCount = document.getElementById('totalCount');

    if (resultsCount) {
        resultsCount.textContent = displayed;
    }

    if (totalCount) {
        totalCount.textContent = total;
    }
}

function resetFilters() {
    currentFilters = {
        search: '',
        category: 'all',
        priceRange: 'all',
        rating: 0,
        sort: 'default'
    };

    const searchInput = document.getElementById('productSearch');
    const clearBtn = document.getElementById('clearSearch');
    const sortSelect = document.getElementById('sortSelect');
    const priceRange = document.getElementById('priceRange');
    const ratingFilter = document.getElementById('ratingFilter');

    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
    if (sortSelect) sortSelect.value = 'default';
    if (priceRange) priceRange.value = 'all';
    if (ratingFilter) ratingFilter.value = '0';

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const allBtn = document.querySelector('[data-category="all"]');
    if (allBtn) {
        allBtn.classList.add('active');
    }

    applyFilters();
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id));
}

function getAllProducts() {
    return productsData;
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProducts);
} else {
    initProducts();
}

// ============================================
// GLOBAL API EXPORTS
// ============================================

window.AtinesworldProducts = {
    getProductById,
    getAllProducts,
    resetFilters,
    getCurrentCurrency: () => currentCurrency,
    changeCurrency,
    convertPrice,
    formatPrice,
    getExchangeRate: (currency) => exchangeRates[currency],
    updatePrices: updateAllPrices
};







// ============================================
// END OF SCRIPT
// ============================================