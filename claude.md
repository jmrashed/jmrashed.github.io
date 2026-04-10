# claude.md — AI Agent Context for jmrashed.github.io

This is the primary reference document for any AI code agent working on this project. Read this before making any changes.

---

## Project Overview

**What it is**: Personal portfolio website for Rashed Zaman — Tech Lead & Full-Stack Developer (Dhaka, Bangladesh). 10+ years experience in PHP, Node.js, React, and cloud infrastructure.

**Audience**: Potential employers, clients, and collaborators in the tech industry.

**Live URL**: `https://jmrashed.github.io` (configured via `NEXT_PUBLIC_SITE_URL` env var)

**Tech Stack**:
| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.8 (strict mode) |
| Styling | Tailwind CSS 3.4 (class-based dark mode) |
| Animations | Framer Motion 12.38 |
| Icons | Lucide React |
| Theme | next-themes 0.4.6 |
| Forms | React Hook Form 7.72 + Zod 4.3 |
| Markdown | react-markdown (blog content rendering) |
| Fonts | Inter (body) + Fira Code (mono) via `next/font/google` |
| Deployment | Static export (`output: 'export'`) → GitHub Pages via `gh-pages` |

---

## Project Structure

```
jmrashed.github.io/
├── app/                        # Next.js App Router — pages and layouts
│   ├── layout.tsx              # Root layout: ThemeProvider, Navbar, Footer, SEO metadata, JSON-LD, viewport
│   ├── page.tsx                # Home page — composes all section components
│   ├── globals.css             # Tailwind directives + custom CSS utilities (light + dark mode)
│   ├── not-found.tsx           # 404 page
│   ├── robots.ts               # SEO robots config
│   ├── sitemap.ts              # Sitemap — includes /, /projects, /blogs, /case-studies, /uses + dynamic routes
│   ├── icon.tsx                # Branded RZ favicon (32×32, force-static, Next.js ImageResponse)
│   ├── opengraph-image.tsx     # OG image 1200×630 (force-static, Next.js ImageResponse)
│   ├── blogs/
│   │   ├── page.tsx            # Blog listing page
│   │   └── [id]/page.tsx       # Single blog post — renders markdown via react-markdown
│   ├── projects/
│   │   ├── page.tsx            # Projects page — server component, passes data to ProjectsFilter
│   │   └── [id]/page.tsx       # Single project detail
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing
│   │   └── [id]/page.tsx       # Single case study — shows role + duration fields
│   └── uses/
│       └── page.tsx            # /uses page — hardware, editor, stack, tools, currently exploring
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Top navigation + ThemeToggle (light/dark aware bg)
│   │   └── Footer.tsx          # Footer — receives socialLinks prop from layout.tsx
│   ├── sections/               # Full-page sections used in app/page.tsx
│   │   ├── Hero.tsx            # Profile photo, typed roles, stats from siteConfig.stats
│   │   ├── About.tsx           # Stats from siteConfig.stats, clickable cert links
│   │   ├── Skills.tsx          # Tech skills + Currently Exploring from siteConfig.currentlyLearning
│   │   ├── Experience.tsx      # Work history timeline
│   │   ├── Projects.tsx        # Homepage: first 3 projects. Exports ProjectCard (used by ProjectsFilter)
│   │   ├── ProjectsFilter.tsx  # Client component: filter bar + animated grid for /projects page
│   │   ├── BlogList.tsx        # Blog previews on homepage
│   │   ├── OpenSource.tsx      # OSS packages with metrics + static GitHub stat tiles
│   │   ├── Testimonials.tsx    # 3 real testimonials carousel + LinkedIn CTA
│   │   ├── Awards.tsx          # Hardcoded awards (no JSON file — data lives in component)
│   │   ├── Contact.tsx         # Formspree form + timezone + contact hours
│   │   └── HireMeModal.tsx     # Modal — Formspree fetch, 24h response badge, success state
│   └── ui/                     # Reusable primitives
│       ├── AnimatedSection.tsx # Framer Motion scroll animation wrapper
│       ├── ThemeProvider.tsx   # next-themes wrapper (must wrap entire app)
│       ├── ThemeToggle.tsx     # Dark/light mode toggle button
│       ├── Badge.tsx           # Skill/tag badge
│       ├── SectionHeading.tsx  # Consistent section title styling
│       ├── BackButton.tsx      # Navigation back button
│       └── HireMeButton.tsx    # CTA button that opens HireMeModal
│
├── lib/
│   ├── data.ts                 # All data access functions (reads from public/data/*.json at build time)
│   └── utils.ts                # cn(), formatDate(), siteConfig (single source of truth)
│
├── public/data/                # Source of truth for all dynamic content
│   ├── blogs.json              # 5 real technical blog posts → app/blogs/[id]
│   ├── projects.json           # 12 projects → app/projects/[id]
│   ├── case-studies.json       # 3 real case studies → app/case-studies/[id]
│   ├── experience.json         # 7 work history entries (incl. current Freelance role)
│   ├── skills.json             # Technical skills (no icon_class/icon_color — stripped)
│   ├── achivements.json        # NOTE: intentional typo — do NOT rename
│   ├── socialLinks.json        # Social media links → Footer + Contact
│   └── menu.json               # Navigation menu items
│
├── public/images/              # Static images
│   ├── profile.jpg             # ⚠️ MISSING — add headshot here (400×400px min, square)
│   └── README.md               # Documents profile photo requirements
│
├── types/index.ts              # All TypeScript interfaces (single source of truth)
├── next.config.ts              # Static export config
├── tailwind.config.ts          # Tailwind setup (darkMode: 'class')
├── tsconfig.json               # Strict TS, path alias @/* → ./*
└── package.json                # Scripts and dependencies
```

---

## siteConfig (lib/utils.ts) — Single Source of Truth

```ts
export const siteConfig = {
  name: 'Rashed Zaman',
  title: 'Rashed Zaman — Tech Lead & Full-Stack Developer | Portfolio',
  description: '...',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jmrashed.github.io',
  email: 'jmrashed@gmail.com',
  location: 'Dhaka, Bangladesh',
  timezone: 'UTC+6 — Bangladesh Standard Time',
  contactHours: '9 AM – 6 PM (Mon–Fri)',
  availableFrom: 'April 2025',          // shown in Hero availability badge
  github: 'https://github.com/jmrashed',
  githubReadme: 'https://github.com/jmrashed/jmrashed',  // profile README repo
  linkedin: 'https://www.linkedin.com/in/jmrashed/',
  twitter: '@jmrashed',
  cvPath: '/RASHED_ZAMAN_CV.pdf',
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '',  // set in .env.local

  // Stats — used in Hero (first 4) and About (all 6). Change here, updates everywhere.
  stats: [
    { value: '10+',   label: 'Years Exp.',  labelLong: 'Years Experience',   color: '#818cf8' },
    { value: '36+',   label: 'Team Size',   labelLong: 'Team Members Led',   color: '#34d399' },
    { value: '100+',  label: 'Projects',    labelLong: 'Projects Delivered', color: '#c084fc' },
    { value: '40+',   label: 'Mentored',    labelLong: 'Devs Mentored',      color: '#fbbf24' },
    { value: '$2M+',  label: 'Budget',      labelLong: 'Budget Managed',     color: '#f472b6' },
    { value: '500K+', label: 'AI Revenue',  labelLong: 'Revenue via AI',     color: '#67e8f9' },
  ],

  // Currently learning — shown in Skills section "Currently Exploring" widget
  currentlyLearning: [
    { label: 'Rust',             color: '#f97316' },
    { label: 'LLM Fine-tuning',  color: '#c084fc' },
    { label: 'Go',               color: '#67e8f9' },
    { label: 'Kubernetes (CKA)', color: '#60a5fa' },
    { label: 'WebAssembly',      color: '#34d399' },
  ],
};
```

---

## Data Flow

```
public/data/*.json
  → lib/data.ts (readJson<T> via fs.readFileSync at build time)
  → page.tsx / [id]/page.tsx (server components call getter functions)
  → Section components (receive typed props)
  → Static HTML generated at build time (output: 'export')
```

**Key getter functions in `lib/data.ts`**:
- `getBlogs()` → `Blog[]`
- `getBlogById(id: string)` → `Blog | undefined` — id is UUID string
- `getProjects()` → `Project[]`
- `getProjectById(id: number)` → `Project | undefined`
- `getCaseStudies()` → `CaseStudy[]`
- `getCaseStudyById(id: number)` → `CaseStudy | undefined`
- `getExperience()` → `Experience[]`
- `getSkills()` → `SkillsData`
- `getAchievements()` → `AchievementCategory[]`
- `getSocialLinks()` → `SocialLink[]`

---

## Static Export Configuration

```ts
// next.config.ts
export default {
  output: 'export',           // Generates static HTML in out/
  images: { unoptimized: true }, // Required — no Image Optimization API on static hosts
  trailingSlash: true,        // /blogs/ not /blogs — required for GitHub Pages
}
```

**Critical constraints**:
- Never use `next/image` with optimization. Use plain `<img>` tags.
- No API routes — they don't work with `output: 'export'`.
- `app/icon.tsx` and `app/opengraph-image.tsx` must use `export const dynamic = 'force-static'` (NOT `runtime = 'edge'`).
- `ThemeProvider` must always wrap the app in `layout.tsx`.

---

## Forms — Formspree Integration

Both `Contact.tsx` and `HireMeModal.tsx` submit to Formspree via `fetch()`:

```ts
const endpoint = siteConfig.formspreeId
  ? `https://formspree.io/f/${siteConfig.formspreeId}`
  : `https://formspree.io/f/xpwzgkqb`;  // fallback

await fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(data),
});
```

**Setup**: Sign up at formspree.io → create form → copy ID → add to `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ID=your-form-id
```

---

## Light / Dark Mode

Uses `next-themes` with `attribute="class"` — toggles `dark` class on `<html>`.

**Pattern**: Always pair light/dark Tailwind classes:
```tsx
className="text-gray-900 dark:text-white bg-white dark:bg-gray-900"
```

**CSS utilities** in `globals.css` use `.dark` selector:
```css
body { /* light styles */ }
.dark body { /* dark styles */ }
.glass-card { /* light */ }
.dark .glass-card { /* dark */ }
```

**Never** use hardcoded `text-white`, `text-gray-400`, `bg-[#080f1e]` without a light-mode counterpart.

---

## Blog Content Rendering

Blog posts use Markdown in the `content` field. The detail page (`app/blogs/[id]/page.tsx`) renders it with `react-markdown`:

```tsx
import ReactMarkdown from 'react-markdown';
<ReactMarkdown>{blog.content}</ReactMarkdown>
```

Styled with Tailwind Typography prose classes (light + dark variants).

---

## Projects Filter

`app/projects/page.tsx` is a server component that fetches data and passes it to `components/sections/ProjectsFilter.tsx` (client component). The filter bar has 7 categories: All, PHP/Laravel, Node.js, AI/ML, E-Commerce, Healthcare, FinTech. Filtering is client-side with `useMemo`.

---

## TypeScript Types (types/index.ts)

All interfaces live in `types/index.ts`. Never define types inline in components.

**Blog** (id is UUID string):
```ts
interface Blog {
  id: string;           // UUID — used as route param in /blogs/[id]
  title: string;
  slug: string;         // SEO-friendly (not used for routing)
  excerpt: string;
  content: string;      // Markdown content — rendered via react-markdown
  // ... meta fields, tags, category, status, dates
}
```

**CaseStudy** (has optional `duration` and `role` fields added):
```ts
interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologiesUsed: string[];
  projectId?: number;
  image?: string;
  duration?: string;   // e.g. "6 weeks"
  role?: string;       // e.g. "Tech Lead"
}
```

**Skill** (icon_class and icon_color are optional — stripped from JSON):
```ts
interface Skill {
  name: string;
  icon_class?: string;  // not used — Skills.tsx uses emoji via categoryMeta
  icon_color?: string;  // not used
}
```

---

## Adding New Content

### New Blog Post
Add to `public/data/blogs.json`. Required fields:
```json
{
  "id": "unique-uuid-v4",
  "title": "Post Title",
  "slug": "post-title-kebab-case",
  "excerpt": "1-2 sentence summary",
  "content": "# Markdown content\n\nParagraphs here...",
  "featured_image": "filename.jpg",
  "meta_title": "SEO title",
  "meta_description": "SEO description",
  "meta_keywords": "comma, separated",
  "tags": ["Tag1"],
  "category": "Category",
  "status": "published",
  "published_at": "2025-01-01T10:00:00Z",
  "created_at": "2025-01-01T09:00:00Z",
  "updated_at": "2025-01-01T10:00:00Z"
}
```
Route: `/blogs/{uuid}/`. Content renders as Markdown.

### New Project
Add to `public/data/projects.json`. The `id` must be a unique integer. The `'Product Name'` key contains a space — preserve exactly.

### New Section on Homepage
1. Create `components/sections/NewSection.tsx`
2. Add data getter to `lib/data.ts` if needed
3. Add type to `types/index.ts` if needed
4. Import and render in `app/page.tsx`
5. Wrap content in `<AnimatedSection id="new-section">`
6. Add to `app/sitemap.ts` if it's a new page

---

## Important Gotchas

- `achivements.json` — intentional typo in filename. Do NOT rename.
- Blog routing uses `id` (UUID), not `slug`.
- Project and CaseStudy IDs are numbers; Blog IDs are UUID strings.
- `public/data/` is the live data source. `assets/data/` is legacy — do not use.
- `Awards.tsx` has no JSON file — award data is hardcoded in the component.
- `public/images/profile.jpg` is missing — Hero shows "RZ" initials fallback until added.
- All `live_demo` fields in `projects.json` are empty strings — no live demos deployed yet.
- `packages.microsoft.gpg` in repo root is a stray file — should be gitignored.

---

## Scripts

```bash
npm run dev        # Local dev server at http://localhost:3000
npm run build      # Builds static site into out/ directory
npm run deploy     # Runs predeploy (build) then gh-pages -d out
npm run lint       # ESLint
npm run format     # Prettier write
```

**Deploy flow**: `npm run deploy` → triggers `predeploy` (runs `npm run build`) → pushes `out/` to `gh-pages` branch on GitHub.

---

## Validation Before Deploying

```
✅ npm run build  — no TypeScript or build errors
✅ Dark mode works — toggle ThemeToggle and verify all sections
✅ Light mode works — check text contrast, no invisible text
✅ New JSON entries match the exact schema in types/index.ts
✅ No API routes added
✅ No next/image without unoptimized flag
✅ All imports use @/ alias
✅ trailingSlash URLs used in any internal links (/blogs/ not /blogs)
✅ New pages added to app/sitemap.ts
✅ NEXT_PUBLIC_FORMSPREE_ID set in .env.local and Vercel env vars
```

---

## Commit Message Convention

```
feat: add blog post about [topic]
fix: resolve [issue] in [Component]
refactor: improve [Component] performance
style: fix dark mode classes in [Component]
docs: update claude.md
chore: update dependencies
```
