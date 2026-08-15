import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { images } from "@/lib/images";

export function Mission() {
  const { src, alt, objectPosition } = images.literacyWriting;

  return (
    <section id="mission" className="bg-background py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-6">
            <SectionLabel>Notre mission</SectionLabel>
            <h2 className="editorial-heading mt-5 font-serif text-text">
              Donner à chaque enfant
              <br />
              la possibilité d&apos;apprendre.
            </h2>
          </FadeIn>

          <FadeIn className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                École Libre facilite l&apos;accès à l&apos;éducation des enfants
                défavorisés en Afghanistan. Nous développons des programmes
                éducatifs et des formations adaptées aux réalités du terrain.
              </p>
              <p>
                Notre action combine matériel scolaire, soutien humanitaire et
                apprentissage de compétences pour favoriser l&apos;insertion
                sociale et l&apos;autonomie des jeunes.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-16 md:mt-24" delay={0.15}>
          <ImageReveal
            src={src}
            alt={alt}
            width={1320}
            height={760}
            sizes="(max-width: 768px) 100vw, 1320px"
            wrapperClassName="aspect-[4/3] md:aspect-[21/9] rounded-sm"
            objectPosition={objectPosition}
          />
        </FadeIn>
      </Container>
    </section>
  );
}
