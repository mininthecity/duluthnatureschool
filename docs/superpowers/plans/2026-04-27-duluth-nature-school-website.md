# Duluth Nature School Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 6-page static website for Duluth Nature School with shared branding, a photo gallery with lightbox, and a password-protected enrollment page with Stripe payment links.

**Architecture:** Plain HTML/CSS/JavaScript files with no frameworks or build tools. All pages share one CSS file (`css/style.css`) and one JS file (`js/main.js`). Navigation and footer are repeated on each page. Hosted for free on Netlify.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), vanilla JavaScript, Formspree (form submissions), Stripe Payment Links (tuition payments), Netlify (hosting)

---

## Required Information (collect before building)

Before starting Task 4, confirm these values with Rachael:

| Item | Where it's used |
|---|---|
| Instagram profile URL | Nav on all 6 pages |
| Facebook page URL | Nav on all 6 pages |
| Enrollment password | `js/main.js` line with `ENROLL_PASSWORD` — change from `woods2026` to Rachael's chosen password |

---

## File Structure

```
duluthnatureschool_org/
├── index.html           ← Home page
├── about.html           ← About Rachael + mission
├── playgroups.html      ← Program info + pricing table
├── gallery.html         ← Photo grid with lightbox
├── fundraising.html     ← Donation page
├── enroll.html          ← Password-protected enrollment + Stripe buttons
├── css/
│   └── style.css        ← All shared styles (branding, nav, footer, components)
├── js/
│   └── main.js          ← Mobile nav, password gate, gallery lightbox
├── images/
│   ├── logo.png         ← DNS circular logo
│   ├── aboutme.jpeg     ← Rachael's photo (About page)
│   └── gallery/         ← All other photos (used in gallery + hero images)
└── docs/
    └── superpowers/
        ├── specs/
        └── plans/
```

---

## Task 1: Project Setup

**Files:**
- Create: `.gitignore`
- Create: `images/gallery/` directory
- Copy: logo and photos from Desktop

- [ ] **Step 1: Create .gitignore**

```
.DS_Store
.superpowers/
```

Save to `/Users/rachael/projects/duluthnatureschool_org/.gitignore`

- [ ] **Step 2: Create the images directories**

```bash
mkdir -p /Users/rachael/projects/duluthnatureschool_org/images/gallery
mkdir -p /Users/rachael/projects/duluthnatureschool_org/css
mkdir -p /Users/rachael/projects/duluthnatureschool_org/js
```

- [ ] **Step 3: Copy the logo**

```bash
cp "/Users/rachael/Desktop/Nature School/Logo copy.png" /Users/rachael/projects/duluthnatureschool_org/images/logo.png
```

- [ ] **Step 4: Copy the About page photo**

```bash
cp "/Users/rachael/Desktop/School Photo Gallery/aboutme.jpeg" /Users/rachael/projects/duluthnatureschool_org/images/aboutme.jpeg
```

- [ ] **Step 5: Copy all gallery photos**

```bash
rsync -av --exclude="aboutme.jpeg" --exclude="*.textClipping" \
  "/Users/rachael/Desktop/School Photo Gallery/" \
  /Users/rachael/projects/duluthnatureschool_org/images/gallery/
```

- [ ] **Step 6: Verify files copied correctly**

```bash
ls /Users/rachael/projects/duluthnatureschool_org/images/
ls /Users/rachael/projects/duluthnatureschool_org/images/gallery/ | wc -l
```

Expected: `aboutme.jpeg  gallery/  logo.png` and a count of ~50 files in gallery.

- [ ] **Step 7: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add .gitignore images/
git commit -m "feat: add project structure and images"
```

---

## Task 2: CSS Foundation

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Create css/style.css with all shared styles**

```css
/* ===== CUSTOM PROPERTIES (brand colors) ===== */
:root {
  --green: #3d6b35;
  --green-dark: #2d5227;
  --sage: #f0ede6;
  --white: #ffffff;
  --text: #222222;
  --text-light: #555555;
}

/* ===== RESET ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; color: var(--text); background: var(--white); }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

/* ===== ANNOUNCEMENT BANNER ===== */
.banner {
  background: #111;
  color: white;
  text-align: center;
  padding: 0.5rem 3rem;
  font-size: 0.85rem;
  position: relative;
}
.banner-close {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  line-height: 1;
}

/* ===== NAVIGATION ===== */
nav {
  background: white;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  font-weight: 600;
  color: var(--green);
  font-size: 0.95rem;
}
.nav-links a:hover { text-decoration: underline; }
.nav-logo img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.nav-social {
  display: flex;
  gap: 0.5rem;
  font-size: 1.25rem;
}
.nav-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--green);
}

/* ===== BUTTONS ===== */
.btn {
  display: inline-block;
  background: var(--green);
  color: white;
  padding: 0.55rem 1.25rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}
.btn:hover { background: var(--green-dark); }

/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-content {
  position: relative;
  z-index: 1;
  padding: 2rem 2.5rem;
}
.hero-title {
  color: white;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  text-shadow: 0 2px 14px rgba(0,0,0,0.55);
}

/* ===== PAGE SECTIONS ===== */
.section {
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
.section-sage {
  background: var(--sage);
  padding: 3rem 2rem;
}
.section-sage .section-inner {
  max-width: 1100px;
  margin: 0 auto;
}
h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; margin-bottom: 1rem; }
h2 { font-size: clamp(1.3rem, 3vw, 1.9rem); font-weight: 700; margin-bottom: 1rem; color: var(--text); }
h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem; }
p { line-height: 1.75; color: var(--text-light); margin-bottom: 1rem; }
p:last-child { margin-bottom: 0; }

/* ===== FEATURE CARDS (home page) ===== */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
.feature-card {
  background: var(--sage);
  padding: 1.5rem;
  border-radius: 8px;
}
.feature-card h3 { color: var(--green); }

/* ===== TWO-PHOTO GRID (home page) ===== */
.photo-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}
.photo-pair img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
}

/* ===== ABOUT PAGE ===== */
.about-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2.5rem;
  align-items: start;
  margin-bottom: 2rem;
}
.about-photo {
  width: 100%;
  border-radius: 8px;
}
.blockquote {
  border-left: 4px solid var(--green);
  padding: 1rem 1.5rem;
  background: #f5f9f3;
  margin: 2rem 0;
  font-style: italic;
  line-height: 1.85;
  color: var(--text);
}
.blockquote cite {
  display: block;
  margin-top: 0.75rem;
  font-style: normal;
  font-size: 0.9rem;
  color: var(--text-light);
}

/* ===== PRICING TABLE (playgroups page) ===== */
.table-wrap { overflow-x: auto; margin: 1.5rem 0; }
.price-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
}
.price-table th {
  background: var(--green);
  color: white;
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.9rem;
}
.price-table td {
  padding: 0.65rem 1rem;
  border-bottom: 1px solid #e8e8e8;
  font-size: 0.9rem;
}
.price-table tr:hover td { background: var(--sage); }
.price-table .tbd { color: #999; font-style: italic; }

/* ===== GALLERY PAGE ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
.gallery-grid img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.gallery-grid img:hover { opacity: 0.82; }

/* ===== LIGHTBOX ===== */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 1000;
  align-items: center;
  justify-content: center;
}
.lightbox.active { display: flex; }
.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
}
.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  background: none;
  border: none;
  line-height: 1;
}

/* ===== FUNDRAISING PAGE ===== */
.fundraising-hero {
  text-align: center;
  padding: 3rem 2rem 1rem;
}
.fundraising-hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}
.why-card { text-align: center; padding: 1.25rem; }
.why-card h3 { color: var(--green); font-size: 1rem; }

/* ===== ENROLL PAGE ===== */
.password-gate {
  max-width: 400px;
  margin: 4rem auto;
  text-align: center;
  padding: 2.5rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  border: 2px solid var(--sage);
}
.password-gate .lock-icon { font-size: 3rem; margin-bottom: 1rem; }
.password-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
  letter-spacing: 0.1em;
}
.password-input:focus { outline: none; border-color: var(--green); }
.password-error {
  color: #cc0000;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: none;
}
.enroll-content { display: none; }

.form-section { max-width: 600px; margin: 0 auto 3rem; }
.form-group { margin-bottom: 1.25rem; }
.form-label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: var(--text);
}
.form-input {
  width: 100%;
  padding: 0.65rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
}
.form-input:focus { outline: none; border-color: var(--green); }
.checkbox-group { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 0.25rem; }
.checkbox-label { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; cursor: pointer; }

.pay-section { max-width: 700px; margin: 0 auto; }
.pay-btn {
  background: var(--green);
  color: white;
  border: none;
  padding: 0.4rem 0.85rem;
  border-radius: 4px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.15s;
}
.pay-btn:hover { background: var(--green-dark); }
.pay-table { width: 100%; border-collapse: collapse; }
.pay-table th {
  background: var(--green);
  color: white;
  padding: 0.65rem 1rem;
  text-align: left;
  font-size: 0.85rem;
}
.pay-table td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #eee;
  font-size: 0.88rem;
}
.pay-table tr:hover td { background: var(--sage); }

/* ===== FOOTER ===== */
footer {
  background: var(--green);
  color: white;
  text-align: center;
  padding: 1.25rem 1rem;
  font-size: 0.9rem;
  line-height: 1.8;
}
footer a { color: white; }
footer a:hover { text-decoration: underline; }

/* ===== MOBILE RESPONSIVE ===== */
@media (max-width: 768px) {
  nav { flex-wrap: wrap; position: relative; padding: 0.75rem 1rem; }
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    order: 4;
    padding: 0.75rem 0;
    gap: 0.75rem;
    border-top: 1px solid #eee;
    margin-top: 0.5rem;
  }
  .nav-links.open { display: flex; }
  .nav-menu-btn { display: block; }
  .about-layout { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .why-grid { grid-template-columns: 1fr; }
  .photo-pair { grid-template-columns: 1fr; }
  .feature-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .gallery-grid { grid-template-columns: 1fr; }
  .section { padding: 2rem 1rem; }
}
```

- [ ] **Step 2: Verify the CSS file was created**

```bash
wc -l /Users/rachael/projects/duluthnatureschool_org/css/style.css
```

Expected: ~200+ lines.

- [ ] **Step 3: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add css/style.css
git commit -m "feat: add shared CSS with branding and all component styles"
```

---

## Task 3: JavaScript

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create js/main.js**

```javascript
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
// Change 'woods2026' to a password of your choice before launch.
// Note: this password is visible in the page source — it keeps casual
// visitors out, but is not intended for high-security data protection.
const ENROLL_PASSWORD = 'woods2026';
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
```

- [ ] **Step 2: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add js/main.js
git commit -m "feat: add JavaScript for nav, password gate, and gallery lightbox"
```

---

## Task 4: Home Page

**Files:**
- Create: `index.html`

- [ ] **Step 1: Choose a hero photo**

Look at the images in `images/gallery/`. A good hero photo shows a child outdoors in nature (hiking, playing, exploring). `mudpuddle.jpg` or one of the `wintertreeclimb` photos work well. Note the filename you choose — you'll use it in the next step.

- [ ] **Step 2: Create index.html**

Replace `[HERO_PHOTO]`, `[FEATURED_PHOTO_1]`, and `[FEATURED_PHOTO_2]` with actual filenames from `images/gallery/` (e.g., `mudpuddle.jpg`, `snowangel1.png`). Replace `[INSTAGRAM_URL]` and `[FACEBOOK_URL]` with the real social media URLs.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Duluth Nature School — Wander. Discover. Wonder.</title>
  <meta name="description" content="Duluth Nature School offers nature-based playgroup sessions for children ages 3–10 in the Kenwood Neighborhood, Duluth, MN.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <div class="banner">
    Donate in the fundraising tab to get children into the woods!
    <button class="banner-close" aria-label="Close announcement">×</button>
  </div>

  <nav>
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="playgroups.html">Playgroups</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Fundraising</a>
    </div>
    <div class="nav-logo">
      <a href="index.html"><img src="images/logo.png" alt="Duluth Nature School"></a>
    </div>
    <div class="nav-right">
      <div class="nav-social">
        <a href="[INSTAGRAM_URL]" target="_blank" rel="noopener" aria-label="Instagram">📷</a>
        <a href="[FACEBOOK_URL]" target="_blank" rel="noopener" aria-label="Facebook">📘</a>
      </div>
      <a href="enroll.html" class="btn">Enroll</a>
      <button class="nav-menu-btn" aria-label="Open menu">☰</button>
    </div>
  </nav>

  <section class="hero">
    <img class="hero-bg" src="images/gallery/[HERO_PHOTO]" alt="Child exploring in the woods">
    <div class="hero-content">
      <h1 class="hero-title">Wander. Discover. Wonder.</h1>
    </div>
  </section>

  <div class="section">
    <p style="font-size:1.1rem; max-width: 720px;">
      Our mission is to nurture and grow children's innate curiosity and sense of wonder through nature-based play and Montessori methods. Using the outdoor environment as our primary learning space, we guide children to explore, learn from, and interact with the natural world.
    </p>
    <a href="playgroups.html" class="btn" style="margin-top: 1.25rem;">Learn About Our Playgroups</a>

    <div class="feature-grid">
      <div class="feature-card">
        <h3>📅 Mon–Thu Mornings</h3>
        <p>3-hour outdoor sessions in Duluth's Kenwood Neighborhood</p>
      </div>
      <div class="feature-card">
        <h3>🌿 Ages 3–10</h3>
        <p>Primarily preschool-age, open to older children including homeschool families</p>
      </div>
      <div class="feature-card">
        <h3>🍂 Seasonal Semesters</h3>
        <p>Enroll each season — choose the days that fit your family's schedule</p>
      </div>
    </div>

    <div class="photo-pair">
      <img src="images/gallery/[FEATURED_PHOTO_1]" alt="Children playing outdoors">
      <img src="images/gallery/[FEATURED_PHOTO_2]" alt="Nature exploration">
    </div>
  </div>

  <footer>
    Kenwood Neighborhood, Duluth, MN 55811 &nbsp;|&nbsp; (218) 216-7876 &nbsp;|&nbsp;
    <a href="mailto:info@duluthnatureschool.org">info@duluthnatureschool.org</a>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open in browser and verify**

```bash
open /Users/rachael/projects/duluthnatureschool_org/index.html
```

Check: logo shows in nav, hero photo fills the screen with text overlay, three feature cards appear, footer shows contact info. Resize the browser window to check it looks OK on a narrow screen (mobile).

- [ ] **Step 4: Add social icons to all other pages**

The About, Playgroups, Gallery, Fundraising, and Enroll pages also need social icons in their nav. In each of those files, find the `<div class="nav-right">` block and add the social icons the same way as index.html:

```html
<div class="nav-right">
  <div class="nav-social">
    <a href="[INSTAGRAM_URL]" target="_blank" rel="noopener" aria-label="Instagram">📷</a>
    <a href="[FACEBOOK_URL]" target="_blank" rel="noopener" aria-label="Facebook">📘</a>
  </div>
  <a href="enroll.html" class="btn">Enroll</a>
  <button class="nav-menu-btn" aria-label="Open menu">☰</button>
</div>
```

Replace `[INSTAGRAM_URL]` and `[FACEBOOK_URL]` with the real URLs in all 6 pages.

- [ ] **Step 5: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add index.html
git commit -m "feat: add home page"
```

---

## Task 5: About Page

**Files:**
- Create: `about.html`

- [ ] **Step 1: Create about.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About — Duluth Nature School</title>
  <meta name="description" content="Meet Rachael and learn about the mission of Duluth Nature School.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <nav>
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="playgroups.html">Playgroups</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Fundraising</a>
    </div>
    <div class="nav-logo">
      <a href="index.html"><img src="images/logo.png" alt="Duluth Nature School"></a>
    </div>
    <div class="nav-right">
      <a href="enroll.html" class="btn">Enroll</a>
      <button class="nav-menu-btn" aria-label="Open menu">☰</button>
    </div>
  </nav>

  <div class="section">

    <div class="about-layout">
      <img class="about-photo" src="images/aboutme.jpeg" alt="Rachael, founder of Duluth Nature School">
      <div>
        <h1>About Rachael</h1>
        <p>Rachael is dedicated to creating an environment where children thrive, develop independence, and grow through meaningful outdoor experiences. She earned a Bachelor of Science in Education from the University of Minnesota and an Early Childhood Montessori diploma through NAMC.</p>
        <p>Rachael is a licensed teacher with over 15 years of diverse experience in childcare and education. Her career has spanned various settings including public, private, charter, and non-profit schools, as well as childcare centers, private homes, and organizations such as the Boys &amp; Girls Club of America and the YMCA.</p>
        <p>Rachael's passion for lifelong learning is intertwined with her love for nature. Founding this school is the culmination of these passions, providing children with organic opportunities to explore, problem-solve, and engage their senses in the natural world. Outside of work, Rachael enjoys hiking, biking, and immersing herself in the tranquility and adventures nature offers. Through Duluth Nature School, she aims to inspire a deep connection between children and the outdoors, fostering both personal growth and a love for the environment.</p>
      </div>
    </div>

    <h2>Duluth Nature School</h2>
    <p>Our mission is to nurture and grow children's innate curiosity and sense of wonder through nature-based play and Montessori methods. Using the outdoor environment as our primary learning space, we guide children to explore, learn from, and interact with the natural environment and their peers. Children's physical, cognitive, and social development is supported as they gain a better understanding of nature and themselves, along with the skills for success in further education and life as independent citizens.</p>

    <blockquote class="blockquote">
      "In nature, children learn to take risks, overcome fears, make new friends, regulate emotions, and create imaginary worlds."
      <cite>— Angela J. Hanscom, <em>Balanced and Barefoot: How Unrestricted Outdoor Play Makes for Strong, Confident, and Capable Children</em></cite>
    </blockquote>

  </div>

  <footer>
    Kenwood Neighborhood, Duluth, MN 55811 &nbsp;|&nbsp; (218) 216-7876 &nbsp;|&nbsp;
    <a href="mailto:info@duluthnatureschool.org">info@duluthnatureschool.org</a>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

```bash
open /Users/rachael/projects/duluthnatureschool_org/about.html
```

Check: Rachael's photo appears beside her bio, the mission paragraph is readable, the blockquote has a green left border, navigation links work.

- [ ] **Step 3: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add about.html
git commit -m "feat: add about page"
```

---

## Task 6: Playgroups Page

**Files:**
- Create: `playgroups.html`

- [ ] **Step 1: Choose a hero photo for this page**

Pick a photo from `images/gallery/` that shows outdoor play — `balancelog.png`, `wintertreeclimb1.png`, or `mudkitchen1.png` all work well. Note the filename.

- [ ] **Step 2: Create playgroups.html**

Replace `[PLAYGROUPS_HERO_PHOTO]` with the filename you chose.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Playgroups — Duluth Nature School</title>
  <meta name="description" content="Nature-based playgroup sessions for children ages 3–10, Monday–Thursday mornings. View schedule and tuition pricing.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <nav>
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="playgroups.html">Playgroups</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Fundraising</a>
    </div>
    <div class="nav-logo">
      <a href="index.html"><img src="images/logo.png" alt="Duluth Nature School"></a>
    </div>
    <div class="nav-right">
      <a href="enroll.html" class="btn">Enroll</a>
      <button class="nav-menu-btn" aria-label="Open menu">☰</button>
    </div>
  </nav>

  <section class="hero" style="min-height: 280px;">
    <img class="hero-bg" src="images/gallery/[PLAYGROUPS_HERO_PHOTO]" alt="Children playing outdoors">
    <div class="hero-content">
      <h1 class="hero-title">Nature-Based Play, Every Season</h1>
    </div>
  </section>

  <div class="section">

    <h2>What Are Our Playgroups?</h2>
    <p>Each session is a three-hour, nature-based outdoor playgroup held Monday through Thursday mornings in Duluth's Kenwood Neighborhood. Children explore, create, and learn through unstructured outdoor play guided by Montessori principles.</p>
    <p><strong>Children must be bathroom independent to attend.</strong> Our primary age group is 3–5 years old. Children up to age 10 are welcome — homeschool families attend year-round, and all families are welcome during summer school breaks.</p>
    <p>Families enroll per semester and may choose a different schedule each season to fit their child's changing developmental needs.</p>

    <h2 style="margin-top: 2rem;">2026–2027 Schedule &amp; Tuition</h2>
    <p>Tuition is a flat rate for the full semester, based on the number of days per week your child attends. You choose which days (Monday through Thursday) each semester.</p>

    <div class="table-wrap">
      <table class="price-table">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Dates</th>
            <th>1 Day/Week</th>
            <th>2 Days/Week</th>
            <th>3 Days/Week</th>
            <th>4 Days/Week</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Summer Playgroups</strong></td>
            <td>TBD, 2026</td>
            <td class="tbd" colspan="4">Pricing TBD</td>
          </tr>
          <tr>
            <td><strong>Fall Semester</strong></td>
            <td>Sep 14 – Dec 17, 2026</td>
            <td>$530</td>
            <td>$1,050</td>
            <td>$1,570</td>
            <td>$2,090</td>
          </tr>
          <tr>
            <td><strong>Winter Semester</strong></td>
            <td>Jan 4 – Mar 25, 2027</td>
            <td>$490</td>
            <td>$970</td>
            <td>$1,450</td>
            <td>$1,930</td>
          </tr>
          <tr>
            <td><strong>Spring Semester</strong></td>
            <td>Apr 12 – Jun 4, 2027</td>
            <td>$330</td>
            <td>$650</td>
            <td>$970</td>
            <td>$1,290</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: var(--sage); border-radius: 8px; padding: 2rem; text-align: center; margin-top: 2rem;">
      <h2>Interested in Enrolling?</h2>
      <p>Enrollment begins with an in-person visit and tour. Contact us to schedule yours — we'd love to meet your family.</p>
      <a href="mailto:info@duluthnatureschool.org" class="btn">Get in Touch</a>
    </div>

  </div>

  <footer>
    Kenwood Neighborhood, Duluth, MN 55811 &nbsp;|&nbsp; (218) 216-7876 &nbsp;|&nbsp;
    <a href="mailto:info@duluthnatureschool.org">info@duluthnatureschool.org</a>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open in browser and verify**

```bash
open /Users/rachael/projects/duluthnatureschool_org/playgroups.html
```

Check: hero photo shows, pricing table is readable, "Get in Touch" button opens the mail app when clicked, table scrolls horizontally on narrow screens.

- [ ] **Step 4: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add playgroups.html
git commit -m "feat: add playgroups page with schedule and pricing table"
```

---

## Task 7: Gallery Page

**Files:**
- Create: `gallery.html`

- [ ] **Step 1: List all gallery image filenames**

```bash
ls /Users/rachael/projects/duluthnatureschool_org/images/gallery/
```

Note all the filenames. You'll use them to build the `<img>` tags in the next step.

- [ ] **Step 2: Create gallery.html**

For each image file in `images/gallery/`, add one `<img>` tag inside the `.gallery-grid` div. Use descriptive alt text based on the filename (e.g., `mudpuddle.jpg` → `alt="Child playing in a mud puddle"`). The template below shows the pattern — add all your images following the same format.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery — Duluth Nature School</title>
  <meta name="description" content="Photos from Duluth Nature School — outdoor play, seasonal activities, and nature exploration.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <nav>
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="playgroups.html">Playgroups</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Fundraising</a>
    </div>
    <div class="nav-logo">
      <a href="index.html"><img src="images/logo.png" alt="Duluth Nature School"></a>
    </div>
    <div class="nav-right">
      <a href="enroll.html" class="btn">Enroll</a>
      <button class="nav-menu-btn" aria-label="Open menu">☰</button>
    </div>
  </nav>

  <div class="section">
    <h1>Gallery</h1>
    <p>A glimpse into our days outdoors. Click any photo to see it larger.</p>

    <div class="gallery-grid" style="margin-top: 1.5rem;">
      <img src="images/gallery/mudpuddle.jpg" alt="Child playing in a mud puddle">
      <img src="images/gallery/wintertreeclimb1.png" alt="Child climbing a tree in winter">
      <img src="images/gallery/wintertreeclimb2.png" alt="Child climbing a tree in winter">
      <img src="images/gallery/wintertreeclimb3.png" alt="Child climbing a tree in winter">
      <img src="images/gallery/snowangel1.png" alt="Child making a snow angel">
      <img src="images/gallery/shoveling.png" alt="Child shoveling snow">
      <img src="images/gallery/mudkitchen1.png" alt="Mud kitchen play">
      <img src="images/gallery/playscape1.png" alt="Children at the playscape">
      <img src="images/gallery/playscape2.png" alt="Children at the playscape">
      <img src="images/gallery/sandbox.jpg" alt="Children playing in the sandbox">
      <img src="images/gallery/sandbox2.jpg" alt="Children playing in the sandbox">
      <img src="images/gallery/sandbox.winter.png" alt="Sandbox in winter">
      <img src="images/gallery/balancelog.png" alt="Child balancing on a log">
      <img src="images/gallery/snack.png" alt="Snack time outdoors">
      <img src="images/gallery/bootsremovableliner.png" alt="Outdoor boots with removable liner">
      <img src="images/gallery/mitten.png" alt="Winter mitten">
      <!-- Add all Screenshot files here, e.g.: -->
      <!-- <img src="images/gallery/Screenshot 2024-11-29 at 7.44.50 PM.png" alt="Nature school activity"> -->
    </div>
  </div>

  <!-- Lightbox overlay -->
  <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
    <button id="lightbox-close" class="lightbox-close" aria-label="Close photo">×</button>
    <img id="lightbox-img" class="lightbox-img" src="" alt="">
  </div>

  <footer>
    Kenwood Neighborhood, Duluth, MN 55811 &nbsp;|&nbsp; (218) 216-7876 &nbsp;|&nbsp;
    <a href="mailto:info@duluthnatureschool.org">info@duluthnatureschool.org</a>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

After creating the file, add `<img>` tags for all the Screenshot files too (following the same pattern shown in the comment above).

- [ ] **Step 3: Open in browser and verify**

```bash
open /Users/rachael/projects/duluthnatureschool_org/gallery.html
```

Check: photos appear in a 3-column grid, clicking a photo opens it full-screen in the lightbox, pressing Escape or clicking the × closes the lightbox, clicking outside the photo also closes it.

- [ ] **Step 4: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add gallery.html
git commit -m "feat: add gallery page with lightbox"
```

---

## Task 8: Fundraising Page

**Files:**
- Create: `fundraising.html`

- [ ] **Step 1: Create fundraising.html**

The `[STRIPE_DONATION_LINK]` placeholder will be replaced in Task 10 after setting up Stripe. For now, use `#` so the button doesn't go anywhere.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fundraising — Duluth Nature School</title>
  <meta name="description" content="Support nature education for children in Duluth. Your donation helps with access, gear, community, and more.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <nav>
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="playgroups.html">Playgroups</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Fundraising</a>
    </div>
    <div class="nav-logo">
      <a href="index.html"><img src="images/logo.png" alt="Duluth Nature School"></a>
    </div>
    <div class="nav-right">
      <a href="enroll.html" class="btn">Enroll</a>
      <button class="nav-menu-btn" aria-label="Open menu">☰</button>
    </div>
  </nav>

  <div class="fundraising-hero">
    <h1>Make an Impact Today</h1>
    <p style="font-size: 1.1rem; color: var(--text-light);">Support nature education with your donation</p>
  </div>

  <div class="section-sage">
    <div class="section-inner">
      <div class="why-grid">
        <div class="why-card">
          <h3>✳ Access</h3>
          <p>Accessibility takes time. As the newest school in the woods, we don't yet have scholarships available for students.</p>
        </div>
        <div class="why-card">
          <h3>✳ Gear</h3>
          <p>When every child has robust outdoor gear, they can fully experience every season, every day.</p>
        </div>
        <div class="why-card">
          <h3>✳ Community</h3>
          <p>Hosting community events strengthens children's connections and shares the benefits of nature with all ages.</p>
        </div>
        <div class="why-card">
          <h3>✳ Enrichment</h3>
          <p>Collaborating with community members and accessing resources enriches our curriculum and learning opportunities.</p>
        </div>
        <div class="why-card">
          <h3>✳ Stewardship</h3>
          <p>Teaching care for the environment instills sustainable habits that benefit both the community and the planet.</p>
        </div>
        <div class="why-card">
          <h3>✳ Safety</h3>
          <p>Equipment maintenance, infrastructure improvements, and licensing standards keep our spaces safe for children.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="section" style="text-align: center;">
    <a href="#" class="btn" style="font-size: 1.1rem; padding: 0.75rem 2rem;" id="donate-btn">Donate</a>
    <p style="margin-top: 1rem; font-size: 0.85rem;">You'll be taken to a secure Stripe payment page.</p>
  </div>

  <footer>
    Kenwood Neighborhood, Duluth, MN 55811 &nbsp;|&nbsp; (218) 216-7876 &nbsp;|&nbsp;
    <a href="mailto:info@duluthnatureschool.org">info@duluthnatureschool.org</a>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

```bash
open /Users/rachael/projects/duluthnatureschool_org/fundraising.html
```

Check: "Make an impact today" heading shows, 6 "Why give?" cards appear in a grid, Donate button shows (the link will be added in Task 10).

- [ ] **Step 3: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add fundraising.html
git commit -m "feat: add fundraising page"
```

---

## Task 9: Enroll Page

**Files:**
- Create: `enroll.html`

The Formspree form endpoint will be added in Task 10. Use `YOUR_FORMSPREE_ID` as a placeholder for now. The Stripe payment links will be added in Task 11.

- [ ] **Step 1: Create enroll.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enroll — Duluth Nature School</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <nav>
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="playgroups.html">Playgroups</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Fundraising</a>
    </div>
    <div class="nav-logo">
      <a href="index.html"><img src="images/logo.png" alt="Duluth Nature School"></a>
    </div>
    <div class="nav-right">
      <a href="enroll.html" class="btn">Enroll</a>
      <button class="nav-menu-btn" aria-label="Open menu">☰</button>
    </div>
  </nav>

  <!-- PASSWORD GATE -->
  <div id="password-gate" class="password-gate">
    <div class="lock-icon">🔒</div>
    <h2>Invited Families Only</h2>
    <p style="color: var(--text-light); margin-top: 0.5rem;">Enter the password Rachael provided to access enrollment.</p>
    <input
      type="password"
      id="password-input"
      class="password-input"
      placeholder="Enter password"
      autocomplete="off"
    >
    <button id="password-btn" class="btn" style="width: 100%;">Enter</button>
    <p id="password-error" class="password-error">Incorrect password. Please try again.</p>
  </div>

  <!-- ENROLLMENT CONTENT (hidden until password entered) -->
  <div id="enroll-content" class="enroll-content">

    <div class="section">
      <h1>Enrollment</h1>
      <p>Welcome! Please complete both steps below: fill out the enrollment form, then pay your tuition using the button that matches your semester and schedule.</p>

      <!-- STEP 1: ENROLLMENT FORM -->
      <h2 style="margin-top: 2rem;">Step 1: Enrollment Form</h2>
      <div class="form-section">
        <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">

          <div class="form-group">
            <label class="form-label" for="parent-name">Parent / Guardian Name *</label>
            <input class="form-input" type="text" id="parent-name" name="parent_name" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="phone">Phone Number *</label>
            <input class="form-input" type="tel" id="phone" name="phone" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email Address *</label>
            <input class="form-input" type="email" id="email" name="email" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="child-name">Child's Name *</label>
            <input class="form-input" type="text" id="child-name" name="child_name" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="child-dob">Child's Date of Birth *</label>
            <input class="form-input" type="date" id="child-dob" name="child_dob" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="semester">Semester Enrolling For *</label>
            <select class="form-input" id="semester" name="semester" required>
              <option value="">— Select a semester —</option>
              <option value="Summer 2026">Summer Playgroups 2026</option>
              <option value="Fall 2026">Fall Semester (Sep 14 – Dec 17, 2026)</option>
              <option value="Winter 2027">Winter Semester (Jan 4 – Mar 25, 2027)</option>
              <option value="Spring 2027">Spring Semester (Apr 12 – Jun 4, 2027)</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Days Requested *</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="days" value="Monday"> Monday
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="days" value="Tuesday"> Tuesday
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="days" value="Wednesday"> Wednesday
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="days" value="Thursday"> Thursday
              </label>
            </div>
          </div>

          <button type="submit" class="btn" style="margin-top: 0.5rem;">Submit Enrollment Form</button>
        </form>
      </div>

      <!-- STEP 2: PAY TUITION -->
      <h2 style="margin-top: 3rem;">Step 2: Pay Tuition</h2>
      <p>Click the Pay button that matches your semester and the number of days per week your child will attend. You'll be taken to a secure Stripe payment page.</p>

      <div class="pay-section">
        <div class="table-wrap">
          <table class="pay-table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>1 Day/Week</th>
                <th>2 Days/Week</th>
                <th>3 Days/Week</th>
                <th>4 Days/Week</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fall 2026</strong><br><small>Sep 14 – Dec 17</small></td>
                <td><a href="#" class="pay-btn">$530</a></td>
                <td><a href="#" class="pay-btn">$1,050</a></td>
                <td><a href="#" class="pay-btn">$1,570</a></td>
                <td><a href="#" class="pay-btn">$2,090</a></td>
              </tr>
              <tr>
                <td><strong>Winter 2027</strong><br><small>Jan 4 – Mar 25</small></td>
                <td><a href="#" class="pay-btn">$490</a></td>
                <td><a href="#" class="pay-btn">$970</a></td>
                <td><a href="#" class="pay-btn">$1,450</a></td>
                <td><a href="#" class="pay-btn">$1,930</a></td>
              </tr>
              <tr>
                <td><strong>Spring 2027</strong><br><small>Apr 12 – Jun 4</small></td>
                <td><a href="#" class="pay-btn">$330</a></td>
                <td><a href="#" class="pay-btn">$650</a></td>
                <td><a href="#" class="pay-btn">$970</a></td>
                <td><a href="#" class="pay-btn">$1,290</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.85rem; margin-top: 1rem;">Summer 2026 pricing and payment links will be added when dates are confirmed.</p>
      </div>

    </div>
  </div>

  <footer>
    Kenwood Neighborhood, Duluth, MN 55811 &nbsp;|&nbsp; (218) 216-7876 &nbsp;|&nbsp;
    <a href="mailto:info@duluthnatureschool.org">info@duluthnatureschool.org</a>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify the password gate**

```bash
open /Users/rachael/projects/duluthnatureschool_org/enroll.html
```

Check: only the password gate shows (lock icon, password field, Enter button). Type `woods2026` and press Enter — the gate should disappear and the enrollment form + payment table should appear. Refresh the page — the form should still be visible (sessionStorage keeps it unlocked). Open in a new browser tab — the gate should show again.

- [ ] **Step 3: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add enroll.html
git commit -m "feat: add enroll page with password gate, enrollment form, and payment table"
```

---

## Task 10: Formspree + Stripe Setup

**Files:**
- Modify: `enroll.html` (replace Formspree ID)
- Modify: `enroll.html` (replace `#` Stripe links)
- Modify: `fundraising.html` (replace `#` donate link)

**This task requires Rachael to log into Formspree and Stripe.** Claude assists with the code changes once the links are obtained.

- [ ] **Step 1: Set up Formspree (enrollment form)**

1. Go to formspree.io and create a free account using info@duluthnatureschool.org
2. Click "New Form"
3. Name it "DNS Enrollment Form"
4. Copy the form ID — it looks like: `xyzabcde` (8 characters)
5. In `enroll.html`, find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```
   Replace `YOUR_FORMSPREE_ID` with your actual form ID, e.g.:
   ```html
   <form action="https://formspree.io/f/xyzabcde" method="POST">
   ```

- [ ] **Step 2: Create Stripe Payment Links (tuition)**

Log into your Stripe account at dashboard.stripe.com. Create 12 Payment Links — one for each row in the table below. For each:
1. Click "Payment Links" in the left sidebar → "Create payment link"
2. Add a product with the name and price shown
3. Set quantity to 1, not adjustable
4. Copy the resulting link (looks like: `https://buy.stripe.com/xxxxxxxx`)

| Name | Price |
|---|---|
| Fall 2026 Tuition — 1 Day/Week | $530.00 |
| Fall 2026 Tuition — 2 Days/Week | $1,050.00 |
| Fall 2026 Tuition — 3 Days/Week | $1,570.00 |
| Fall 2026 Tuition — 4 Days/Week | $2,090.00 |
| Winter 2027 Tuition — 1 Day/Week | $490.00 |
| Winter 2027 Tuition — 2 Days/Week | $970.00 |
| Winter 2027 Tuition — 3 Days/Week | $1,450.00 |
| Winter 2027 Tuition — 4 Days/Week | $1,930.00 |
| Spring 2027 Tuition — 1 Day/Week | $330.00 |
| Spring 2027 Tuition — 2 Days/Week | $650.00 |
| Spring 2027 Tuition — 3 Days/Week | $970.00 |
| Spring 2027 Tuition — 4 Days/Week | $1,290.00 |

- [ ] **Step 3: Create a Stripe donation link**

1. Create one more Payment Link in Stripe
2. Set it to "Let customer choose amount" (there's a toggle for this)
3. Name it "Donation — Duluth Nature School"
4. Copy the link

- [ ] **Step 4: Update enroll.html with Stripe links**

In `enroll.html`, replace each `href="#"` on the `.pay-btn` links with the corresponding Stripe Payment Link URL. There are 12 buttons total. Example:

```html
<!-- Before -->
<td><a href="#" class="pay-btn">$530</a></td>

<!-- After -->
<td><a href="https://buy.stripe.com/your_fall1day_link" class="pay-btn" target="_blank">$530</a></td>
```

Add `target="_blank"` to each so the Stripe page opens in a new tab.

- [ ] **Step 5: Update fundraising.html with the donation link**

In `fundraising.html`, find:
```html
<a href="#" class="btn" ...  id="donate-btn">Donate</a>
```
Replace `href="#"` with your Stripe donation link and add `target="_blank"`:
```html
<a href="https://buy.stripe.com/your_donation_link" class="btn" style="font-size: 1.1rem; padding: 0.75rem 2rem;" target="_blank">Donate</a>
```

- [ ] **Step 6: Test the enrollment form**

Open `enroll.html` in the browser, unlock with the password, fill in the form with test data, and submit. Check that info@duluthnatureschool.org receives the submission email from Formspree.

- [ ] **Step 7: Commit**

```bash
cd /Users/rachael/projects/duluthnatureschool_org
git add enroll.html fundraising.html
git commit -m "feat: add Formspree form endpoint and Stripe payment links"
```

---

## Task 11: Deploy to Netlify

**Files:** No code changes — this task publishes the site to the internet.

- [ ] **Step 1: Sign up for Netlify**

Go to netlify.com and create a free account. Use info@duluthnatureschool.org or a personal email.

- [ ] **Step 2: Push the project to GitHub**

Netlify deploys from GitHub. Create a GitHub account at github.com if you don't have one, then:

```bash
# Create a new repository on github.com called "duluthnatureschool_org"
# (do this in the browser — click the + icon → New repository)
# Then run:
cd /Users/rachael/projects/duluthnatureschool_org
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/duluthnatureschool_org.git
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

- [ ] **Step 3: Deploy on Netlify**

1. In Netlify, click "Add new site" → "Import an existing project" → "GitHub"
2. Authorize Netlify to access your GitHub
3. Choose the `duluthnatureschool_org` repository
4. Leave all build settings blank (this is a plain HTML site, no build needed)
5. Click "Deploy site"

Netlify will give you a URL like `https://amazing-name-123456.netlify.app` — your site is live!

- [ ] **Step 4: Connect your custom domain (duluthnatureschool.org)**

1. In Netlify → Site settings → Domain management → "Add custom domain"
2. Type `duluthnatureschool.org` and click Verify
3. Netlify will show you DNS records to add — two records: an `A` record and a `CNAME`
4. Log into wherever you purchased your domain (GoDaddy, Namecheap, Google Domains, etc.)
5. Find "DNS settings" or "Manage DNS" and add those two records
6. DNS changes take up to 24 hours to go live worldwide

- [ ] **Step 5: Enable HTTPS (free)**

Once the domain is connected, in Netlify → Domain management → click "Verify DNS configuration" then "Provision certificate." This gives your site a padlock (https://) for free.

- [ ] **Step 6: Verify the live site**

Open duluthnatureschool.org in your browser. Check:
- All 6 pages load
- Photos appear
- Navigation works between pages
- Password gate works on the Enroll page
- Formspree form submits and email arrives
- Stripe payment buttons open the correct checkout pages
- Site works on a phone

---

## After Launch: How to Update the Site

Since this is plain HTML, updates are made by editing the files and pushing to GitHub. Netlify automatically redeploys within ~30 seconds.

**Common updates:**
- Change semester dates or pricing → edit `playgroups.html` and `enroll.html`
- Add photos to the gallery → copy new photos to `images/gallery/`, add `<img>` tags to `gallery.html`
- Update the announcement banner → edit the text in `index.html`
- Change the enrollment password → edit `js/main.js`, line with `ENROLL_PASSWORD`
