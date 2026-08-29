# P. Allauddin — Portfolio

A single-page portfolio site built from my resume, styled as a mission-telemetry console — a nod to [G2B: ISRO — Singularity](https://github.com/Allauddin-2006), my orbital-mechanics simulation project.

**Live site:** _add your deployed URL here_

## Preview

Dark HUD-style theme with a live-ticking mission clock, an animated orbit diagram, and content organized into numbered system modules (Experience, Projects, Skills, Certifications, Education).

## Tech

- Plain HTML, CSS, and vanilla JS — no build step, no dependencies
- Fonts: Space Grotesk, IBM Plex Mono, Inter (via Google Fonts)
- Scroll-reveal via `IntersectionObserver`; orbit animation via inline SVG `<animateMotion>`
- Respects `prefers-reduced-motion`; responsive down to mobile

## Structure

```
.
├── index.html      # entire site — markup, styles, and script in one file
└── README.md
```

## Running locally

No build tools required. Either:

- Open `index.html` directly in a browser, or
- Serve it locally for a closer-to-production feel:
  ```
  python -m http.server 8000
  ```
  then visit `http://localhost:8000`

## Deploying

**Netlify Drop (fastest):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag `index.html` onto the page
3. Get a live public URL in seconds

**GitHub Pages:**
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to the `main` branch, root folder
4. Site publishes at `https://<username>.github.io/<repo-name>`

## Updating content

All content lives directly in `index.html` — resume sections (Experience, Projects, Skills, Certifications, Education) are plain HTML blocks, so updating them just means editing the text between the tags. No templating or data files involved.

## Contact

- Email: adbuthstar426@gmail.com
- GitHub: [Allauddin-2006](https://github.com/Allauddin-2006)
- LinkedIn: [allauddinp-708360321](https://linkedin.com/in/allauddinp-708360321)
- LeetCode: [P_ALLAUDDIN](https://leetcode.com/u/P_ALLAUDDIN)
