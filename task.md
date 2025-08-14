### **Prompt 1 – Build & Export Next.js for GitHub Pages**

```
You are a CLI assistant. I have a Next.js project configured with `output: 'export'` and `homepage` set to https://jmrashed.github.io in package.json. I want to deploy it to GitHub Pages. 

Steps:
1. Install dependencies with `pnpm install`
2. Build with `pnpm run build`
3. Export static files with `pnpm run export` (output goes to `/out`)
4. Deploy to GitHub Pages branch with `gh-pages -d out`
5. Push to my repo so it lives at https://jmrashed.github.io

Write me the exact terminal commands for macOS/Linux to do this from scratch.
```

---

### **Prompt 2 – Full One-Command Deployment**

```
I have a Next.js 15 project with `output: 'export'` in next.config.mjs. The package.json already has "predeploy" and "deploy" scripts using `pnpm run build && pnpm run export` and `gh-pages -d out`.

I want you to generate a single command I can run in my terminal that:
- Installs dependencies
- Builds the site
- Exports to /out
- Deploys to GitHub Pages
- Pushes to my repository main branch

Use pnpm and gh-pages CLI. Assume my repo remote is already set.
```

---

### **Prompt 3 – Gemini-Assisted Live Deployment**

```
You are acting as my deployment assistant. I want to deploy my Next.js site to GitHub Pages via Google Gemini CLI.

Here’s my setup:
- package.json homepage = "https://jmrashed.github.io"
- next.config.mjs output = 'export'
- predeploy: pnpm run build && pnpm run export
- deploy: gh-pages -d out

Goal: The site must be live at https://jmrashed.github.io

I need exact step-by-step shell commands (Linux) that I can copy-paste to deploy it from a fresh clone, including installing gh-pages if missing.
```
 