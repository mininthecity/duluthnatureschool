// ===== MOBILE NAV TOGGLE =====
const menuBtn = document.querySelector('.nav-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===== ANNOUNCEMENT BANNER CLOSE =====
const bannerClose = document.querySelector('.banner-close');
if (bannerClose) {
  bannerClose.addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
  });
}

// ===== PASSWORD GATE =====
// Change 'Woods1407' to a password of your choice before launch.
// Note: this password is visible in the page source — it keeps casual
// visitors out, but is not intended for high-security data protection.
const ENROLL_PASSWORD = 'Woods1407';
const SESSION_KEY = 'dns_enrolled';

const gate = document.getElementById('password-gate');
const enrollContent = document.getElementById('enroll-content');
const passwordInput = document.getElementById('password-input');
const passwordBtn = document.getElementById('password-btn');
const passwordError = document.getElementById('password-error');

if (gate) {
  // If already unlocked this browser session, skip the gate
  if (sessionStorage.getItem(SESSION_KEY) === 'true') {
    gate.style.display = 'none';
    enrollContent.style.display = 'block';
  }

  function checkPassword() {
    if (passwordInput.value.trim() === ENROLL_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      gate.style.display = 'none';
      enrollContent.style.display = 'block';
    } else {
      passwordError.style.display = 'block';
      passwordInput.value = '';
      passwordInput.focus();
    }
  }

  passwordBtn.addEventListener('click', checkPassword);
  passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkPassword();
    passwordError.style.display = 'none';
  });
}

// ===== GALLERY LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const galleryImgs = document.querySelectorAll('.gallery-grid img');

if (lightbox) {
  galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
    });
  });

  lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('active');
  });
}
