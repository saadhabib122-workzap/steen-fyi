/**
 * screenshot_pages.js
 * Takes screenshots of all Steen.fyi pages at desktop + mobile viewports.
 * Saves to .tmp/screenshots/
 *
 * Usage:
 *   node tools/screenshot_pages.js [base_url]
 *
 * Default base_url: http://localhost:3000
 * Start local server first: npx serve . -p 3000
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.argv[2] || 'http://localhost:3000';

const PAGES = [
  { name: 'home',                path: '/' },
  { name: 'about',               path: '/about.html' },
  { name: 'speaking',            path: '/speaking.html' },
  { name: 'decision-laundering', path: '/decision-laundering.html' },
  { name: 'articles',            path: '/articles.html' },
  { name: 'article-sample',      path: '/article?slug=the-shortcut-doctrine' },
  { name: 'contact',             path: '/contact.html' },
  { name: 'booking',             path: '/booking.html' },
  { name: 'privacy-policy',      path: '/privacy-policy.html' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
];

const OUT_DIR = path.join(__dirname, '..', '.tmp', 'screenshots');

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const results = [];

  for (const viewport of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: viewport.width, height: viewport.height });

    await page.evaluateOnNewDocument(() => {
      localStorage.removeItem('steen-theme');
    });

    for (const site of PAGES) {
      const url = BASE_URL + site.path;
      const filename = `${site.name}-${viewport.name}.png`;
      const outPath = path.join(OUT_DIR, filename);

      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
        // Scroll through the page in steps to trigger IntersectionObserver on all .anim elements
        await page.evaluate(async () => {
          const totalHeight = document.body.scrollHeight;
          const step = window.innerHeight * 0.8;
          for (let y = 0; y < totalHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 120));
          }
          window.scrollTo(0, 0);
        });
        // Allow all fade-in transitions to complete (longest is 0.65s)
        await new Promise(r => setTimeout(r, 800));
        await page.screenshot({ path: outPath, fullPage: true });
        console.log(`✓  ${filename}`);
        results.push({ file: filename, status: 'ok' });
      } catch (err) {
        console.error(`✗  ${filename} — ${err.message}`);
        results.push({ file: filename, status: 'error', error: err.message });
      }
    }

    await page.close();
  }

  // Also capture dark mode for home page
  const darkPage = await browser.newPage();
  await darkPage.setViewport({ width: 1440, height: 900 });
  await darkPage.goto(BASE_URL + '/', { waitUntil: 'networkidle2' });
  await darkPage.evaluate(async () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('steen-theme', 'dark');
    const totalHeight = document.body.scrollHeight;
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < totalHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await new Promise(r => setTimeout(r, 800));
  const darkPath = path.join(OUT_DIR, 'home-desktop-dark.png');
  await darkPage.screenshot({ path: darkPath, fullPage: true });
  console.log('✓  home-desktop-dark.png');
  await darkPage.close();

  await browser.close();

  const ok = results.filter(r => r.status === 'ok').length;
  const fail = results.filter(r => r.status === 'error').length;
  console.log(`\nDone. ${ok + 1} screenshots saved to .tmp/screenshots/  (${fail} errors)`);
  console.log(`Path: ${OUT_DIR}`);
}

main().catch(err => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
