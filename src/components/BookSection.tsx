import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Section } from "@/components/ui/Section";
import { images } from "@/lib/images";

export function BookSection() {
  const { src, alt, objectPosition } = images.roadSafetyBooks;

  return (
    <Section variant="surface">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-6">
            <div className="relative">
              <ImageReveal
                src={src}
                alt={alt}
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                wrapperClassName="aspect-[4/3] rounded-2xl"
                objectPosition={objectPosition}
              />
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-border bg-background px-5 py-4 shadow-[var(--shadow-soft)] md:block">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Projet éducatif
                </p>
                <p className="mt-1 font-serif text-lg text-text">
                  Code de la route
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5 lg:col-start-8" delay={0.08}>
            <SectionHeader
              label="Initiative"
              title={
                <>
                  Un livre, une chance&nbsp;:
                  <br />
                  le code de la route au service de l&apos;éducation.
                </>
              }
              accent
            />

            <div className="mt-8 space-y-6 body-text-lg">
              <p>
                Nous développons un ouvrage pédagogique autour du code de la
                route, conçu pour sensibiliser les jeunes tout en soutenant
                l&apos;accès à l&apos;éducation.
              </p>
              <p>
                Au-delà de la sécurité routière, ce livre devient un outil
                d&apos;apprentissage : lecture, réflexion, responsabilité. Une
                ressource concrète qui allie utilité quotidienne et mission
                éducative.
              </p>
            </div>

            <div className="mt-10">
              <Button href="#don" variant="ghost">
                Soutenir ce projet
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
