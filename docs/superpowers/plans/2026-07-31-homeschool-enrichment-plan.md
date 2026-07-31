# Homeschool Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the School Year program into "Morning Sessions" (Mon/Wed, unchanged 3-hour format) and a new "Homeschool Enrichment" program (Tue/Thu, 8:30am–2:30pm full day), each with their own nav tab, and update enrollment accordingly.

**Architecture:** Static HTML/CSS site, no build step, no test framework. Each page is a self-contained `.html` file sharing `css/style.css` and `js/main.js`. Verification is done via `grep` checks and manual browser review rather than automated tests — there is no existing test suite to extend.

**Tech Stack:** Plain HTML/CSS/JS, deployed via GitHub Pages (push to `main`).

---

## File Structure

- **Rename** `playgroups.html` → `mornings.html` — same program, renamed to avoid confusion with the new Homeschool Enrichment program. Content updated for its new Mon/Wed-only schedule.
- **Create** `homeschool.html` — new page for the Homeschool Enrichment program, structured like `mornings.html`.
- **Modify** nav block in `about.html`, `summer.html`, `gallery.html`, `fundraising.html`, `enroll.html`, `index.html`, `mornings.html` — add the Homeschool Enrichment tab, rename School Year → Morning Sessions, repoint the href.
- **Modify** `enroll.html` — split the semester dropdown and the tuition pay table into Morning Sessions vs. Homeschool Enrichment.

---

### Task 1: Rename and update the Morning Sessions page

**Files:**
- Rename: `playgroups.html` → `mornings.html`
- Modify: `mornings.html`

- [ ] **Step 1: Rename the file with git**

```bash
git mv playgroups.html mornings.html
```

- [ ] **Step 2: Update the title and meta description**

In `mornings.html`, find:

```html
  <title>School Year — Duluth Nature School</title>
  <meta name="description" content="Nature-based playgroup sessions for children ages 3–10, Monday–Thursday mornings. View schedule and tuition pricing.">
```

Replace with:

```html
  <title>Morning Sessions — Duluth Nature School</title>
  <meta name="description" content="Nature-based morning sessions for children ages 3–10, Monday and Wednesday mornings. View schedule and tuition pricing.">
```

- [ ] **Step 3: Update the schedule description paragraph**

Find:

```html
    <p>Each day children attend a three-hour, nature-based learning session. We implement child-led and seasonal curriculum. School hours are 8:30–11:30am, Monday–Thursday. We are located in Duluth's Kenwood neighborhood, bordering Hartley Park. Groups are intentionally small — limited to six children per session — allowing for individualized attention. Children explore and learn through unstructured outdoor play, group hikes, and seasonal activities.</p>
```

Replace with:

```html
    <p>Each day children attend a three-hour, nature-based learning session. We implement child-led and seasonal curriculum. School hours are 8:30–11:30am, Monday and Wednesday. We are located in Duluth's Kenwood neighborhood, bordering Hartley Park. Groups are intentionally small — limited to six children per session — allowing for individualized attention. Children explore and learn through unstructured outdoor play, group hikes, and seasonal activities.</p>
```

- [ ] **Step 4: Update the enrollment paragraph**

Find:

```html
    <p>Families enroll per semester and choose 1, 2, 3, or 4 days per week — whichever fits their child's development and family's schedule. Enrolled children are also welcome to add drop-in sessions on a pay-per-day basis, as space allows.</p>
```

Replace with:

```html
    <p>Families enroll per semester and choose 1 or 2 days per week (Monday and/or Wednesday) — whichever fits their child's development and family's schedule. Enrolled children are also welcome to add drop-in sessions on a pay-per-day basis, as space allows.</p>
```

- [ ] **Step 5: Update the tuition intro line**

Find:

```html
    <p>Tuition is a flat rate for the full semester, based on the number of days per week your child attends. You choose which days (Monday through Thursday) each semester.</p>
```

Replace with:

```html
    <p>Tuition is a flat rate for the full semester, based on the number of days per week your child attends. You choose Monday, Wednesday, or both, each semester.</p>
```

- [ ] **Step 6: Drop the 3/4-day columns from the pricing table**

Find:

```html
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
```

Replace with:

```html
    <div class="table-wrap">
      <table class="price-table">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Dates</th>
            <th>1 Day/Week</th>
            <th>2 Days/Week</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Fall Semester</strong></td>
            <td>Sep 14 – Dec 17, 2026</td>
            <td>$530</td>
            <td>$1,050</td>
          </tr>
          <tr>
            <td><strong>Winter Semester</strong></td>
            <td>Jan 4 – Mar 25, 2027</td>
            <td>$490</td>
            <td>$970</td>
          </tr>
          <tr>
            <td><strong>Spring Semester</strong></td>
            <td>Apr 12 – Jun 4, 2027</td>
            <td>$330</td>
            <td>$650</td>
          </tr>
        </tbody>
      </table>
    </div>
```

- [ ] **Step 7: Verify**

```bash
grep -c "3 Days/Week\|4 Days/Week\|Monday–Thursday" mornings.html
```

Expected: `0`

- [ ] **Step 8: Commit**

```bash
git add mornings.html
git commit -m "Rename School Year to Morning Sessions, update to Mon/Wed schedule"
```

---

### Task 2: Create the Homeschool Enrichment page

**Files:**
- Create: `homeschool.html`

- [ ] **Step 1: Create the file**

Write `homeschool.html` with this exact content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Homeschool Enrichment — Duluth Nature School</title>
  <meta name="description" content="Full-day nature-based enrichment for homeschool families, Tuesdays and Thursdays 8:30am–2:30pm. View schedule and tuition pricing.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

  <nav>
    <div class="nav-logo">
      <a href="index.html"><img src="images/logo.png" alt="Duluth Nature School"></a>
    </div>
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="mornings.html">Morning Sessions</a>
      <a href="homeschool.html">Homeschool Enrichment</a>
      <a href="summer.html">Summer Sessions</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Support</a>
    </div>
    <div class="nav-right">
      <div class="nav-social">
        <a href="https://www.instagram.com/duluthnatureschool" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/duluthnatureschool" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      </div>
      <a href="enroll.html" class="btn">Enroll</a>
      <button class="nav-menu-btn" aria-label="Open menu">☰</button>
    </div>
  </nav>

  <section class="hero" style="min-height: 280px;">
    <img class="hero-bg" src="images/gallery/sandbox2.jpg" alt="Children playing together outdoors at Duluth Nature School">
    <div class="hero-content">
      <h1 class="hero-title">Full days in nature, built for homeschoolers</h1>
    </div>
  </section>

  <div class="section">

    <p>Homeschool Enrichment is a full day of nature-based learning for children who no longer nap, held Tuesdays and Thursdays from 8:30am–2:30pm. We implement child-led and seasonal curriculum, with the extra time allowing for a relaxed lunch together and deeper exploration than a typical morning session. We are located in Duluth's Kenwood neighborhood, bordering Hartley Park. Groups are intentionally small — limited to six children per session — allowing for individualized attention.</p>
    <p>With robust outdoor gear, we can experience nature in almost all weather conditions. We also have an indoor recreation gym available. Our program will remain open in adverse weather as long as families can reasonably transport children safely.</p>
    <p>We welcome bathroom-independent children ages 3–10 who no longer nap. Mixed-age groups bring a richness to social emotional learning with the dynamics between younger and older children inspiring confidence and empathy. This makes Duluth Nature School a welcoming fit for preschool age children and homeschool families year-round.</p>
    <p>Families enroll per semester and choose 1 or 2 days per week (Tuesday and/or Thursday) — whichever fits your homeschool rhythm. Enrolled children are also welcome to add drop-in sessions on a pay-per-day basis, as space allows.</p>
    <h3 style="margin-top: 1.5rem;">What to Bring</h3>
    <ul style="margin: 0.5rem 0 0.5rem 1.5rem; line-height: 2; color: var(--text-light);">
      <li>Labeled water bottle (filled daily)</li>
      <li>Labeled morning snack</li>
      <li>Labeled lunch</li>
      <li>Change of clothing including underwear</li>
    </ul>
    <p style="font-size: 0.9rem; color: var(--text-light);">Child care licensing requires all food and beverages to be labeled with your child's name.</p>

    <h2 style="margin-top: 2rem;">2026–2027 Schedule &amp; Tuition</h2>
    <p>Tuition is a flat rate for the full semester, based on the number of days per week your child attends. You choose Tuesday, Thursday, or both, each semester. Enrolling a sibling? Each additional child receives 30% off.</p>

    <div class="table-wrap">
      <table class="price-table">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Dates</th>
            <th>1 Day/Week</th>
            <th>2 Days/Week</th>
            <th>Sibling, 1 Day/Week</th>
            <th>Sibling, 2 Days/Week</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Fall Semester</strong></td>
            <td>Sep 14 – Dec 17, 2026</td>
            <td>$812</td>
            <td>$1,624</td>
            <td>$560</td>
            <td>$1,120</td>
          </tr>
          <tr>
            <td><strong>Winter Semester</strong></td>
            <td>Jan 4 – Mar 25, 2027</td>
            <td>$696</td>
            <td>$1,392</td>
            <td>$480</td>
            <td>$960</td>
          </tr>
          <tr>
            <td><strong>Spring Semester</strong></td>
            <td>Apr 12 – Jun 4, 2027</td>
            <td>$464</td>
            <td>$928</td>
            <td>$320</td>
            <td>$640</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style="font-size: 0.9rem; color: var(--text-light); margin-top: 0.75rem;">Already enrolled and want an occasional extra day? Add drop-in Homeschool Enrichment days for $65/day, as space allows.</p>

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

- [ ] **Step 2: Verify the file was created and the image reference is valid**

```bash
test -f homeschool.html && test -f images/gallery/sandbox2.jpg && echo OK
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add homeschool.html
git commit -m "Add Homeschool Enrichment page"
```

---

### Task 3: Update navigation across all pages

**Files:**
- Modify: `about.html`, `summer.html`, `gallery.html`, `fundraising.html`, `enroll.html`, `index.html`, `mornings.html`

- [ ] **Step 1: Update the nav block in each of the 7 files**

In each of `about.html`, `summer.html`, `gallery.html`, `fundraising.html`, `enroll.html`, `index.html`, `mornings.html`, find this exact block:

```html
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="playgroups.html">School Year</a>
      <a href="summer.html">Summer Sessions</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Support</a>
    </div>
```

Replace with:

```html
    <div class="nav-links">
      <a href="about.html">About</a>
      <a href="mornings.html">Morning Sessions</a>
      <a href="homeschool.html">Homeschool Enrichment</a>
      <a href="summer.html">Summer Sessions</a>
      <a href="gallery.html">Gallery</a>
      <a href="fundraising.html">Support</a>
    </div>
```

- [ ] **Step 2: Verify no stale references remain anywhere in the site**

```bash
grep -rl "playgroups.html\|>School Year<" *.html
```

Expected: no output (empty)

- [ ] **Step 3: Verify every page now links to both new/renamed pages**

```bash
grep -L "mornings.html" *.html; grep -L "homeschool.html" *.html
```

Expected: no output from either command (every `.html` file contains both links)

- [ ] **Step 4: Commit**

```bash
git add about.html summer.html gallery.html fundraising.html enroll.html index.html mornings.html
git commit -m "Update site navigation for Morning Sessions and Homeschool Enrichment"
```

---

### Task 4: Update enrollment form and pay tables

**Files:**
- Modify: `enroll.html`

- [ ] **Step 1: Split the semester dropdown by program**

Find:

```html
          <div class="form-group">
            <label class="form-label" for="semester">Semester Enrolling For *</label>
            <select class="form-input" id="semester" name="semester" required>
              <option value="">— Select a semester —</option>
              <option value="Fall 2026">Fall Semester (Sep 14 – Dec 17, 2026)</option>
              <option value="Winter 2027">Winter Semester (Jan 4 – Mar 25, 2027)</option>
              <option value="Spring 2027">Spring Semester (Apr 12 – Jun 4, 2027)</option>
            </select>
          </div>
```

Replace with:

```html
          <div class="form-group">
            <label class="form-label" for="semester">Program &amp; Semester Enrolling For *</label>
            <select class="form-input" id="semester" name="semester" required>
              <option value="">— Select a program &amp; semester —</option>
              <option value="Fall 2026 - Morning Sessions">Fall 2026 – Morning Sessions (Sep 14 – Dec 17)</option>
              <option value="Winter 2027 - Morning Sessions">Winter 2027 – Morning Sessions (Jan 4 – Mar 25)</option>
              <option value="Spring 2027 - Morning Sessions">Spring 2027 – Morning Sessions (Apr 12 – Jun 4)</option>
              <option value="Fall 2026 - Homeschool Enrichment">Fall 2026 – Homeschool Enrichment (Sep 14 – Dec 17)</option>
              <option value="Winter 2027 - Homeschool Enrichment">Winter 2027 – Homeschool Enrichment (Jan 4 – Mar 25)</option>
              <option value="Spring 2027 - Homeschool Enrichment">Spring 2027 – Homeschool Enrichment (Apr 12 – Jun 4)</option>
            </select>
          </div>
```

- [ ] **Step 2: Split the pay table by program**

Find:

```html
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
                <td><strong>Spring 2026</strong><br><small>Apr 12 – Jun 4</small></td>
                <td><a href="#" class="pay-btn">$330</a></td>
                <td><a href="#" class="pay-btn">$650</a></td>
                <td><a href="#" class="pay-btn">$970</a></td>
                <td><a href="#" class="pay-btn">$1,290</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
```

Replace with:

```html
      <!-- STEP 2: PAY TUITION -->
      <h2 style="margin-top: 3rem;">Step 2: Pay Tuition</h2>
      <p>Click the Pay button that matches your program, semester, and the number of days per week your child will attend. You'll be taken to a secure Stripe payment page.</p>

      <div class="pay-section">
        <h3 style="margin-top: 1.5rem;">Morning Sessions</h3>
        <div class="table-wrap">
          <table class="pay-table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>1 Day/Week</th>
                <th>2 Days/Week</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fall 2026</strong><br><small>Sep 14 – Dec 17</small></td>
                <td><a href="#" class="pay-btn">$530</a></td>
                <td><a href="#" class="pay-btn">$1,050</a></td>
              </tr>
              <tr>
                <td><strong>Winter 2027</strong><br><small>Jan 4 – Mar 25</small></td>
                <td><a href="#" class="pay-btn">$490</a></td>
                <td><a href="#" class="pay-btn">$970</a></td>
              </tr>
              <tr>
                <td><strong>Spring 2027</strong><br><small>Apr 12 – Jun 4</small></td>
                <td><a href="#" class="pay-btn">$330</a></td>
                <td><a href="#" class="pay-btn">$650</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style="margin-top: 2rem;">Homeschool Enrichment</h3>
        <p style="font-size: 0.85rem; color: var(--text-light);">Enrolling a sibling? Each additional child receives 30% off — use the sibling columns below.</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>1 Day/Week</th>
                <th>2 Days/Week</th>
                <th>Sibling, 1 Day/Week</th>
                <th>Sibling, 2 Days/Week</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fall 2026</strong><br><small>Sep 14 – Dec 17</small></td>
                <td><a href="#" class="pay-btn">$812</a></td>
                <td><a href="#" class="pay-btn">$1,624</a></td>
                <td><a href="#" class="pay-btn">$560</a></td>
                <td><a href="#" class="pay-btn">$1,120</a></td>
              </tr>
              <tr>
                <td><strong>Winter 2027</strong><br><small>Jan 4 – Mar 25</small></td>
                <td><a href="#" class="pay-btn">$696</a></td>
                <td><a href="#" class="pay-btn">$1,392</a></td>
                <td><a href="#" class="pay-btn">$480</a></td>
                <td><a href="#" class="pay-btn">$960</a></td>
              </tr>
              <tr>
                <td><strong>Spring 2027</strong><br><small>Apr 12 – Jun 4</small></td>
                <td><a href="#" class="pay-btn">$464</a></td>
                <td><a href="#" class="pay-btn">$928</a></td>
                <td><a href="#" class="pay-btn">$320</a></td>
                <td><a href="#" class="pay-btn">$640</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
```

Note: the original file has a typo — the third pricing row is labeled "Spring 2026" instead of "Spring 2027". This step corrects it to "Spring 2027" for the Morning Sessions table while preserving the original $330/$650 values.

- [ ] **Step 3: Verify**

```bash
grep -c "3 Days/Week\|4 Days/Week" enroll.html
grep -c "Homeschool Enrichment" enroll.html
```

Expected: first command outputs `0`; second outputs a number greater than `0`

- [ ] **Step 4: Commit**

```bash
git add enroll.html
git commit -m "Split enrollment form and pay tables by program"
```

---

### Task 5: Final verification and publish

**Files:** none (verification only)

- [ ] **Step 1: Confirm no broken internal links remain**

```bash
python3 -c "
import re, os
for f in os.listdir('.'):
    if not f.endswith('.html'):
        continue
    html = open(f).read()
    for href in re.findall(r'href=\"([a-zA-Z0-9_.-]+\.html)\"', html):
        if not os.path.exists(href):
            print(f'{f}: missing {href}')
"
```

Expected: no output

- [ ] **Step 2: Confirm the image reference used on the new page exists**

```bash
test -f images/gallery/sandbox2.jpg && echo OK
```

Expected: `OK`

- [ ] **Step 3: Open the two key pages in a browser for a visual check**

```bash
open mornings.html homeschool.html enroll.html
```

Confirm: nav shows all 6 tabs in order (About, Morning Sessions, Homeschool Enrichment, Summer Sessions, Gallery, Support) on each page; Morning Sessions pricing table shows only 2 day-count columns; Homeschool Enrichment page displays correctly with the sandbox photo and 6-column pricing table; enroll.html's dropdown and both pay tables render correctly.

- [ ] **Step 4: Push to origin**

```bash
git push origin main
```

Expected: push succeeds, output shows the new commits landing on `main`.

---

## Self-Review Notes

- **Spec coverage:** Split schedule (Task 1+2), Homeschool Enrichment page content incl. mixed-age paragraph and hero photo (Task 2), nav changes (Task 3), enroll.html dropdown + pay table split (Task 4) — all spec sections have a corresponding task.
- **Placeholder scan:** Pay-button `href="#"` values are intentional — they match the existing convention already in `enroll.html` (the Morning Sessions pay buttons are also still `#` since Stripe links haven't been created yet), not a plan placeholder.
- **Fixed a pre-existing bug while touching this code:** the original `enroll.html` pay table mislabeled its third row "Spring 2026" — corrected to "Spring 2027" in Task 4 since it's directly adjacent to text being rewritten anyway.
