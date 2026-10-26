import type { Metadata } from "next";
import {
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Globe,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { BackLink } from "@/components/BackLink";
import { EMAIL, GITHUB_USER, LINKEDIN_URL } from "@/components/InfoSections";
import { PROJECTS, type Bilingual } from "@/data/content";

export const metadata: Metadata = {
  title: "CV · Gonzalo Rosano",
  description: "Curriculum de Gonzalo Rosano, desarrollador frontend.",
};

const SITE = "grosano.vercel.app";

const SKILLS: { label: Bilingual; items: string[] }[] = [
  {
    label: { en: "Frontend", es: "Frontend" },
    items: ["React", "Next.js", "Angular", "Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    label: { en: "CMS & graphics", es: "CMS y gráficos" },
    items: ["PayloadCMS", "Three.js", "View Transitions API"],
  },
  {
    label: { en: "Desktop & tooling", es: "Escritorio y herramientas" },
    items: ["Tauri", "Rust", "Go"],
  },
];

const CV_PROJECTS = ["normativas-animals", "plasmastudios", "dfgroup", "onasor"];

function projectLink(slug: string): string {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (project?.demo) return project.demo.replace("https://", "");
  return `github.com/${GITHUB_USER}/${slug}`;
}

function Section({
  title,
  children,
}: {
  title: Bilingual;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 break-inside-avoid first:mt-0 print:mt-4">
      <h2 className="border-b border-border pb-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
        <span className="lang-en">{title.en}</span>
        <span className="lang-es">{title.es}</span>
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Row({
  title,
  meta,
  children,
}: {
  title: React.ReactNode;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-medium">{title}</h3>
        {meta && <span className="text-sm text-muted">{meta}</span>}
      </div>
      {children}
    </div>
  );
}

const contactItem =
  "flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 print:border-0 print:bg-transparent print:p-0";

export default function CvPage() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-4xl flex-col px-6 pb-16 pt-24 print:py-0">
        <div className="no-print">
          <BackLink />
        </div>

        <header className="mt-10 flex flex-col gap-1.5 print:mt-0">
          <h1 className="text-4xl font-semibold tracking-tight">
            Gonzalo Rosano
          </h1>
          <p className="text-lg text-muted">
            <span className="lang-en">
              Frontend developer · Information Technology Analyst student
            </span>
            <span className="lang-es">
              Desarrollador frontend · Estudiante de Analista en Tecnologías de
              la Información
            </span>
          </p>

          <ul className="mt-3 flex flex-wrap gap-2 text-sm text-muted print:gap-x-5 print:gap-y-1.5">
            <li className={contactItem}>
              <MapPin size={16} />
              Montevideo, Uruguay
            </li>
            <li className={contactItem}>
              <EnvelopeSimple size={16} />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent">
                {EMAIL}
              </a>
            </li>
            <li className={contactItem}>
              <GithubLogo size={16} />
              <a
                href={`https://github.com/${GITHUB_USER}`}
                className="hover:text-accent"
              >
                github.com/{GITHUB_USER}
              </a>
            </li>
            <li className={contactItem}>
              <LinkedinLogo size={16} />
              <a href={LINKEDIN_URL} className="hover:text-accent">
                linkedin.com/in/gonzalorosano
              </a>
            </li>
            <li className={contactItem}>
              <Globe size={16} />
              <a href={`https://${SITE}`} className="hover:text-accent">
                {SITE}
              </a>
            </li>
          </ul>

          <div className="no-print mt-3">
            <a
              href="/cv-gonzalo-rosano-en.pdf"
              download
              className="lang-en inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
            >
              <DownloadSimple size={16} />
              <span>Download PDF</span>
            </a>
            <a
              href="/cv-gonzalo-rosano.pdf"
              download
              className="lang-es inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
            >
              <DownloadSimple size={16} />
              <span>Descargar PDF</span>
            </a>
          </div>
        </header>

        <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-[1fr_15rem] print:mt-4 print:grid-cols-[1fr_15rem] print:gap-8 print:pt-4">
          <div className="min-w-0">
            <Section title={{ en: "Profile", es: "Perfil" }}>
              <p className="lang-en leading-relaxed">
                Frontend developer with more than 3 years of self-taught
                learning in tech, currently studying Information Technology
                Analyst at ORT Uruguay. Quick learner, proactive and a strong
                team player, I want to keep growing in the tech world beyond the
                developer role. I have a particular interest in design systems
                and in caring about the aesthetics of every piece of work,
                combining functionality with a polished user experience.
              </p>
              <p className="lang-es leading-relaxed">
                Desarrollador frontend con más de 3 años de aprendizaje
                autodidacta en tecnología, actualmente cursando Analista en
                Tecnologías de la Información en ORT Uruguay. Rápido para
                aprender, proactivo y con buena capacidad de trabajo en equipo,
                busco seguir creciendo en el mundo tech más allá del rol de
                developer. Tengo especial interés en los sistemas de diseño y en
                cuidar la estética de cada trabajo, combinando funcionalidad con
                una experiencia de usuario prolija.
              </p>
            </Section>

            <Section title={{ en: "Experience", es: "Experiencia profesional" }}>
              <Row
                title="Quanam"
                meta={
                  <>
                    <span className="lang-en">Apr 2024 — present</span>
                    <span className="lang-es">abr. 2024 — actualidad</span>
                  </>
                }
              >
                <p className="text-sm text-muted">Junior Developer</p>
                <ul className="lang-en mt-2 list-disc space-y-1 pl-5 leading-relaxed marker:text-muted">
                  <li>
                    Frontend development with React, PayloadCMS, Angular and
                    Next.js.
                  </li>
                  <li>Took part in migrations between versions of different frameworks.</li>
                  <li>Work on projects for clients in different countries.</li>
                </ul>
                <ul className="lang-es mt-2 list-disc space-y-1 pl-5 leading-relaxed marker:text-muted">
                  <li>
                    Desarrollo frontend con React, PayloadCMS, Angular y
                    Next.js.
                  </li>
                  <li>Participación en migraciones entre versiones de distintos frameworks.</li>
                  <li>Trabajo en proyectos para clientes de distintos países.</li>
                </ul>
              </Row>
            </Section>

            <Section title={{ en: "Selected projects", es: "Proyectos destacados" }}>
              <ul className="space-y-3">
                {CV_PROJECTS.map((slug) => {
                  const project = PROJECTS.find((p) => p.slug === slug);
                  if (!project) return null;
                  return (
                    <li key={slug}>
                      <Row
                        title={project.name}
                        meta={project.stack.join(" · ")}
                      >
                        <p className="lang-en text-sm text-muted">
                          {project.summary.en}
                        </p>
                        <p className="lang-es text-sm text-muted">
                          {project.summary.es}
                        </p>
                        <a
                          href={`https://${projectLink(slug)}`}
                          className="text-sm text-accent hover:underline"
                        >
                          {projectLink(slug)}
                        </a>
                      </Row>
                    </li>
                  );
                })}
              </ul>
            </Section>
          </div>

          <aside className="min-w-0">
            <Section title={{ en: "Education", es: "Formación" }}>
              <div className="space-y-3">
                <Row
                  title="ORT Uruguay"
                  meta={
                    <>
                      <span className="lang-en">2024 — present</span>
                      <span className="lang-es">2024 — actualidad</span>
                    </>
                  }
                >
                  <p className="text-sm text-muted">
                    <span className="lang-en">
                      Information Technology Analyst
                    </span>
                    <span className="lang-es">
                      Analista en Tecnologías de la Información
                    </span>
                  </p>
                </Row>
                <Row
                  title={
                    <>
                      <span className="lang-en">High school, Computer Science</span>
                      <span className="lang-es">Bachillerato Informática</span>
                    </>
                  }
                  meta={
                    <>
                      <span className="lang-en">2021 — 2024 (completed)</span>
                      <span className="lang-es">2021 — 2024 (finalizado)</span>
                    </>
                  }
                />
              </div>
            </Section>

            <Section title={{ en: "Technologies", es: "Tecnologías" }}>
              <div className="space-y-3">
                {SKILLS.map((group) => (
                  <div key={group.label.en}>
                    <p className="text-sm font-medium">
                      <span className="lang-en">{group.label.en}</span>
                      <span className="lang-es">{group.label.es}</span>
                    </p>
                    <p className="text-sm text-muted">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title={{ en: "Languages", es: "Idiomas" }}>
              <ul className="space-y-1 text-sm">
                {[
                  { en: "Spanish", es: "Español", lvlEn: "Native", lvlEs: "Nativo" },
                  { en: "English", es: "Inglés", lvlEn: "Basic", lvlEs: "Básico" },
                  { en: "Portuguese", es: "Portugués", lvlEn: "Basic", lvlEs: "Básico" },
                ].map((lang) => (
                  <li key={lang.en} className="flex justify-between gap-4">
                    <span>
                      <span className="lang-en">{lang.en}</span>
                      <span className="lang-es">{lang.es}</span>
                    </span>
                    <span className="text-muted">
                      <span className="lang-en">{lang.lvlEn}</span>
                      <span className="lang-es">{lang.lvlEs}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Section>
          </aside>
        </div>
      </main>
    </>
  );
}
