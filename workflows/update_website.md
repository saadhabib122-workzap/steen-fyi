# Workflow: Update Steen.fyi Website

## Objective
Make changes to the Steen.fyi static website — content updates, design changes, new pages, or article additions.

## Required Inputs
- Description of what needs to change (page, section, content)
- Any new images or assets (place in `Brand_Assests/`)
- For new articles: full article text with title, date, and slug

## File Map
| File | Purpose |
|------|---------|
| `css/style.css` | All design tokens, layout, dark mode, responsive rules |
| `js/script.js` | Dark mode toggle, nav scroll, IntersectionObserver, cookie banner |
| `js/articles-data.js` | All 13 articles as a JS array — edit here to add/update articles |
| `index.html` | Homepage |
| `about.html` | About Steen page |
| `speaking.html` | Keynote topics overview |
| `decision-laundering.html` | Flagship talk detail page |
| `articles.html` | Article index (rendered from JS data) |
| `article.html` | Single article template (client-side routing via `?slug=`) |
| `contact.html` | Contact form |
| `booking.html` | Speaker booking request form |
| `privacy-policy.html` | Privacy policy |

## Design Tokens (css/style.css)
- `--ivory: #F7F3EF` — primary background (light mode)
- `--charcoal: #1C1C1C` — primary text
- `--stone: #4A4F55` — muted text
- `--slate: #1B2D4F` — dark section background
- `--amber: #E8A030` — accent / CTA colour
- Fonts: Playfair Display (headings/display) + Inter (body)
- Dark mode via `[data-theme="dark"]` on `<html>`; FOUC prevented by inline IIFE in every `<head>`

## Adding a New Article
1. Open `js/articles-data.js`
2. Add a new object at the **top** of the `ARTICLES` array (newest first):
```js
{
  title: "Your Article Title",
  slug: "your-article-slug",           // used in URL: article.html?slug=your-article-slug
  date: "2026-07-01",
  displayDate: "1 July 2026",
  excerpt: "One-sentence summary shown on the article card.",
  body: `Full article body text here.
## Section heading
Paragraph text. Use markdown: **bold**, *italic*, > blockquote, --- divider.`
}
```
3. Save — the Stop hook auto-deploys on next Claude response.

## Adding a New Page
1. Copy the nav + footer HTML block from any existing page
2. Include the FOUC script in `<head>`: `<script>(function(){var t=localStorage.getItem('steen-theme');if(t)document.documentElement.setAttribute('data-theme',t)})()</script>`
3. Link `css/style.css` and `js/script.js`
4. Add the page to the nav links in all existing pages

## Deployment
Auto-deploy via Stop hook — no manual action needed. Every Claude response that changes a file triggers:
```bash
git add -A && git diff --cached --quiet || (git commit -m "deploy: $(date +%H%M)" && git push)
```
Live at: https://saadhabib122-workzap.github.io/steen-fyi/

## Edge Cases
- **FOUC (flash of unstyled content)**: Every new page must include the inline IIFE theme script in `<head>` before the stylesheet link.
- **Nav transparency**: Pages with full-bleed photo heroes use class `nav--transparent` on the `<header>`. JS adds `nav--scrolled` on scroll.
- **Article images**: No per-article images — CSS gradient thumbnails are used in the article grid. Alternating `linear-gradient` values in `articles.html`.
- **Portrait image**: `Brand_Assests/02_steen_portrait_linkedin_card.png` has a LinkedIn overlay at the bottom — use `object-position: top center` to crop it out.
- **Branch name**: The repo uses `master` (not `main`). Push targets `master`.
