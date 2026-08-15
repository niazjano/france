import Image from "next/image";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const { src, alt, objectPosition } = images.hero;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-primary-dark">
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-24 pt-32 md:pb-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="mb-6 text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-white/70">
            Éducation • Afghanistan
          </p>

          <h1 className="hero-heading font-serif text-white">
            L&apos;éducation
            <br />
            ne peut pas
            <br />
            attendre.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Nous ouvrons des portes vers l&apos;éducation pour les enfants qui
            en ont le plus besoin.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#don" variant="accent">
              Faire un don
            </Button>
            <Button href="#mission" variant="secondary">
              Découvrir notre mission
            </Button>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[0.625rem] uppercase tracking-[0.24em] text-white/50">
              Défiler
            </span>
            <div className="h-10 w-px animate-pulse bg-white/40" />
          </div>
        </div>
      </Container>
    </section>
  );
}
