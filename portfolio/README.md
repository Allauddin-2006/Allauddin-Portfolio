# P. Allauddin — Portfolio

A personal portfolio built with Next.js (App Router), Tailwind CSS v4, and Motion — a black-and-white minimal design system with a pill nav, animated ambient backdrop, project grid, and an About page with skills, experience, and education, all populated from my resume.

Inspired by the structure of [React Bits Pro](https://github.com/DavidHDev/rbp-portfolio), rebuilt from scratch and simplified: no WebGL shader or physics engine, just Canvas 2D for the ambient background and Motion for scroll reveals — lighter to run and easier to maintain.

## Features

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Light/dark mode via `next-themes`, no flash on load
- Scroll-reveal animations via `motion/react`, respecting `prefers-reduced-motion`
- Canvas-based ambient background, pauses off-screen and on tab hide
- Pill navigation with a spring-animated active indicator
- Click-to-copy email button on the contact card
- SEO metadata (Open Graph, Twitter cards) via a shared helper
- Accessible: skip link, visible focus rings, semantic headings

## Pages

- `/` — Hero, featured projects, contact card
- `/projects` — All projects
- `/about` — Skills, experience, education, certifications & achievements

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

Everything resume-related lives in one file: `lib/config.ts` — name, contact info, social links, projects, skills, experience, education, certifications, and achievements. Update the values there; the pages read from it directly, so there's nothing else to touch for a content change.

## Deploying

**Vercel (recommended for Next.js):**
1. Push this project to a GitHub repo
2. Go to vercel.com/new and import the repo
3. Leave the defaults (Vercel auto-detects Next.js) and click Deploy
4. You get a live `https://<project>.vercel.app` URL, with automatic redeploys on every push

**Netlify:**
1. Push to GitHub
2. app.netlify.com → Add new site → Import an existing project
3. Build command: `npm run build`, publish directory: `.next` (Netlify's Next.js plugin handles the rest)

Note: this is a full Next.js app, not a static HTML file, so it can't be deployed via Netlify Drop or a plain GitHub Pages branch — it needs a build step, which both platforms above run for you automatically.

## Project structure

```
app/
  layout.tsx           # fonts, theme provider, nav, backdrop, footer
  page.tsx             # home
  about/page.tsx
  projects/page.tsx
  globals.css          # design tokens (light/dark)
components/
  layout/              # nav, footer, canvas backdrop
  hero/
  projects/
  about/               # skills, experience, education, certifications
  contact/             # contact card, copy-email button
  ui/                  # motion-primitives (FadeIn)
lib/
  config.ts            # all resume content lives here
  metadata.ts          # SEO helper
```

## Design system

- **Colors:** strict black & white via CSS variables (`--background`, `--foreground`, `--muted`, `--border`), swapped by a `.dark` class
- **Type:** Geist Sans (body), Geist Mono (labels/data), Fraunces (serif display headlines)
- **Motion:** spring-based nav indicator, fade-up scroll reveals, hover-lift project cards
