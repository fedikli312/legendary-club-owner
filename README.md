# Legendary Club Owner — Landing Page

A landing page for **Legendary Club Owner** (Efsane Başkan), built for the No Surrender Studio Management Associate case study.

**Live URL:** _[Add after deploy]_  
**Tech stack:** React + Vite + Framer Motion

---

## Getting Started

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # preview production build locally
```

---

## Interactive Element

**"What Kind of Manager Are You?" Quiz**

A 5-question quiz that reveals one of three manager archetypes:
- 🧠 **The Tactician** — formation and system mastermind
- 🔭 **The Scout** — transfer market genius
- 🏗️ **The Builder** — club infrastructure architect

Each result screen includes a personalised description and a direct CTA to download the game.

**Why this over the other options?**  
The quiz creates a personal moment of identification before asking for a download. By the time Alex sees the result, he's already invested — he answered 5 questions about *his* style of management.

---

## Playwright Tests (Bonus)

Tests live in `/tests/quiz.spec.js` and verify the entire quiz flow end-to-end.

### What it tests

| Test | What it checks |
|---|---|
| Hero loads | Headline visible, CTA button present |
| Scroll to quiz | CTA button scrolls page to `#quiz` |
| Start button | Quiz initialises correctly, Q1 appears |
| All 5 questions | Each question loads, progress bar advances |
| Result screen | A valid manager type appears after Q5 |
| Try Again | Resets quiz to start screen |
| iOS link on result | Download link present and correct href |

### How to run

**Against production URL:**
```bash
npm install
npx playwright install chromium
BASE_URL=https://your-deployed-url.vercel.app npx playwright test
```

**Against local preview:**
```bash
npm run build
npx playwright install chromium
npx playwright test
```

---

## Process Note

**Tools used:** Claude (code generation, component architecture, Playwright script), Vite + React, Framer Motion, Adobe Firefly (AI image), Vercel (deployment).

**How AI helped:** Claude scaffolded the component structure and quiz logic in one pass. The Playwright tests were iteratively refined — naive selectors broke when button text overlapped across quiz states, requiring more robust filtering logic.

**Why the quiz?** It creates personal investment before asking for a download. Alex finishes 5 questions and sees "THE TACTICIAN" — now the game is about him, not some abstract product.

**What I'd do differently:** Add a real App Store screenshot carousel, integrate a waitlist email capture for the international launch, and A/B test the hero headline.
