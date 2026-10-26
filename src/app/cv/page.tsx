import type { Metadata } from "next";
import { DownloadSimple, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { BackLink } from "@/components/BackLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";
import { EMAIL } from "@/components/InfoSections";

export const metadata: Metadata = {
  title: "CV · Gonzalo Rosano",
  description: "Curriculum de Gonzalo Rosano, desarrollador frontend.",
};

const TECHNOLOGIES = [
  "React",
  "Angular",
  "Astro",
  "PayloadCMS",
  "Next.js",
  "Three.js",
  "View Transitions API",
];

const headingClassName =
  "text-xs font-semibold uppercase tracking-widest text-muted";

function Section({
  title,
  children,
}: {
  title: { en: string; es: string };
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-border pt-6 break-inside-avoid print:mt-5 print:pt-4">
      <h2 className={headingClassName}>
        <span className="lang-en">{title.en}</span>
        <span className="lang-es">{title.es}</span>
      </h2>
      <div className="mt-4 print:mt-2">{children}</div>
    </section>
  );
}

export default function CvPage() {
  return (
    <>
      <div className="no-print">
        <ThemeToggle />
        <LangToggle />
      </div>

      <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-16 print:py-0">
        <div className="no-print">
          <BackLink />
        </div>

        <header className="mt-10 flex flex-col gap-2 print:mt-0">
          <h1 className="text-4xl font-semibold tracking-tight">
            Gonzalo Rosano
          </h1>
          <p className="text-lg text-muted">
            <span className="lang-en">
              Information Technology Analyst student
            </span>
            <span className="lang-es">
              Estudiante de Analista en Tecnologías de la Información
            </span>
          </p>

          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-1.5">
              <MapPin size={16} />
              Montevideo, Uruguay
            </li>
            <li className="flex items-center gap-1.5">
              <EnvelopeSimple size={16} />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent">
                {EMAIL}
              </a>
            </li>
          </ul>

          <div className="no-print mt-4">
            <a
              href="/CV_Gonzalo_Rosano.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
            >
              <DownloadSimple size={16} />
              <span className="lang-en">Download PDF</span>
              <span className="lang-es">Descargar PDF</span>
            </a>
          </div>
        </header>

        <Section title={{ en: "Profile", es: "Perfil" }}>
          <p className="lang-en leading-relaxed">
            Frontend developer with more than 3 years of self-taught learning in
            tech, currently studying Information Technology Analyst at ORT
            Uruguay. Quick learner, proactive and a strong team player, I want to
            keep growing in the tech world beyond the developer role. I have a
            particular interest in design systems and in caring about the
            aesthetics of every piece of work, combining functionality with a
            polished user experience.
          </p>
          <p className="lang-es leading-relaxed">
            Desarrollador frontend con más de 3 años de aprendizaje autodidacta
            en tecnología, actualmente cursando Analista en Tecnologías de la
            Información en ORT Uruguay. Rápido para aprender, proactivo y con
            buena capacidad de trabajo en equipo, busco seguir creciendo en el
            mundo tech más allá del rol de developer. Tengo especial interés en
            los sistemas de diseño y en cuidar la estética de cada trabajo,
            combinando funcionalidad con una experiencia de usuario prolija.
          </p>
        </Section>

        <Section title={{ en: "Experience", es: "Experiencia profesional" }}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-medium">Quanam</h3>
            <span className="text-sm text-muted">
              <span className="lang-en">Apr 2024 — present</span>
              <span className="lang-es">abr. 2024 — actualidad</span>
            </span>
          </div>
          <p className="text-sm text-muted">Junior Developer</p>
          <p className="lang-en mt-2 leading-relaxed">
            Frontend development with React, PayloadCMS, Angular and Next.js.
            Took part in migrations between versions of different frameworks.
          </p>
          <p className="lang-es mt-2 leading-relaxed">
            Desarrollo frontend con React, PayloadCMS, Angular y Next.js.
            Participación en migraciones entre versiones de distintos
            frameworks.
          </p>
        </Section>

        <Section title={{ en: "Education", es: "Formación" }}>
          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium">ORT Uruguay</h3>
                <span className="text-sm text-muted">
                  <span className="lang-en">2024 — present</span>
                  <span className="lang-es">2024 — actualidad</span>
                </span>
              </div>
              <p className="text-sm text-muted">
                <span className="lang-en">Information Technology Analyst</span>
                <span className="lang-es">
                  Analista en Tecnologías de la Información
                </span>
              </p>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium">
                  <span className="lang-en">High school, Computer Science</span>
                  <span className="lang-es">Bachillerato Informática</span>
                </h3>
                <span className="text-sm text-muted">
                  <span className="lang-en">2021 — 2024 (completed)</span>
                  <span className="lang-es">2021 — 2024 (finalizado)</span>
                </span>
              </div>
            </div>
          </div>
        </Section>

        <Section title={{ en: "Languages", es: "Idiomas" }}>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-between gap-4 sm:max-w-xs">
              <span className="lang-en">Spanish</span>
              <span className="lang-es">Español</span>
              <span className="text-muted">
                <span className="lang-en">Native</span>
                <span className="lang-es">Nativo</span>
              </span>
            </li>
            <li className="flex justify-between gap-4 sm:max-w-xs">
              <span className="lang-en">English</span>
              <span className="lang-es">Inglés</span>
              <span className="text-muted">
                <span className="lang-en">Basic</span>
                <span className="lang-es">Básico</span>
              </span>
            </li>
            <li className="flex justify-between gap-4 sm:max-w-xs">
              <span className="lang-en">Portuguese</span>
              <span className="lang-es">Portugués</span>
              <span className="text-muted">
                <span className="lang-en">Basic</span>
                <span className="lang-es">Básico</span>
              </span>
            </li>
          </ul>
        </Section>

        <Section title={{ en: "Key technologies", es: "Tecnologías clave" }}>
          <ul className="flex flex-wrap gap-2">
            {TECHNOLOGIES.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Section>
      </main>
    </>
  );
}
