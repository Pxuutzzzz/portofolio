// ===== AOS INIT =====
AOS.init({ duration: 800, once: true, offset: 80 });

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE NAV =====
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

// ===== DARK MODE =====
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const html = document.documentElement;

// Load preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateDarkModeIcon(savedTheme);

darkModeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateDarkModeIcon(next);
});

function updateDarkModeIcon(theme) {
  darkModeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ===== PROFILE IMAGE ERROR HANDLING =====
function handleImageError(imgId, placeholderId) {
  const img = document.getElementById(imgId);
  const placeholder = document.getElementById(placeholderId);
  if (img) {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      if (placeholder) placeholder.style.display = 'flex';
    });
    img.addEventListener('load', () => {
      if (placeholder) placeholder.style.display = 'none';
      img.style.display = 'block';
    });
    // Trigger check in case already cached
    if (img.complete && img.naturalWidth === 0) {
      img.style.display = 'none';
      if (placeholder) placeholder.style.display = 'flex';
    } else if (img.complete) {
      if (placeholder) placeholder.style.display = 'none';
    }
  }
}

handleImageError('profileImg', 'profilePlaceholder');
handleImageError('aboutImg', 'aboutImgPlaceholder');

// ===== MODALS =====
function openModal(id) {
  document.getElementById(id).classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
  document.body.style.overflow = '';
}

// Close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.show').forEach(m => {
      m.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
});

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const form = document.getElementById('contactForm');

  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    success.classList.add('show');
    form.reset();

    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = '';
      btn.disabled = false;
      success.classList.remove('show');
    }, 4000);
  }, 1800);
}

// ===== SKILL BAR ANIMATION ON SCROLL =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'none';
      entry.target.offsetHeight; // reflow
      entry.target.style.animation = '';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== TYPING ANIMATION for hero tagline =====
const tagline = document.querySelector('.hero-tagline');
if (tagline) {
  const text = tagline.textContent;
  tagline.textContent = '';
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 35);
    }
  }
  setTimeout(typeWriter, 1200);
}

// ===== COUNTER ANIMATION for stats =====
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const isDec = target.toString().includes('.');
  const decimals = isDec ? 2 : 0;
  const numTarget = parseFloat(target);
  const duration = 2000;
  const step = numTarget / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= numTarget) {
      start = numTarget;
      clearInterval(timer);
    }
    el.textContent = start.toFixed(decimals) + suffix;
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEls = entry.target.querySelectorAll('.stat-number');
      numEls.forEach(el => {
        const raw = el.textContent.trim();
        const suffix = raw.replace(/[0-9.]/g, '');
        const num = raw.replace(/[^0-9.]/g, '');
        animateCounter(el, num, suffix);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
