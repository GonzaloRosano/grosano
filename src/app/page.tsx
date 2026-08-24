import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { IntroReveal } from "@/components/IntroReveal";
import { MagneticLink } from "@/components/MagneticLink";
import { ThemeToggle } from "@/components/ThemeToggle";

const EMAIL = "rosanogonzalo@gmail.com";
const GITHUB_USER = "GonzaloRosano";

const linkClassName =
  "flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ThemeToggle />

      <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-6">
        <IntroReveal>
          <div className="relative z-10 flex flex-col items-center text-center">
            <img
              data-reveal
              src={`https://github.com/${GITHUB_USER}.png`}
              alt="Gonzalo Rosano"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full border border-border"
            />

            <h1
              data-reveal
              className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Gonzalo Rosano
            </h1>

            <p data-reveal className="mt-3 text-base text-muted sm:text-lg">
              Software Developer
            </p>

            <div data-reveal className="mt-10 flex items-center gap-5">
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
      </main>
    </div>
  );
}
