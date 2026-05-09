# Support Page Redesign

**Date:** 2026-05-09

## Goal

Rename the Fundraising page to "Support" and update it to invite both monetary donations (via Stripe) and supply donations (via a wishlist). Add an Amazon wishlist section and update all buttons and navigation accordingly.

---

## Navigation

- Rename the "Fundraising" tab to **"Support"** in the nav on all pages (index.html, about.html, playgroups.html, gallery.html, fundraising.html, enroll.html)
- The file `fundraising.html` keeps its filename — only the nav label changes

---

## Hero Banner

**Heading:** "Give Children the Gift of Nature"

**Buttons (both same green color, side by side):**
- "Give Money" → links to Stripe payment link (placeholder `#` until Stripe is set up)
- "Donate Supplies" → links to `#wishlist` anchor on the same page

**No subtitle text.**

---

## Six Why Cards

Keep as-is: Access, Gear, Community, Enrichment, Stewardship, Safety.

---

## Give Money Button (after cards)

Add a centered "Give Money" button below the six cards section, linking to the same Stripe placeholder. Include the existing note: "You'll be taken to a secure Stripe payment page."

---

## Supply Wishlist Section

**Anchor:** `id="wishlist"`

**Heading:** "Our Supply Wishlist"

**Items (one per line):**
- Outdoor gear (all seasons)
- Books
- Wood cookies & logs
- Arts & crafts supplies
- Magnifying glasses & binoculars
- Gardening tools
- Picnic tables
- Camping supplies
- Yoga & gymnastics mats
- Wagons
- Splash pad & sprinkler

**Text below list:**
"New or gently used items from any source are warmly welcomed. For convenience see our online wishlist. Contact us to arrange drop off or pick up. Your generosity is appreciated!"

**Button:** "View Amazon Wishlist →" → links to https://www.amazon.com/hz/wishlist/ls/1C712RSQ2XC1V?ref_=wl_share (opens in new tab)

---

## Stripe Setup (separate task)

A new Stripe account needs to be created for Duluth Nature School (separate from existing personal Medium account). Once set up, create a donation Payment Link allowing custom amounts. Replace `#` placeholder on both "Give Money" buttons with the real Stripe link.

---

## Files to Change

- `fundraising.html` — hero, buttons, add wishlist section
- `index.html`, `about.html`, `playgroups.html`, `gallery.html`, `enroll.html` — update nav label "Fundraising" → "Support"
