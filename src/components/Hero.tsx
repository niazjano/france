import Image from "next/image";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2418]/70 via-[#123F2A]/45 to-[#0B2418]/85" />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-28 pt-36 md:pb-32 md:pt-40">
        <div className="max-w-4xl">
          <SectionLabel className="mb-8 text-accent">
            Éducation • Afghanistan
          </SectionLabel>

          <h1 className="hero-heading font-serif text-[#F7F4EC]">
            L&apos;éducation
            <br />
            ne peut pas
            <br />
            attendre.
          </h1>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-[#F7F4EC]/80 md:text-lg">
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
          <div className="flex flex-col items-center gap-3">
            <span className="text-[0.625rem] uppercase tracking-[0.24em] text-[#F7F4EC]/45">
              Défiler
            </span>
            <div className="h-12 w-px bg-[#F7F4EC]/30" />
          </div>
        </div>
      </Container>
    </section>
  );
}
