# Hargun Kaur — Portfolio: Project Context

## What this is
A static multi-page academic portfolio website for Hargun Kaur,
a B.Tech Computer Science Engineering student at GTBIT, GGSIPU, New Delhi.
No build step, no framework — plain HTML, CSS, and minimal JS.

---

## Site structure

```
hargun-portfolio/
├── index.html          # About page (identity sidebar + bio, interests, news)
├── cv.html             # CV page (education, skills, certifications, activities)
├── projects.html       # Projects page (project cards with tech tags)
├── styles.css          # Shared design system (tokens, layout, components)
├── script.js           # Minimal scroll-based nav highlighter (legacy, unused)
├── assets/
│   ├── favicon.svg              # SVG site icon
│   └── Hargun_Kaur_Resume.pdf  # Resume PDF (linked from every page)
├── .gitignore
├── CONTEXT.md          # This file
└── README.md           # Quick-start & deploy instructions
```

---

## Design system (`styles.css`)

### Color tokens
| Variable | Value | Usage |
|---|---|---|
| `--ink` | `#1c1f26` | Primary text, dark backgrounds |
| `--paper` | `#f7f6f3` | Page background (warm off-white) |
| `--paper-raised` | `#ffffff` | Cards / elevated surfaces |
| `--slate` | `#5b6472` | Secondary text, labels |
| `--hairline` | `#d9d6ce` | Borders and dividers |
| `--brass` | `#a9812d` | Accent — links, active states, tags |
| `--brass-dim` | `#cbb27a` | Muted accent |
| `--brass-bg` | `#f4ead4` | Chip / badge backgrounds |

### Fonts (Google Fonts)
- **Source Serif 4** — headings, name, section titles
- **Inter** — body copy
- **IBM Plex Mono** — labels, nav links, metadata, tags

---

## Pages

### `index.html` — About
- Sticky top navbar (`About · CV · Projects`)
- Two-column layout: identity sidebar (sticky) + content area
- Sidebar: initials avatar, name, role, institution, email link, LinkedIn, GitHub, CV download button, skill chips
- Content: About bio, Interests list, News & Updates (recent achievements)
- Phone number intentionally omitted for privacy

### `cv.html` — Curriculum Vitae
- Same navbar (CV active)
- Single-column, max 780px
- Page header with CV title + PDF download button
- Sections: Education · Technical Skills · Certifications & Courses · Extra-curricular
- Status badges: green (Complete) / amber (In Progress)

### `projects.html` — Projects
- Same navbar (Projects active)
- Project cards with tech tag pills, description, bullet points
- "More coming soon" placeholder card (dimmed)

---

## Key decisions made

1. **Multi-page over single-page scroll** — mirrors how academic/scholar portfolio
   sites work (MIT, Stanford CS student pages). Each topic gets its own URL.

2. **Warm brass palette kept** — user preferred the original `--brass` / `--ink`
   / `--paper` color scheme from the first version.

3. **Identity sidebar** — standard pattern for academic portfolios. Sticky on
   desktop, stacks on mobile.

4. **Phone removed** — email only. LinkedIn and GitHub links included.

5. **`download="Hargun_Kaur_Resume.pdf"`** — explicit filename on the download
   attribute prevents browsers from saving as `.txt`.

---

## Deployment

- **Repo**: https://github.com/hargun-kaur-29/portfolio
- **Platform**: Vercel (static, no build command needed)
- **Auth**: SSH key at `~/.ssh/id_ed25519` (ed25519, linked to hargun9207@gmail.com)

### To deploy / update
```bash
# Make changes, then:
git add .
git commit -m "your message"
git push
# Vercel auto-redeploys on push to main
```

---

## Content to update over time
- Add more projects to `projects.html` as they are completed
- Update `assets/Hargun_Kaur_Resume.pdf` with each new version of the resume
- Add GitHub/LinkedIn profile URLs once confirmed (currently placeholder hrefs)
