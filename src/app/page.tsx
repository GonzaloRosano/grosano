import Image from "next/image";
import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { IntroReveal } from "@/components/IntroReveal";
import { MagneticLink } from "@/components/MagneticLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";
import { ScrollCue } from "@/components/ScrollCue";
import { ProjectsSection } from "@/components/ProjectsSection";
import {
  AboutSection,
  ContactSection,
  EMAIL,
  GITHUB_USER,
  linkClassName,
} from "@/components/InfoSections";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ThemeToggle />
      <LangToggle />

      <main className="relative flex min-h-[85dvh] w-full flex-col items-center justify-center overflow-hidden px-6">
        <IntroReveal>
          <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
            <Image
              data-reveal
              src={`https://github.com/${GITHUB_USER}.png`}
              alt="Gonzalo Rosano"
              width={96}
              height={96}
              unoptimized
              priority
              className="h-24 w-24 rounded-full border border-border"
            />

            <h1
              data-reveal
              className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Gonzalo Rosano
            </h1>

            <p data-reveal className="mt-4 text-lg text-foreground sm:text-xl">
              <span className="lang-en">Frontend developer</span>
              <span className="lang-es">Desarrollador frontend</span>
            </p>

            <p
              data-reveal
              className="mt-6 flex items-center gap-2 text-xs text-muted"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="lang-en">Open to full-time and freelance</span>
              <span className="lang-es">Abierto a full-time y freelance</span>
            </p>

            <div data-reveal className="mt-8 flex items-center gap-5">
              <MagneticLink
                href={`mailto:${EMAIL}`}
                ariaLabel="Enviar un email"
                className={linkClassName}
              >
                <EnvelopeSimple size={18} weight="regular" />
                Email
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
            </div>
          </div>
        </IntroReveal>

        <ScrollCue />
      </main>

      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
