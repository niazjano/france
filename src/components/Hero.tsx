import { heroVideo } from "@/lib/videos";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HeroVideoBackground } from "@/components/HeroVideoBackground";

export function Hero() {
  const { src, poster, type } = heroVideo;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <HeroVideoBackground src={src} poster={poster} type={type} />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-28 pt-36 md:pb-32 md:pt-40">
        <div className="max-w-4xl">
          <SectionLabel className="hero-text-shadow mb-8 text-accent">
            Éducation • Afghanistan
          </SectionLabel>

          <h1 className="hero-heading hero-text-shadow font-serif text-white">
            L&apos;éducation
            <br />
            ne peut pas
            <br />
            attendre.
          </h1>

          <p className="hero-text-shadow mt-10 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Nous ouvrons des portes vers l&apos;éducation pour les enfants qui
            en ont le plus besoin.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#don" variant="gold">
              Faire un don
            </Button>
            <Button href="#mission" variant="secondary">
              Découvrir notre mission
            </Button>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden="true"
        >
          <div className="hero-text-shadow flex flex-col items-center gap-3">
            <span className="text-[0.625rem] uppercase tracking-[0.24em] text-white/55">
              Défiler
            </span>
            <div className="h-12 w-px bg-white/40" />
          </div>
        </div>
      </Container>
    </section>
  );
}
