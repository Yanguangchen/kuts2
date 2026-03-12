// Simple static site - only handles interactions, no dynamic rendering

let currentLang = (typeof localStorage !== "undefined" && localStorage.getItem("lang")) ||
  ((typeof navigator !== "undefined" && navigator.language && navigator.language.toLowerCase().startsWith("zh")) ? "zh" : "en");

// Language switching - toggle visibility of elements with data-en/data-zh attributes
function applyLanguage() {
  document.documentElement.lang = currentLang === "zh" ? "zh-Hans" : "en";
  
  // Update language buttons
  const enBtn = document.getElementById("lang-en");
  const zhBtn = document.getElementById("lang-zh");
  if (enBtn && zhBtn) {
    enBtn.classList.toggle("active", currentLang === "en");
    zhBtn.classList.toggle("active", currentLang === "zh");
  }
  
  // Update all elements with data-en/data-zh attributes
  document.querySelectorAll("[data-en], [data-zh]").forEach((el) => {
    const enText = el.getAttribute("data-en");
    const zhText = el.getAttribute("data-zh");
    if (enText && zhText) {
      el.textContent = currentLang === "zh" ? zhText : enText;
    }
  });
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch {}
  applyLanguage();
}

// Mobile menu
function initMobileMenu() {
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileClose = document.getElementById("mobile-close");
  
  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("show");
    mobileMenu.removeAttribute("hidden");
    document.body.classList.add("menu-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "true");
  }
  
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("show");
    mobileMenu.setAttribute("hidden", "");
    document.body.classList.remove("menu-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
  
  if (navToggle) navToggle.addEventListener("click", openMenu);
  if (mobileClose) mobileClose.addEventListener("click", closeMenu);
  if (mobileMenu) mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
  });
  
  // Close menu when selecting a link
  document.querySelectorAll('.mobile-nav a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });
}

// Accordion
function initAccordion() {
  document.querySelectorAll('.acc-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      const panel = item?.querySelector('.acc-panel');
      if (!item || !panel) return;
      
      const isOpen = item.classList.contains('open');
      
      // Close all other items
      document.querySelectorAll('.acc-item').forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const otherPanel = other.querySelector('.acc-panel');
          const otherBtn = other.querySelector('.acc-toggle');
          if (otherPanel) {
            otherPanel.setAttribute('hidden', '');
            otherPanel.style.maxHeight = '0';
          }
          if (otherBtn) {
            otherBtn.setAttribute('aria-expanded', 'false');
          }
        }
      });
      
      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        panel.setAttribute('hidden', '');
        panel.style.maxHeight = '0';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        panel.removeAttribute('hidden');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Gallery lightbox
function resolveAssetUrl(path) {
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || host === '' || window.location.protocol === 'file:') {
    return `https://www.kutskurls.com${path}`;
  }
  return path;
}

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;
  
  const resolvedSrc = resolveAssetUrl(src);
  lightboxImg.src = resolvedSrc;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function initGallery() {
  // Attach click handlers to gallery images
  document.querySelectorAll('#gallery-grid img').forEach((img) => {
    img.addEventListener('click', () => {
      openLightbox(img.src);
    });
  });
  
  // Lightbox close handlers
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightbox = document.getElementById('lightbox');
      if (lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    }
  });
}

// Scroll reveal animations
function observeReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach((el) => observer.observe(el));
}

// Hero progress indicator
function initHeroProgress() {
  const progressBar = document.getElementById('hero-progress-bar');
  if (!progressBar) return;
  
  function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }
  
  window.addEventListener('scroll', updateProgress);
  updateProgress();
}

// Hero typography animation
function animateHeroTypography() {
  const title = document.getElementById('hero-title');
  if (!title) return;
  
  const text = title.textContent;
  title.innerHTML = '';
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = `${i * 0.05}s`;
    span.classList.add('char');
    title.appendChild(span);
  });
}

// Viewport height variable for mobile
function setViewportHeightVar() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Special promotions modal
function initSpecialPromotionsModal() {
  const modal = document.getElementById('special-promotions-modal');
  const closeBtn = document.getElementById('special-promotions-close');
  if (!modal) return;

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // Ensure modal opens each time the page loads.
  openModal();
}

// Initialize everything
function init() {
  applyLanguage();
  initMobileMenu();
  initAccordion();
  initGallery();
  observeReveals();
  initHeroProgress();
  animateHeroTypography();
  setViewportHeightVar();
  initSpecialPromotionsModal();
  
  // Language button handlers
  const enBtn = document.getElementById("lang-en");
  const zhBtn = document.getElementById("lang-zh");
  if (enBtn) enBtn.addEventListener("click", () => setLang("en"));
  if (zhBtn) zhBtn.addEventListener("click", () => setLang("zh"));
  
  // Update viewport height on resize
  window.addEventListener('resize', setViewportHeightVar);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
