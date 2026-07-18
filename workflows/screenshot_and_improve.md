# Workflow: Screenshot Pages and Improve Design

## Objective
Capture full-page screenshots of every page at desktop and mobile viewports, review them, then make targeted design improvements. Repeat until the site looks right.

## Required Inputs
- A running local server (step 1 below)
- Optionally: specific pages or issues to focus on

## Steps

### 1. Start the local server
```bash
npx serve . -p 3000
```
Leave this running in a terminal. The server must stay up while screenshots are taken.

### 2. Run the screenshot tool
```bash
node tools/screenshot_pages.js
```
Default target: `http://localhost:3000`
To screenshot the live GitHub Pages site instead:
```bash
node tools/screenshot_pages.js https://saadhabib122-workzap.github.io/steen-fyi
```

### 3. Review screenshots
Screenshots are saved to `.tmp/screenshots/`:
- `home-desktop.png`, `home-mobile.png`, `home-desktop-dark.png`
- `about-desktop.png`, `about-mobile.png`
- `speaking-desktop.png`, `speaking-mobile.png`
- `decision-laundering-desktop.png`, `decision-laundering-mobile.png`
- `articles-desktop.png`, `articles-mobile.png`
- `article-sample-desktop.png`, `article-sample-mobile.png`
- `contact-desktop.png`, `contact-mobile.png`
- `booking-desktop.png`, `booking-mobile.png`
- `privacy-policy-desktop.png`, `privacy-policy-mobile.png`

Read the images (they are PNGs — use the Read tool with the file path).

### 4. Identify issues
Look for:
- Spacing inconsistencies (padding, margins)
- Text overflow or truncation
- Broken layouts at mobile viewport
- Colour contrast issues (especially in dark mode)
- Images not loading or wrong aspect ratio
- Form elements misaligned
- Footer or nav rendering problems

### 5. Make improvements
Edit `css/style.css` for layout/design fixes.
Edit individual HTML files for content or structural fixes.
Reference `workflows/update_website.md` for the full file map.

### 6. Re-screenshot and verify
Re-run step 2 to get fresh screenshots, then re-read the affected pages to confirm fixes landed.

### 7. Iterate
Repeat steps 4–6 until the site looks correct at both viewports and in both light/dark modes.

## Edge Cases
- **Server not running**: `ERR_CONNECTION_REFUSED` — start `npx serve . -p 3000` first.
- **JS-rendered content missing**: The tool waits for `networkidle2` + 600ms. If article cards don't appear, increase the wait in `tools/screenshot_pages.js`.
- **Dark mode screenshot**: `home-desktop-dark.png` is always captured. To capture other pages in dark mode, add a `darkMode: true` flag to the PAGES array entry and handle it in the tool.
- **Fonts not loading locally**: Google Fonts won't load in a fully offline environment. Run against the live URL if font rendering needs to be verified.

## Output
- Screenshots in `.tmp/screenshots/` (gitignored, disposable)
- Improved CSS/HTML committed and deployed via Stop hook
