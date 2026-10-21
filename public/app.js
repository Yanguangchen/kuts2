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
  
  window.addEventListener("scroll", updateProgress, { passive: true });
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
  
  // Language button handlers
  const enBtn = document.getElementById("lang-en");
  const zhBtn = document.getElementById("lang-zh");
  if (enBtn) enBtn.addEventListener("click", () => setLang("en"));
  if (zhBtn) zhBtn.addEventListener("click", () => setLang("zh"));
  
  window.addEventListener("resize", setViewportHeightVar, { passive: true });
  initHeroMedia();
  initDeferredThirdParties();
}

function loadScript(src, attrs) {
  return new Promise((resolve) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    if (attrs) {
      Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
    }
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

function onIdle(fn, timeout) {
  const start = () => {
    const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, timeout || 1200));
    ric(() => fn(), { timeout: timeout || 2000 });
  };
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}

function prefersLightExperience() {
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  return reduce || saveData;
}

function initHeroMedia() {
  const container = document.getElementById("container");
  if (!container || prefersLightExperience()) return;
  const wide = window.matchMedia && window.matchMedia("(min-width: 900px)").matches;
  if (!wide) return;

  onIdle(() => {
    const video = container.querySelector(".spline-bg-video");
    if (video && !video.querySelector("source")) {
      const source = document.createElement("source");
      source.src = "/public/background.mp4";
      source.type = "video/mp4";
      video.muted = true;
      video.appendChild(source);
      video.load();
      const play = video.play();
      if (play && typeof play.catch === "function") play.catch(() => {});
    }
  }, 1800);

  onIdle(() => {
    if (container.querySelector("spline-viewer")) return;
    loadScript("https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js", {
      type: "module",
    }).then(() => {
      const mount = () => {
        if (container.querySelector("spline-viewer")) return;
        const viewer = document.createElement("spline-viewer");
        viewer.setAttribute("loading-anim-type", "none");
        viewer.setAttribute("url", "https://prod.spline.design/4UOHnuBXVUXfbAdP/scene.splinecode");
        container.appendChild(viewer);
      };
      if (window.customElements && customElements.whenDefined) {
        customElements.whenDefined("spline-viewer").then(mount);
      } else {
        mount();
      }
    });
  }, 2500);
}

function initDeferredThirdParties() {
  onIdle(() => {
    if (document.body && document.body.dataset.analytics === "1" && !window.__kkAnalytics) {
      window.__kkAnalytics = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      loadScript("https://www.googletagmanager.com/gtm.js?id=GTM-5L93NMFZ");
      loadScript("https://www.googletagmanager.com/gtag/js?id=G-LH81QNLPL7").then(() => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
          window.dataLayer.push(arguments);
        };
        window.gtag("js", new Date());
        window.gtag("config", "G-LH81QNLPL7");
      });
    }

    if (document.querySelector("[data-elfsight-app-lazy]")) {
      loadScript("https://elfsightcdn.com/platform.js");
    }

    if (document.getElementById("Setmore_button_iframe") && !document.getElementById("setmore_script")) {
      const script = document.createElement("script");
      script.id = "setmore_script";
      script.async = true;
      script.src = "https://assets.setmore.com/integration/static/setmoreIframeLive.js";
      document.body.appendChild(script);
    }
  }, 2200);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
