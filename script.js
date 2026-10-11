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

// ===== CONTACT FORM (INTEGRATED WITH EMAIL) =====
async function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');
  const form = document.getElementById('contactForm');

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  // Reset notifications
  if (success) success.classList.remove('show');
  if (error) error.classList.remove('show');

  // Loading state
  const originalBtnContent = '<i class="fas fa-paper-plane"></i> Send Message';
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim Pesan...';
  btn.disabled = true;

  try {
    const response = await fetch("https://formsubmit.co/ajax/putriindah2343@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: `[Portfolio Contact] ${subject || 'New Message'} - from ${name}`,
        message: message,
        _captcha: "false",
        _template: "table"
      })
    });

    const data = await response.json();

    if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
      btn.innerHTML = '<i class="fas fa-check"></i> Pesan Terkirim!';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      if (success) {
        success.innerHTML = '<i class="fas fa-check-circle"></i> Pesan berhasil dikirim ke <strong>putriindah2343@gmail.com</strong>! Terima kasih 🌸';
        success.classList.add('show');
      }
      form.reset();

      setTimeout(() => {
        btn.innerHTML = originalBtnContent;
        btn.style.background = '';
        btn.disabled = false;
        if (success) success.classList.remove('show');
      }, 6000);
    } else {
      throw new Error(data.message || 'Gagal mengirim pesan');
    }
  } catch (err) {
    console.warn('FormSubmit fetch failed, showing fallback mailto option:', err);
    btn.innerHTML = originalBtnContent;
    btn.disabled = false;

    const mailtoUrl = `mailto:putriindah2343@gmail.com?subject=${encodeURIComponent('[Portfolio Contact] ' + (subject || 'Pesan Baru'))}&body=${encodeURIComponent('Nama: ' + name + '\nEmail: ' + email + '\n\nPesan:\n' + message)}`;

    if (error) {
      error.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Terkendala jaringan. <a href="${mailtoUrl}" target="_blank">Klik di sini untuk langsung kirim via Email App / Gmail</a>`;
      error.classList.add('show');
    }
  }
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

// ===== PROJECT FILTER =====
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.split(' ').includes(filter)) {
          card.style.display = '';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
      // Refresh AOS positions
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    });
  });
});

