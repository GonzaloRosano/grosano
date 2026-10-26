import { EnvelopeSimple, FileText, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { MagneticLink } from "@/components/MagneticLink";
import { STACK } from "@/data/content";

export const EMAIL = "rosanogonzalo@gmail.com";
export const GITHUB_USER = "GonzaloRosano";
export const LINKEDIN_URL = "https://www.linkedin.com/in/gonzalorosano/";

export const linkClassName =
  "flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]";

const sectionClassName = "w-full max-w-4xl border-t border-border px-6 py-16";
const headingClassName = "text-xl font-semibold tracking-tight";

export function AboutSection() {
  return (
    <section id="about" className={sectionClassName}>
      <h2 className={headingClassName}>
        <span className="lang-en">About</span>
        <span className="lang-es">Sobre mí</span>
      </h2>

      <div className="mt-6 grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-muted">
          <p className="lang-en">
            Frontend developer at Quanam, a consulting firm, working on
            projects for clients in different countries. Outside of work I
            build desktop and terminal tools with Rust and Go.
          </p>
          <p className="lang-es">
            Desarrollador frontend en Quanam, una consultora, trabajando en
            proyectos para clientes de distintos países. Fuera del trabajo
            construyo herramientas de escritorio y de terminal con Rust y Go.
          </p>
          <p className="lang-en">
            Over two years of professional experience, after teaching myself
            to code. I care about design systems and about the
            aesthetics of every project. Studying Information Technology
            Analyst at ORT Uruguay.
          </p>
          <p className="lang-es">
            Más de dos años de experiencia profesional, tras formarme como
            autodidacta. Me interesan los design systems y la estética de cada
            proyecto. Estudio Analista en Tecnologías de la Información en ORT
            Uruguay.
          </p>
        </div>

        <dl className="space-y-5">
          {STACK.map((group) => (
            <div key={group.label.en}>
              <dt className="text-sm font-medium">
                <span className="lang-en">{group.label.en}</span>
                <span className="lang-es">{group.label.es}</span>
              </dt>
              <dd className="mt-1 text-sm text-muted">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className={`${sectionClassName} flex min-h-[calc(100dvh-5rem)] flex-col justify-center pb-24`}>
      <h2 className={headingClassName}>
        <span className="lang-en">Let&apos;s talk</span>
        <span className="lang-es">Hablemos</span>
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        <span className="lang-en">
          Open to full-time roles and freelance projects.
        </span>
        <span className="lang-es">
          Abierto a trabajo full-time y proyectos freelance.
        </span>
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <MagneticLink
          href={`mailto:${EMAIL}`}
          ariaLabel="Enviar un email"
          className={linkClassName}
        >
          <EnvelopeSimple size={18} weight="regular" />
          {EMAIL}
        </MagneticLink>
        <MagneticLink
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer noopener"
          ariaLabel="Ver perfil de GitHub"
          className={linkClassName}
        >
          <GithubLogo size={18} weight="regular" />
          GitHub
        </MagneticLink>
        <MagneticLink
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer noopener"
          ariaLabel="Ver perfil de LinkedIn"
          className={linkClassName}
        >
          <LinkedinLogo size={18} weight="regular" />
          LinkedIn
        </MagneticLink>
        <MagneticLink href="/cv" ariaLabel="Ver CV" className={linkClassName}>
          <FileText size={18} weight="regular" />
          CV
        </MagneticLink>
      </div>
    </section>
  );
}
