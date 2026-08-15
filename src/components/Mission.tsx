import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { images } from "@/lib/images";

export function Mission() {
  const { src, alt, objectPosition } = images.literacyWriting;

  return (
    <Section id="mission">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-6">
            <SectionHeader
              label="Notre mission"
              title={
                <>
                  Donner à chaque enfant
                  <br />
                  la possibilité d&apos;apprendre.
                </>
              }
            />
          </FadeIn>

          <FadeIn className="lg:col-span-5 lg:col-start-8" delay={0.08}>
            <div className="space-y-6 body-text-lg">
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

        <FadeIn className="mt-20 md:mt-28" delay={0.12}>
          <ImageReveal
            src={src}
            alt={alt}
            width={1320}
            height={760}
            sizes="(max-width: 768px) 100vw, 1320px"
            wrapperClassName="aspect-[4/3] md:aspect-[21/9] rounded-lg"
            objectPosition={objectPosition}
          />
        </FadeIn>
      </Container>
    </Section>
  );
}
