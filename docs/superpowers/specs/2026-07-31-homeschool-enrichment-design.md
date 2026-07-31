# Homeschool Enrichment — Design Spec

Date: 2026-07-31

## Context

Duluth Nature School is reopening after a medical leave (closed since May 2025). No families are currently enrolled; one family has toured, another tours next week. Both are interested in the regular 3-hour morning program for young children and would be fine with a Monday/Wednesday schedule.

Rachael wants to add a second program, **Homeschool Enrichment**, for homeschool families who want a longer day (their kids no longer nap) to supplement homeschooling and free up parent time. A specific family she'd like to recruit currently pays a competing nature-based program $40/day (full day, larger group size) for two children (ages 4 and 6), 2 days/week — but the 6-year-old is aging out of that program (it's preschool-only). Duluth Nature School's small group size (max 6 children, solo provider) is a real differentiator worth a price premium, but pricing should stay reasonable enough to make switching credible.

Rachael operates solo and is capped at 6 children on-site at any time by her family childcare license (space-based, not ideal for a nature-based program, but fixed for now).

## Decision: Split Schedule

Rather than share the 6 seats between two different populations on the same days (which risks capacity conflicts between "leaves at 11:30" and "stays until 2:30" families), the school splits into two dedicated cohorts by day of week:

- **Morning Sessions** (renamed from "School Year"): Mondays & Wednesdays, 8:30–11:30am. The existing 3-hour nature-based program, unchanged in format.
- **Homeschool Enrichment** (new): Tuesdays & Thursdays, 8:30am–2:30pm. Full-day program for children who no longer nap.

This mirrors a pattern Rachael has observed at a popular local nature-based preschool, which runs separate M/W and T/Th cohorts. Since there are currently no enrolled families to disrupt, this is a clean time to make the change. Homeschool families often have multiple children spanning the 3–10 age range, so a single Homeschool Enrichment cohort (max 6 seats) may fill with as few as 2–3 families.

This does mean the regular Morning Sessions program is now capped at 2 days/week (Monday and/or Wednesday) rather than the previous 1–4 days/week (Monday–Thursday). Both prospective families are expected to be fine with this.

## Homeschool Enrichment Program Details

- **Hours:** Tuesdays & Thursdays, 8:30am–2:30pm
- **Eligibility:** Children who no longer nap; otherwise same as Morning Sessions (bathroom-independent, ages 3–10)
- **What to bring:** Labeled morning snack AND labeled lunch (vs. just a snack for the 3-hour Morning Sessions)
- **Enrollment model:** Semester commitment (Fall/Winter/Spring, same calendar as Morning Sessions), choosing 1 or 2 days/week (Tuesday and/or Thursday). Matches the existing semester-commitment model — Rachael wants predictable income and doesn't want to manage drop-in-only scheduling as a solo provider, but re-choosing days each semester avoids locking new families into a full year on a program they haven't tried yet.
- **Add-on drop-in days:** Already-enrolled families may add occasional extra days beyond their committed schedule, as space allows — same policy as Morning Sessions already offers, just extended to Homeschool Enrichment.
- **No schedule/curriculum detail on the website:** Rachael is writing separate family handbooks (one for Morning Sessions, one for Homeschool Enrichment) that cover the actual daily schedule and activities. The website stays high-level.
- **Mixed-age messaging:** Include this paragraph verbatim (already live on the Morning Sessions and About pages) to help homeschool families see the mixed-age model as valuable for a full day, not just a 3-hour session:

  > "Mixed-age groups bring a richness to social emotional learning with the dynamics between younger and older children inspiring confidence and empathy. This makes Duluth Nature School a welcoming fit for preschool age children and homeschool families year-round."

## Pricing

- **Base rate:** $58/day/child (a ~45% premium over the $40/day competitor benchmark for a full day — justified by the 6-child cap vs. a larger group, while staying in a believable range for a new, unproven program)
- **Sibling discount:** 30% off for each additional enrolled sibling → $40/day/child (rounded from $40.60)
- **Add-on drop-in rate** (already-enrolled families adding an occasional extra day as space allows): $65/day/child — about a 12% premium over the committed rate, enough to nudge toward committing to both days at enrollment without being punitive
- **Semester totals**, calculated as $58 (or $40 for siblings) × number of Tuesday/Thursday class days in the semester. Verified by calendar that Monday/Tuesday/Wednesday/Thursday counts are identical within each semester's date range (no asymmetric holiday closures assumed):

| Semester | Class days | 1 Day/Week | 2 Days/Week | Sibling, 1 Day/Week | Sibling, 2 Days/Week |
|---|---|---|---|---|---|
| Fall (Sep 14 – Dec 17, 2026) | 14 | $812 | $1,624 | $560 | $1,120 |
| Winter (Jan 4 – Mar 25, 2027) | 12 | $696 | $1,392 | $480 | $960 |
| Spring (Apr 12 – Jun 4, 2027) | 8 | $464 | $928 | $320 | $640 |

Note: if any specific closure day (e.g. a holiday) applies asymmetrically to Tuesdays/Thursdays vs. Mondays/Wednesdays, these class-day counts and totals will need a manual adjustment — flag this to Rachael before publishing final numbers if she's aware of any such date.

## Site Structure Changes

**Navigation** (updated on every page): About · Morning Sessions · Homeschool Enrichment · Summer Sessions · Gallery · Support

**File changes:**
- Rename `playgroups.html` → `mornings.html` (to avoid confusion with the new program going forward). Update all internal links site-wide.
- Nav label "School Year" → "Morning Sessions" on every page.
- `mornings.html` content updates:
  - Hours/schedule text: Monday & Wednesday only (was Monday–Thursday)
  - Pricing table: drop the 3 Days/Week and 4 Days/Week columns (only 1–2 days possible now)
  - Mixed-age paragraph already present — no change needed
- New page `homeschool.html`, styled consistently with `mornings.html`/`summer.html`:
  - Hero photo: `images/gallery/sandbox2.jpg` (the only photo Rachael has permission to show multiple children's faces in), new alt text reflecting mixed ages
  - Program details and pricing table as above
  - Mixed-age paragraph included verbatim
  - Same "Interested in Enrolling?" tour CTA as other program pages
- `enroll.html`:
  - Semester dropdown needs entries distinguishing Morning Sessions vs. Homeschool Enrichment per semester (e.g. "Fall 2026 – Morning Sessions" / "Fall 2026 – Homeschool Enrichment")
  - Pay table needs new rows for Homeschool Enrichment tuition; Stripe payment links can be placeholder/TBD until Rachael sets those up (same pattern used when Summer Sessions payment links were added later)
- `summer.html`: no content changes in this project; Rachael will provide a replacement hero photo separately since `sandbox2.jpg` is moving to the new Homeschool Enrichment page.

## Out of Scope

- Actual Stripe payment link creation for Homeschool Enrichment (placeholder only)
- Family handbook content (separate document, not part of the website)
- Any changes to Summer Sessions program structure or pricing
