# RESTORE.md

How to get this project running again after a Windows reinstall.

**Good news:** the entire project lives on `D:\Steen.fyi New Website` and both git repos are
clean and fully pushed. No project files are at risk. Everything below is about the *tooling*
on `C:` that gets wiped.

---

## 1. Runtime + tools to reinstall

| Tool | Version in use before wipe | Where it was installed (wiped) |
|---|---|---|
| Node.js | v25.9.0 | `C:\nvm4w\nodejs` (via nvm4w) |
| npm | 11.12.1 | bundled with Node |
| Git for Windows | 2.54.0.windows.1 | `C:\Program Files\Git` |
| GitHub CLI (`gh`) | logged in as `saadhabib122-workzap` | auth in Windows Credential Manager |

Node was managed by **nvm4w** (nvm for Windows). Reinstall nvm4w, then:

```bash
nvm install 25.9.0
nvm use 25.9.0
```

---

## 2. Install commands

Dependencies live in `node_modules/` on `D:` and technically survive the wipe, but if you ever
need a clean reinstall:

```bash
# main site (dev tooling only — the site itself is static, no build step)
cd "D:\Steen.fyi New Website"
npm install

# survey app
cd "D:\Steen.fyi New Website\decision-survey"
npm install
```

### ⚠️ Two things `npm install` will NOT restore

1. **Puppeteer's Chromium** — the browser binaries live at
   `C:\Users\<you>\.cache\puppeteer` (~2.7 GB) and **will be wiped**. `node_modules/puppeteer`
   surviving on `D:` is not enough; the actual browser is gone. Any screenshot/QA script will
   fail until you run:
   ```bash
   npx puppeteer browsers install chrome
   ```

2. **`sharp` is missing from `package.json`** — it's installed in `node_modules` (it was added
   with `--no-save`) and is used for all image resizing/webp conversion. It survives on `D:`,
   but a clean `npm install` won't bring it back. Either add it to `package.json`, or after a
   clean install run:
   ```bash
   npm install --save-dev sharp
   ```

---

## 3. Env vars / secrets

**None required.** Verified: no `.env`, `credentials.json`, or `token.json` exists in either
project (they're listed in `.gitignore` but were never created). The only environment variable
the survey server reads is `PORT`, which defaults to `3000`.

The main site is fully static HTML/CSS/JS — no API keys, no build secrets.

---

## 4. Re-authentication needed

| What | How to restore |
|---|---|
| **Git identity** | `git config --global user.name "Saad"` and `git config --global user.email "saadhabib122@gmail.com"` |
| **GitHub push access** | Git uses `credential.helper=manager` (Git Credential Manager); the stored token is wiped. Easiest fix: `gh auth login` (previous scopes: `gist`, `read:org`, `repo`, `workflow`). Otherwise the first `git push` will prompt for browser auth. |
| **Claude Code** | User config at `C:\Users\<you>\.claude\` is wiped (auth, settings, session history, skills). Re-login on first launch. Project-level `.claude/settings.json` and the vendored `impeccable` skill under `.agents/` are on `D:` and tracked in git — those survive. |
| **Google Drive MCP connector** | Needs re-authorization via claude.ai connector settings. |
| **Render** (survey hosting) | Log back into the Render dashboard to manage `survey.steen.fyi`. Nothing local to restore. |

---

## 5. Deployments (nothing local needed)

| Thing | Where it lives | Repo |
|---|---|---|
| Main site | GitHub Pages → https://saadhabib122-workzap.github.io/steen-fyi/ | `saadhabib122-workzap/steen-fyi` |
| Survey app | Render → `survey.steen.fyi` | `saadhabib122-workzap/decision-laundering-survey` |

Both deploy from their GitHub remotes, so they keep running through the reinstall untouched.

**Note on survey response data:** `decision-survey/server.js` writes responses to
`decision-survey/data/responses.xlsx`. The local copy of that folder is **empty** — real
responses live on the Render instance, not on this machine. Download them from the survey's
`/download` endpoint if you want a local backup (unrelated to the wipe, but they aren't backed
up anywhere else either).

---

## 6. Running locally

```bash
# static site — any static server works
cd "D:\Steen.fyi New Website"
npx serve

# survey app
cd "D:\Steen.fyi New Website\decision-survey"
npm start        # http://localhost:3000
```

Note: `npx serve` rewrites clean URLs and will falsely redirect `article.html?slug=...`
→ `/articles`. That's a local dev-server artifact only, not a real bug, and GitHub Pages does
not do it. For accurate local testing of article pages, use a literal static file server.
