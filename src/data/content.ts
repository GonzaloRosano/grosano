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
    tech: "Rust",
    isPublic: true,
    featured: true,
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
    featured: true,
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
