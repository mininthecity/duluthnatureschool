# Support Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename the Fundraising nav tab to "Support", update the hero banner with new heading and two buttons, and add a supply wishlist section to fundraising.html.

**Architecture:** Pure HTML/CSS changes to static files. No JavaScript needed. The wishlist section uses an anchor link (`#wishlist`) so the "Donate Supplies" hero button scrolls directly to it.

**Tech Stack:** HTML, CSS (existing style.css classes)

---

## Files to Modify

- `fundraising.html` — hero, button layout, new wishlist section
- `index.html` — nav label only
- `about.html` — nav label only
- `playgroups.html` — nav label only
- `gallery.html` — nav label only
- `enroll.html` — nav label only

---

### Task 1: Rename nav tab to "Support" across all pages

**Files:**
- Modify: `index.html`
- Modify: `about.html`
- Modify: `playgroups.html`
- Modify: `gallery.html`
- Modify: `fundraising.html`
- Modify: `enroll.html`

- [ ] **Step 1: Update index.html**

Find this line in `index.html`:
```html
<a href="fundraising.html">Fundraising</a>
```
Replace with:
```html
<a href="fundraising.html">Support</a>
```

- [ ] **Step 2: Update about.html**

Find this line in `about.html`:
```html
<a href="fundraising.html">Fundraising</a>
```
Replace with:
```html
<a href="fundraising.html">Support</a>
```

- [ ] **Step 3: Update playgroups.html**

Find this line in `playgroups.html`:
```html
<a href="fundraising.html">Fundraising</a>
```
Replace with:
```html
<a href="fundraising.html">Support</a>
```

- [ ] **Step 4: Update gallery.html**

Find this line in `gallery.html`:
```html
<a href="fundraising.html">Fundraising</a>
```
Replace with:
```html
<a href="fundraising.html">Support</a>
```

- [ ] **Step 5: Update fundraising.html**

Find this line in `fundraising.html`:
```html
<a href="fundraising.html">Fundraising</a>
```
Replace with:
```html
<a href="fundraising.html">Support</a>
```

- [ ] **Step 6: Update enroll.html**

Find this line in `enroll.html`:
```html
<a href="fundraising.html">Fundraising</a>
```
Replace with:
```html
<a href="fundraising.html">Support</a>
```

- [ ] **Step 7: Verify in browser**

Open `index.html` in a browser. Confirm the nav shows "Support" instead of "Fundraising" and clicking it still navigates to the fundraising page correctly. Check one other page (e.g. `about.html`) to confirm consistency.

- [ ] **Step 8: Commit**

```bash
git add index.html about.html playgroups.html gallery.html fundraising.html enroll.html
git commit -m "Rename Fundraising nav tab to Support"
```

---

### Task 2: Update the hero banner in fundraising.html

**Files:**
- Modify: `fundraising.html`

- [ ] **Step 1: Replace the hero section**

Find this entire block in `fundraising.html`:
```html
  <div class="fundraising-hero">
    <h1>Make an Impact Today</h1>
    <p style="font-size: 1.1rem; color: var(--text-light);">Support nature education with your donation</p>
    <a href="#" class="btn" style="font-size: 1.1rem; padding: 0.75rem 2rem; margin-top: 1.25rem; display: inline-block;">Donate</a>
  </div>
```

Replace with:
```html
  <div class="fundraising-hero">
    <h1>Give Children the Gift of Nature</h1>
    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 1.25rem;">
      <a href="#" class="btn" style="font-size: 1.1rem; padding: 0.75rem 2rem;">Give Money</a>
      <a href="#wishlist" class="btn" style="font-size: 1.1rem; padding: 0.75rem 2rem;">Donate Supplies</a>
    </div>
  </div>
```

- [ ] **Step 2: Verify in browser**

Open `fundraising.html` in a browser. Confirm:
- Heading reads "Give Children the Gift of Nature"
- Two green buttons appear side by side: "Give Money" and "Donate Supplies"
- No subtitle text beneath the heading
- Clicking "Donate Supplies" scrolls down the page (it won't reach the target yet — that's fine until Task 3)

- [ ] **Step 3: Commit**

```bash
git add fundraising.html
git commit -m "Update fundraising hero with new heading and two buttons"
```

---

### Task 3: Replace bottom donate section and add Give Money button after cards

**Files:**
- Modify: `fundraising.html`

- [ ] **Step 1: Replace the bottom donate section**

Find this entire block in `fundraising.html`:
```html
  <div class="section" style="text-align: center;">
    <a href="#" class="btn" style="font-size: 1.1rem; padding: 0.75rem 2rem;">Donate</a>
    <p style="margin-top: 1rem; font-size: 0.85rem;">You'll be taken to a secure Stripe payment page.</p>
  </div>
```

Replace with:
```html
  <div class="section" style="text-align: center;">
    <a href="#" class="btn" style="font-size: 1.1rem; padding: 0.75rem 2rem;">Give Money</a>
    <p style="margin-top: 1rem; font-size: 0.85rem;">You'll be taken to a secure Stripe payment page.</p>
  </div>
```

- [ ] **Step 2: Verify in browser**

Open `fundraising.html` in a browser. Confirm the button below the six cards now reads "Give Money" instead of "Donate".

- [ ] **Step 3: Commit**

```bash
git add fundraising.html
git commit -m "Update bottom donate button to Give Money"
```

---

### Task 4: Add supply wishlist section

**Files:**
- Modify: `fundraising.html`

- [ ] **Step 1: Add the wishlist section before the footer**

Find this line in `fundraising.html`:
```html
  <footer>
```

Insert the following block immediately before it:
```html
  <div class="section-sage" id="wishlist">
    <div class="section-inner">
      <h2>Our Supply Wishlist</h2>
      <ul style="list-style: none; padding: 0; margin: 1.25rem 0; line-height: 2.2; color: var(--text-light);">
        <li>• Outdoor gear (all seasons)</li>
        <li>• Books</li>
        <li>• Wood cookies &amp; logs</li>
        <li>• Arts &amp; crafts supplies</li>
        <li>• Magnifying glasses &amp; binoculars</li>
        <li>• Gardening tools</li>
        <li>• Picnic tables</li>
        <li>• Camping supplies</li>
        <li>• Yoga &amp; gymnastics mats</li>
        <li>• Wagons</li>
        <li>• Splash pad &amp; sprinkler</li>
      </ul>
      <p>New or gently used items from any source are warmly welcomed. For convenience see our online wishlist. Contact us to arrange drop off or pick up. Your generosity is appreciated!</p>
      <a href="https://www.amazon.com/hz/wishlist/ls/1C712RSQ2XC1V?ref_=wl_share" target="_blank" rel="noopener" class="btn" style="margin-top: 0.5rem;">View Amazon Wishlist →</a>
    </div>
  </div>

```

- [ ] **Step 2: Verify in browser**

Open `fundraising.html` in a browser. Confirm:
- A sage-background wishlist section appears below the six cards and Give Money button
- All 11 supply items are listed, one per line
- The paragraph text appears below the list
- "View Amazon Wishlist →" button is present and green
- Clicking the button opens the Amazon wishlist in a new tab
- Clicking "Donate Supplies" in the hero scrolls down to this section

- [ ] **Step 3: Commit**

```bash
git add fundraising.html
git commit -m "Add supply wishlist section to support page"
```
