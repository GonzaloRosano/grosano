<div align="center">

# grosano

**Portfolio personal de Gonzalo Rosano, desarrollador frontend.**

[**grosano.vercel.app**](https://grosano.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Licencia](https://img.shields.io/badge/Licencia-MIT-ff0066?style=flat-square)

[English](README.md) · [Español](README.es.md)

</div>

![Screenshot](https://raw.githubusercontent.com/GonzaloRosano/grosano/main/docs/screenshot.webp)

---

## Sobre el proyecto

Portfolio bilingüe (inglés / español) pensado para ser simple de mantener. No tiene backend ni base de datos: es una **exportación estática** de Next.js, desplegada en Vercel en cada push a `main`.

## Funcionalidades

- Navbar flotante con scroll-spy: píldora arriba en escritorio y barra inferior en móvil
- Tarjetas de proyecto curadas con capturas, y una página de detalle por cada proyecto público que renderiza su README
- Página `/cv` y PDF descargable en inglés y español, siempre impreso en tema claro
- Tema claro y oscuro, e idioma inglés y español, ambos persistidos en `localStorage` y aplicados antes del primer render
- Animación de entrada con GSAP, scroll suave con Lenis, hover magnético en los links de contacto
- Respeta `prefers-reduced-motion`
- SEO: imagen Open Graph, `robots.txt` y `sitemap.xml` generados en build

## Stack

| Categoría | Tecnología |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16, exportación estática (`output: "export"`) |
| UI | React 19, TypeScript |
| Estilos | Tailwind CSS v4 + `@tailwindcss/typography` |
| Animación | [GSAP](https://gsap.com) y [Lenis](https://lenis.darkroom.engineering) |
| Markdown | `react-markdown`, `remark-gfm`, `rehype-raw`, `github-markdown-css` |
| Íconos | [Phosphor Icons](https://phosphoricons.com) |

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # exportación estática en out/
```

## Contenido

| Qué | Dónde |
|---|---|
| Proyectos, resúmenes y stack | `src/data/content.ts` (cada texto tiene `en` y `es`) |
| Capturas de los proyectos | `public/projects/` |
| README de cada página de proyecto | se trae en build desde el repo del proyecto y se limpia en `src/lib/readme.ts` |
| Página de CV | `src/app/cv/page.tsx` |
| PDF del CV | `public/cv-gonzalo-rosano.pdf` y `public/cv-gonzalo-rosano-en.pdf` |

Para agregar un proyecto, sumá una entrada a `PROJECTS` en `src/data/content.ts` y, si tiene captura, poné la imagen en `public/projects/`.

## Deploy

Cada push a `main` dispara un build en Vercel. El sitio es una exportación estática, así que se puede servir desde cualquier hosting estático.

## Licencia

[MIT](LICENSE) © Gonzalo Rosano
