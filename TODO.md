# Task: Interactive book-style modals for ALL 12 books

Every book on The Strategist's Shelf becomes clickable with a full, navigable
book-style reference. Each modal shows the same six-section structure:
- **The Breakdown** (cautionary story / context)
- **The Principle** (positive explanation)
- **Key Steps** (bullet points)
- **Image** (visual metaphor)
- **Authority** (signature quote)
- **When It Backfires** (the caveat / reversal)

## Books already done
- FILE 01 · The 48 Laws of Power
- FILE 03 · The Laws of Human Nature
- FILE 07 · Atomic Habits

## Remaining books to add
- FILE 02 · The Prince
- FILE 04 · The Art of War
- FILE 05 · The 33 Strategies of War
- FILE 06 · Never Split the Difference
- FILE 08 · The 7 Habits of Highly Effective People
- FILE 09 · Deep Work
- FILE 10 · Mastery
- FILE 11 · Ego Is the Enemy
- FILE 12 · Extreme Ownership

## Steps
1. [x] Update `index.html` — make the 9 remaining cards clickable with unique ids, and add ONE generic modal ovrlay (`#genericModalOverlay`).
2. [x] Update `script.js` — adde a `SHELF_FILES` data array (9 remaining books) and a generic modal controller (render/open/close/event listeners + Escape).
3. [x] Update `style.css` — no changes needed; the generic modal reuses the existing `law-*` and `.modal-overlay[hidden]` classes. (Verified styles exist.)
4. [ ] Verify the site works (open in browser) — all 12 modals open/close and navigate.
