import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { images } from "@/lib/images";

export function StorySection() {
  const { src, alt, objectPosition } = images.classroomTealWide;

  return (
    <Section variant="surface">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Récit"
            title="Une lumière dans l'obscurité."
          />
        </FadeIn>
      </Container>

      <div className="mt-16 md:mt-24">
        <FadeIn>
          <ImageReveal
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            sizes="100vw"
            wrapperClassName="aspect-[4/3] md:aspect-[21/9]"
            objectPosition={objectPosition}
          />
        </FadeIn>
      </div>

      <Container className="mt-16 md:mt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-5">
            <h3 className="font-serif text-3xl leading-tight tracking-tight text-text md:text-4xl">
              Quand un livre devient un pont vers l&apos;école.
            </h3>
          </FadeIn>

          <FadeIn className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <div className="space-y-6 body-text-lg">
              <p>
                En Afghanistan, des millions d&apos;enfants — et surtout des
                filles — restent privés d&apos;accès à l&apos;éducation formelle.
                Pourtant, la soif d&apos;apprendre ne disparaît pas.
              </p>
              <p>
                Dans des salles modestes, sur des tapis colorés, l&apos;école
                reprend vie grâce à des cahiers, des stylos et des adultes
                engagés. Chaque page écrite est une victoire. Chaque mot lu est
                une porte entrouverte.
              </p>
              <p>
                École Libre existe pour transformer cette urgence en action
                concrète : matériel scolaire, programmes adaptés, formations
                professionnelles et soutien humanitaire au service de
                l&apos;autonomie des jeunes.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
