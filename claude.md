# Claude.md - Project Context for AI Code Agents

This document provides comprehensive context for AI code agents (Claude, GPT-4, etc.) working on this Next.js portfolio project. Use this as your primary reference to understand structure, conventions, and safe modification practices.

## 🚀 Project Overview

**Purpose**: Personal portfolio website for Rashed Zaman, Tech Lead & Full-Stack Developer specializing in scalable web apps, system architecture, PHP/Node.js/React, and cloud infrastructure.

**Audience**: Potential employers, clients, collaborators in tech industry (Dhaka, Bangladesh focus).

**Tech Stack**:
```
Framework: Next.js 15 (App Router) + TypeScript
Styling: Tailwind CSS 3.4 + CSS custom utilities
Animations: Framer Motion 12.38
Icons: Lucide React
Theme: next-themes (dark/light mode)
Forms: React Hook Form + Zod validation
Deployment: Static export → GitHub Pages (gh-pages)
Other: Prettier, ESLint, PostCSS, gh-pages
```

**Key Features**:
- ✅ Fully static export (`output: 'export'`) for GitHub Pages
- ✅ Dark/light mode with `ThemeProvider`
- ✅ Smooth animations (Framer Motion)
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Dynamic content from JSON files (blogs, projects, case-studies)
- ✅ Responsive design (mobile-first)
- ✅ Accessibility (ARIA labels, semantic HTML)

**Main Sections**:
1. **Home** (`app/page.tsx`) → Hero, About, Skills, Experience, Projects, Testimonials, Awards, Blog list, Open Source, Contact
2. **Projects** (`app/projects/page.tsx` + `[id]/page.tsx`) → Dynamic project showcase
3. **Case Studies** (`app/case-studies/page.tsx` + `[id]/page.tsx`) → Detailed case studies
4. **Blog** (`app/blogs/page.tsx` + `[id]/page.tsx`) → Dynamic blog from `public/data/blogs.json`
5. **Contact** → Form + modal (`HireMeModal`)

## 📁 Project Structure

```
├── app/                          # Next.js 15 App Router (pages + layouts)
│   ├── globals.css               # Tailwind + custom CSS utilities
│   ├── layout.tsx                # Root layout (ThemeProvider, Navbar, Footer)
│   ├── page.tsx                  # Home page (all sections)
│   ├── blogs/                    # Dynamic blog routes
│   │   ├── page.tsx              # Blog list
│   │   └── [id]/page.tsx         # Single blog post
│   ├── projects/                 # Dynamic project routes
│   │   ├── page.tsx              # Projects list
│   │   └── [id]/page.tsx         # Single project
│   ├── case-studies/             # Dynamic case study routes
│   │   ├── page.tsx              # Case studies list
│   │   └── [id]/page.tsx         # Single case study
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── robots.ts                 # SEO robots config
├── components/                   # React components (TypeScript)
│   ├── layout/                   # Persistent UI
│   │   ├── Navbar.tsx           # Navigation + ThemeToggle
│   │   └── Footer.tsx           # Footer + social links
│   ├── sections/                 # Page sections (self-contained)
│   │   ├── Hero.tsx             # Animated hero section
│   │   ├── About.tsx            # About + experience timeline
│   │   ├── Projects.tsx         # Projects grid + modals
│   │   ├── BlogList.tsx         # Recent blog previews
│   │   └── ... (15+ sections)
│   └── ui/                      # Reusable UI primitives
│       ├── ThemeProvider.tsx    # next-themes wrapper
│       ├── ThemeToggle.tsx      # Dark/light toggle
│       ├── Badge.tsx            # Skill badges
│       └── AnimatedSection.tsx  # Framer Motion wrapper
├── lib/                         # Utilities + data fetchers
│   ├── data.ts                  # Data aggregation (getProjects(), getBlogs())
│   └── utils.ts                 # siteConfig, cn() utility
├── public/data/                 # Static JSON data (dynamic content source)
│   ├── blogs.json               # Blog posts array → dynamic routes
│   ├── projects.json            # Projects array
│   ├── case-studies.json        # Case studies array
│   ├── skills.json              # Skills data
│   ├── experience.json          # Timeline data
│   └── ... (8+ JSON files)
├── public/                      # Static assets
│   ├── images/                  # Optimized images
│   └── favicon.png
├── types/                       # TypeScript definitions
└── Config files:
    ├── next.config.ts           # Static export config
    ├── tailwind.config.ts       # Tailwind setup
    ├── tsconfig.json            # TypeScript config
    ├── package.json             # Scripts + deps
```

## ⚙️ Important Implementation Details

### Dynamic Content Flow
```
JSON files (public/data/) 
  ↓ (imported in lib/data.ts)
getBlogs() / getProjects() 
  ↓ (used in page.tsx + [id]/page.tsx)
Dynamic routes generate static HTML at build time
```

**Blog JSON Structure Example** (`public/data/blogs.json`):
```json
[
  {
    "id": "unique-uuid",
    "title": "How Adi ERP Streamlines...",
    "slug": "adi-erp-streamlines...",
    "excerpt": "...",
    "content": "# Markdown content...",
    "featured_image": "image.jpg",
    "meta_title": "...",
    "tags": ["ERP", "AI"],
    "published_at": "2025-01-20T10:00:00Z"
  }
]
```
- **AI Rule**: Always validate new blog JSON against existing schema. Use `slug` for routing.

### Static Export (GitHub Pages)
```ts
// next.config.ts
export default {
  output: 'export',      // Static HTML generation
  images: { unoptimized: true },  // No Image Optimization (static)
  trailingSlash: true    // /blog/ vs /blog
}
```
**Scripts** (`package.json`):
```json
{
  "dev": "next dev",
  "build": "next build",
  "export": "next build",  // Alias for static export
  "deploy": "gh-pages -d out"
}
```
Deployment: `npm run deploy` → pushes `out/` to `gh-pages` branch.

### Styling & Animations
- **Tailwind**: Utility-first, mobile-first, `@apply` in `globals.css`
- **Custom CSS**: `app/globals.css` (glassmorphism, gradients)
- **Framer Motion**: `<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>`
- **Theme**: `ThemeProvider` wraps entire app, `className="dark:bg-gray-900"`

## 🛠 Coding Conventions

### File Naming & Organization
```
PascalCase.tsx     → React components
camelCase.ts       → Utilities, hooks, types
kebab-case.json    → Data files
snake_case (none)  → Avoid
```

### TypeScript Usage
- **Strict mode** enabled (`tsconfig.json`)
- **All props typed**: `interface Props { children: ReactNode }`
- **Data fetching**: `async function getBlogs()`

### Imports
```tsx
// Preferred: Absolute path aliases (@/components/ui/Badge)
import Badge from '@/components/ui/Badge';
// Relative only when necessary
import { cn } from '@/lib/utils';
```

### Component Structure
```tsx
// Every component follows this pattern:
interface Props { title: string; }
export default function Section({ title }: Props) {
  return (
    <AnimatedSection id="section-id">
      <SectionHeading>{title}</SectionHeading>
      {/* Content */}
    </AnimatedSection>
  );
}
```

## 🚀 Deployment & Scripts

| Script | Purpose | Output |
|--------|---------|--------|
| `npm run dev` | Local dev server | `http://localhost:3000` |
| `npm run build` | Production build | `out/` (static HTML) |
| `npm run export` | Static export | `out/` for GitHub Pages |
| `npm run deploy` | Deploy to GitHub Pages | Pushes `out/` to `gh-pages` branch |

**Build Process**:
1. `npm run build` → generates static HTML in `out/`
2. `npm run deploy` → `gh-pages -d out`

## 🤖 AI Agent Guidelines

### How to Read/Interpret Files
```
1. Start with lib/data.ts → Understand data flow
2. app/layout.tsx → Theme + global structure
3. app/page.tsx → Home page composition
4. public/data/*.json → Dynamic content source
5. components/sections/* → Individual sections
```

### Safe Update Patterns

**Adding New Blog Post**:
```bash
# 1. Edit public/data/blogs.json (add new entry)
# 2. Run: npm run build
# 3. Verify: npx serve out
# 4. Deploy: npm run deploy
```

**Component Updates**:
```
1. Read existing component → Match exact props interface
2. Preserve animations + responsive classes
3. Update types/index.ts if new props
4. Test dark/light mode
```

**New Sections**:
```
1. Create components/sections/NewSection.tsx
2. Add to app/page.tsx (import + <NewSection />)
3. Add AnimatedSection wrapper
4. Add to Navbar if navigation needed
```

### Validation Checklist
```
✅ TypeScript compiles (npm run build)
✅ Tailwind classes valid
✅ Dark mode works (ThemeToggle)
✅ Animations smooth (Framer Motion)
✅ Responsive (mobile → desktop)
✅ Static export works (npm run export)
✅ SEO metadata updated if needed
✅ JSON schema preserved for dynamic routes
```

### Commit Standards
```
feat: add new blog post about [topic]
fix: resolve TypeScript error in [component]
refactor: improve [component] performance
docs: update claude.md
style: fix Tailwind responsive classes
```

**NEVER**:
❌ Modify `next.config.ts` without static export compatibility
❌ Break JSON schema in `public/data/*.json`
❌ Remove `ThemeProvider` wrapper
❌ Use `next/image` (requires unoptimized: true)
❌ Forget `trailingSlash: true` compatibility

---

*Last Updated: Auto-generated for AI agents. Human review recommended for major changes.*
