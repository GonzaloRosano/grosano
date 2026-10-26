<div align="center">

# grosano

**Personal portfolio of Gonzalo Rosano, frontend developer.**

[**grosano.vercel.app**](https://grosano.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-ff0066?style=flat-square)

[English](README.md) · [Español](README.es.md)

</div>

![Screenshot](https://raw.githubusercontent.com/GonzaloRosano/grosano/main/docs/screenshot.webp)

---

## About

A bilingual (English / Spanish) portfolio built to be simple to maintain. No backend and no database: it is a **static export** of Next.js, deployed on Vercel on every push to `main`.

## Features

- Floating navbar with scroll-spy: a top pill on desktop and a bottom bar on mobile
- Curated project cards with screenshots, plus a detail page per public project that renders its README
- `/cv` page and downloadable PDF in English and Spanish, always printed in the light theme
- Light and dark theme, English and Spanish, both persisted in `localStorage` and applied before first paint
- Entrance animation with GSAP, smooth scroll with Lenis, magnetic hover on contact links
- Respects `prefers-reduced-motion`
- SEO: Open Graph image, `robots.txt` and `sitemap.xml` generated at build time

## Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16, static export (`output: "export"`) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 + `@tailwindcss/typography` |
| Animation | [GSAP](https://gsap.com) and [Lenis](https://lenis.darkroom.engineering) |
| Markdown | `react-markdown`, `remark-gfm`, `rehype-raw`, `github-markdown-css` |
| Icons | [Phosphor Icons](https://phosphoricons.com) |

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export in out/
```

## Content

| What | Where |
|---|---|
| Projects, summaries and tech stack | `src/data/content.ts` (every text has `en` and `es`) |
| Project screenshots | `public/projects/` |
| README shown on each project page | fetched at build time from the project repo, cleaned by `src/lib/readme.ts` |
| CV page | `src/app/cv/page.tsx` |
| CV PDFs | `public/cv-gonzalo-rosano.pdf` and `public/cv-gonzalo-rosano-en.pdf` |

To add a project, add an entry to `PROJECTS` in `src/data/content.ts` and, if it has a screenshot, drop the image in `public/projects/`.

## Deploy

Pushing to `main` triggers a Vercel build. The site is a plain static export, so it can be served from any static host.

## License

[MIT](LICENSE) © Gonzalo Rosano
