import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { images } from "@/lib/images";

export function StorySection() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="max-w-3xl">
          <SectionLabel>Récit</SectionLabel>
          <h2 className="editorial-heading mt-5 font-serif text-text">
            Une lumière dans l&apos;obscurité.
          </h2>
        </FadeIn>
      </Container>

      <div className="mt-14 md:mt-20">
        <FadeIn>
          <ImageReveal
            src={images.classroomWide}
            alt="Salle de classe avec de nombreux enfants assis au sol, absorbés par leur travail"
            width={1920}
            height={1080}
            sizes="100vw"
            wrapperClassName="aspect-[4/3] md:aspect-[21/9]"
          />
        </FadeIn>
      </div>

      <Container className="mt-14 md:mt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-5">
            <h3 className="font-serif text-3xl leading-tight tracking-tight text-text md:text-4xl">
              Quand un livre devient un pont vers l&apos;école.
            </h3>
          </FadeIn>

          <FadeIn className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
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
    </section>
  );
}
