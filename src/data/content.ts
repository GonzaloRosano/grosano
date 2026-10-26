export type Bilingual = { en: string; es: string };

export type Project = {
  slug: string;
  name: string;
  summary: Bilingual;
  stack: string[];
  // Color del punto, mismo criterio que languageColor.
  tech: string;
  // Repo publico: tiene pagina de detalle con el README.
  isPublic: boolean;
  demo?: string;
  image?: string;
  featured: boolean;
  // Texto curado para la pagina de detalle (solo proyectos publicos).
  overview?: Bilingual;
  highlights?: Bilingual[];
};

export const PROJECTS: Project[] = [
  {
    slug: "onasor",
    name: "onasor",
    summary: {
      en: "Terminal toolkit for Windows: PC monitor and automations, SSH sessions with tunnels, ports and firewall, and a Minecraft launcher.",
      es: "Suite de herramientas de terminal para Windows: monitor y automatizaciones del PC, sesiones SSH con túneles, puertos y firewall, y un launcher de Minecraft.",
    },
    stack: ["Rust", "Go"],
    overview: {
      en: "A set of command-line tools for Windows, installed with one PowerShell line. This repo holds only the installers; the tools themselves are private. Some installers also work on Linux and Apple Silicon macOS.",
      es: "Un conjunto de herramientas de línea de comandos para Windows, que se instala con una línea de PowerShell. Este repo contiene solo los instaladores; las herramientas son privadas. Algunos instaladores también funcionan en Linux y en macOS con Apple Silicon.",
    },
    highlights: [
      {
        en: "Five tools: PC monitor and automations, SSH sessions with tunnels, ports and firewall, a Minecraft launcher, and a Claude Code helper.",
        es: "Cinco herramientas: monitor y automatizaciones del PC, sesiones SSH con túneles, puertos y firewall, un launcher de Minecraft y un asistente para Claude Code.",
      },
      {
        en: "Installers in PowerShell and POSIX sh, verified with SHA-256.",
        es: "Instaladores en PowerShell y POSIX sh, verificados con SHA-256.",
      },
      {
        en: "Pinnable version and install folder, plus an uninstall option.",
        es: "Versión y carpeta de instalación configurables, y opción de desinstalar.",
      },
    ],
    tech: "Rust",
    isPublic: true,
    featured: false,
  },
  {
    slug: "dark-feather-chat",
    name: "Dark Feather Chat",
    summary: {
      en: "Self-hosted team chat as a native desktop app.",
      es: "Chat de equipo self-hosted como app de escritorio nativa.",
    },
    stack: ["Tauri", "Rust", "libsql"],
    tech: "Tauri",
    isPublic: false,
    featured: false,
  },
  {
    slug: "normativas-animals",
    name: "Normativas Animals City",
    summary: {
      en: "Searchable rulebook for a roleplay community, migrated from Astro to Next.js with its own search.",
      es: "Normativa con buscador para una comunidad de rol, migrada de Astro a Next.js con buscador propio.",
    },
    stack: ["Next.js", "TypeScript", "Vercel"],
    tech: "Next.js",
    isPublic: false,
    demo: "https://animalscity-rp.vercel.app",
    image: "/projects/normativas-animals.png",
    featured: true,
  },
  {
    slug: "plasmastudios",
    name: "Plasma Studios",
    summary: {
      en: "Marketing site for a Minecraft hosting studio.",
      es: "Sitio de marketing de un estudio de hosting de Minecraft.",
    },
    stack: ["Astro", "Vercel"],
    tech: "Astro",
    isPublic: true,
    demo: "https://plasmastudios.vercel.app",
    image: "/projects/plasmastudios.png",
    overview: {
      en: "Bilingual marketing site for a Minecraft hosting studio, built with Astro. It presents the studio and its team; the work and contact pages are still placeholders.",
      es: "Sitio de marketing bilingüe para un estudio de hosting de Minecraft, hecho con Astro. Presenta al estudio y a su equipo; las páginas de trabajo y contacto todavía son placeholders.",
    },
    highlights: [
      {
        en: "English and Spanish routes (/en and /es).",
        es: "Rutas en inglés y español (/en y /es).",
      },
      {
        en: "A page per team member (22 people), generated from a single team.json.",
        es: "Una página por integrante del equipo (22 personas), generada desde un único team.json.",
      },
      {
        en: "Animation with GSAP and ScrollTrigger, and a Three.js scene.",
        es: "Animación con GSAP y ScrollTrigger, y una escena con Three.js.",
      },
      {
        en: "Astro 7, Tailwind CSS 4 and TypeScript.",
        es: "Astro 7, Tailwind CSS 4 y TypeScript.",
      },
    ],
    featured: true,
  },
  {
    slug: "dfgroup",
    name: "Dark Feather Group",
    summary: {
      en: "Website for a creative collective and digital studio.",
      es: "Sitio web de un colectivo creativo y estudio digital.",
    },
    stack: ["Astro", "Vercel"],
    tech: "Astro",
    isPublic: true,
    demo: "https://dfgroup-one.vercel.app",
    image: "/projects/dfgroup.webp",
    overview: {
      en: "Single-page site for a creative collective and digital studio covering design, development, art and production, with four product lines: DF Hosting, DF Series, DF Atelier and DF Voices.",
      es: "Sitio de una sola página para un colectivo creativo y estudio digital de diseño, desarrollo, arte y producción, con cuatro líneas de producto: DF Hosting, DF Series, DF Atelier y DF Voices.",
    },
    highlights: [
      {
        en: "WebGL point-cloud background (Three.js) that morphs between shapes, loaded as a React island.",
        es: "Fondo WebGL de nube de puntos (Three.js) que se transforma entre formas, cargado como isla de React.",
      },
      {
        en: "Bilingual at /es and /en, with the root redirecting to /es.",
        es: "Bilingüe en /es y /en, con la raíz redirigiendo a /es.",
      },
      {
        en: "Reveal animations that respect prefers-reduced-motion.",
        es: "Animaciones de entrada que respetan prefers-reduced-motion.",
      },
      {
        en: "Astro 5, React 19 and TypeScript, with a privacy page and contact by email.",
        es: "Astro 5, React 19 y TypeScript, con página de privacidad y contacto por email.",
      },
    ],
    featured: true,
  },
  {
    slug: "aruberuto",
    name: "Aruberuto Makoto",
    summary: {
      en: "Landing page for an online Japanese course.",
      es: "Landing page para un curso de japonés online.",
    },
    stack: ["Astro", "Vercel"],
    tech: "Astro",
    isPublic: true,
    demo: "https://aruberuto.vercel.app",
    image: "/projects/aruberuto.webp",
    overview: {
      en: "Sales landing page for the online Japanese course of Aruberuto Makoto. It is an unsolicited proposal and work sample, not a commissioned project.",
      es: "Landing de ventas para el curso de japonés online de Aruberuto Makoto. Es una propuesta propia y una muestra de trabajo, no un proyecto encargado.",
    },
    highlights: [
      {
        en: "Hero with an embedded Vimeo video, then method, course details, sensei, testimonials, pricing and a Hotmart checkout link.",
        es: "Hero con video de Vimeo embebido, y luego método, detalles del curso, sensei, testimonios, precios y enlace de compra a Hotmart.",
      },
      {
        en: "Terms and privacy pages, plus SEO and Open Graph metadata.",
        es: "Páginas de términos y privacidad, más SEO y metadatos Open Graph.",
      },
      {
        en: "Static Astro 6 build with Tailwind CSS 4; Docker multi-stage image served with nginx.",
        es: "Build estático con Astro 6 y Tailwind CSS 4; imagen Docker multi-stage servida con nginx.",
      },
    ],
    featured: true,
  },
  {
    slug: "darkfeather-panel",
    name: "darkfeather-panel",
    summary: {
      en: "Admin panel for the Dark Feather community.",
      es: "Panel de administración de la comunidad Dark Feather.",
    },
    stack: ["Rust"],
    tech: "Rust",
    isPublic: false,
    featured: false,
  },
  {
    slug: "dark-feather-bot",
    name: "dark-feather-bot",
    summary: {
      en: "Discord bot, rewritten in Rust (v2).",
      es: "Bot de Discord, reescrito en Rust (v2).",
    },
    stack: ["Rust"],
    tech: "Rust",
    isPublic: false,
    featured: false,
  },
  {
    slug: "heat-reapers",
    name: "heat-reapers",
    summary: {
      en: "Internal admin panel for a community.",
      es: "Panel interno de administración para una comunidad.",
    },
    stack: ["TypeScript"],
    tech: "TypeScript",
    isPublic: false,
    featured: false,
  },
];

export const STACK: { label: Bilingual; items: string[] }[] = [
  {
    label: { en: "Frontend", es: "Frontend" },
    items: ["React", "Next.js", "Astro", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    label: { en: "Desktop & tooling", es: "Escritorio y herramientas" },
    items: ["Tauri", "Rust", "Go"],
  },
  {
    label: { en: "Also", es: "También" },
    items: ["PHP (legacy)", "Design systems"],
  },
];
