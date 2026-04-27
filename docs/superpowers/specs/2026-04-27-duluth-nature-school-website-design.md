# Duluth Nature School Website — Design Spec

**Date:** 2026-04-27
**Owner:** Rachael (Duluth Nature School)
**Replaces:** Squarespace site (no longer active)

---

## Overview

A static website for Duluth Nature School built with plain HTML, CSS, and JavaScript, hosted for free on Netlify. The site serves parents, caregivers, and guardians by providing information about the school and a password-protected enrollment flow for invited families.

---

## School Info

- **Name:** Duluth Nature School
- **Location:** Kenwood Neighborhood, Duluth, MN 55811
- **Phone:** (218) 216-7876
- **Email:** info@duluthnatureschool.org
- **Social:** Instagram, Facebook
- **Tagline:** Wander. Discover. Wonder.

---

## Programs

Nature-based playgroup sessions, 3 hours each, Monday–Thursday mornings. Children must be bathroom independent. Primary age group is 3–5 years; children up to age 10 may attend (homeschool families during the school year; all families during summer).

Families enroll per semester and may change their schedule each season.

### 2026–2027 Schedule

| Semester | Dates |
|---|---|
| Summer Playgroups | TBD 2026 |
| Fall | September 14 – December 17, 2026 |
| Winter | January 4 – March 25, 2027 |
| Spring | April 12 – June 4, 2027 |

### Tuition (total per semester)

| Days/Week | Fall | Winter | Spring |
|---|---|---|---|
| 1 day | $530 | $490 | $330 |
| 2 days | $1,050 | $970 | $650 |
| 3 days | $1,570 | $1,450 | $970 |
| 4 days | $2,090 | $1,930 | $1,290 |

Summer pricing TBD.

---

## Technology

- **Stack:** Plain HTML, CSS, JavaScript — no frameworks
- **Hosting:** Netlify (free tier)
- **Payments:** Stripe Payment Links
  - 12 tuition links (4 day-tiers × 3 semesters)
  - 1 donation link (custom amount)
- **Enrollment form:** Submits to info@duluthnatureschool.org via a form service (e.g., Formspree — free tier)
- **Password protection:** Client-side password gate on the Enroll page — password hardcoded in JavaScript, checked against user input, unlocks page via sessionStorage. Sufficient security for this use case (controlling access, not protecting sensitive data).
- **Attendance tracking:** Handled externally (paper forms per Family Child Care licensing requirements); not part of this website

---

## Branding

- **Primary color:** Forest green (#3d6b35)
- **Background:** Sage/cream (#f0ede6)
- **Logo:** Circular DNS tree logo (existing)
- **Typography:** Matches existing site — bold headings, clean body text
- **Photos:** From "School Photo Gallery" folder on desktop

---

## Pages

### 1. Home
- Announcement banner (top): "Donate in the fundraising tab to get children into the woods!"
- Navigation: About · Playgroups · Gallery · Fundraising | [Enroll button] + Instagram + Facebook icons
- Hero: Full-width photo (child hiking) with "Wander. Discover. Wonder." overlay
- Mission intro paragraph + "Learn about our Playgroups" button
- 3 feature blocks: Mon–Thu mornings / Ages 3–10 / Seasonal semesters
- 2 featured nature photos
- Footer: address, phone, email

### 2. About
- Same navigation and footer as all pages
- Photo of Rachael (`aboutme.jpeg`) alongside bio
- Bio text (BS in Education, Early Childhood Montessori diploma via NAMC, licensed teacher, 15+ years experience)
- School mission statement
- Angela Hanscom quote (blockquote style, green left border)

### 3. Playgroups
- Hero banner photo with short overlay text
- "What are our playgroups?" description
- Schedule and tuition table (all semesters and pricing)
- "Get in Touch" call-to-action button (mailto:info@duluthnatureschool.org)

### 4. Gallery
- 3-column responsive photo grid
- All photos from School Photo Gallery folder (except `aboutme.jpeg`)
- Click any photo to expand (lightbox — built without external libraries)
- Works with any number of photos added in the future

### 5. Fundraising
- "Make an impact today" hero text
- "Support nature education with your donation" subtext
- 6 "Why give?" cards in a 3×2 grid: Access, Gear, Community, Enrichment, Stewardship, Safety
- "Donate" button → Stripe donation Payment Link (custom amount)

### 6. Enroll *(password-protected)*
- Password gate: input field + button; password stored as environment variable injected at build time via Netlify
- On correct password: sessionStorage unlocks the page content
- Enrollment form fields:
  - Parent/guardian name
  - Phone number
  - Email address
  - Child's name
  - Child's date of birth
  - Semester (dropdown: Summer / Fall / Winter / Spring)
  - Days requested (checkboxes: Monday / Tuesday / Wednesday / Thursday)
- Form submits to info@duluthnatureschool.org via Formspree
- Tuition payment section: table showing all semester × day combinations, each with a Stripe Pay button
- Note: paper enrollment forms are also required per Family Child Care licensing

---

## Enrollment Flow

1. Family contacts school and schedules an in-person visit
2. If invited to enroll, Rachael provides the page password
3. Family visits the Enroll page, enters password
4. Family completes the enrollment form (sent to Rachael's email)
5. Family pays tuition via the appropriate Stripe Payment Link
6. Paper forms completed separately per licensing requirements

---

## File Structure

```
duluthnatureschool_org/
├── index.html          (Home)
├── about.html
├── playgroups.html
├── gallery.html
├── fundraising.html
├── enroll.html
├── css/
│   └── style.css
├── js/
│   └── main.js         (password gate, lightbox, nav)
├── images/
│   ├── logo.png
│   ├── aboutme.jpeg
│   └── gallery/        (all other photos)
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-04-27-duluth-nature-school-website-design.md
```

---

## Out of Scope

- Attendance tracking / QR check-in (handled by paper forms or external tool)
- Daily Connect integration (may be evaluated separately)
- Blog or news section
- Parent login portal
- Mobile app
