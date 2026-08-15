import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { images } from "@/lib/images";

export function BookSection() {
  return (
    <section className="overflow-hidden bg-surface py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-6">
            <div className="relative">
              <ImageReveal
                src={images.classroomGroup}
                alt="Enfants en classe utilisant des cahiers et du matériel éducatif"
                width={800}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 50vw"
                wrapperClassName="aspect-[4/5] rounded-sm shadow-[0_24px_80px_-40px_rgba(8,99,154,0.35)]"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-sm border border-border bg-background px-5 py-4 md:block">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Projet éducatif
                </p>
                <p className="mt-1 font-serif text-lg text-text">
                  Code de la route
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <SectionLabel accent>Initiative</SectionLabel>
            <h2 className="section-heading mt-5 font-serif text-text">
              Un livre, une chance&nbsp;:
              <br />
              le code de la route au service de l&apos;éducation.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
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

            <div className="mt-8">
              <Button href="#don" variant="ghost">
                Soutenir ce projet
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
