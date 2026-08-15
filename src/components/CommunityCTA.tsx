import Image from "next/image";
import { images } from "@/lib/images";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CommunityCTA() {
  const { src, alt, objectPosition } = images.communityClassroom;

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="grid lg:grid-cols-2">
        <FadeIn className="flex items-center px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <div className="max-w-xl">
            <h2 className="editorial-heading font-serif text-text">
              Nous avons besoin de personnes engagées,
              <br />
              pas seulement de spectateurs.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Donner, partager, parler autour de soi : il existe mille façons
              d&apos;agir. Rejoignez une communauté qui croit que l&apos;éducation
              ne peut pas attendre.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#don" variant="primary">
                Je fais un don
              </Button>
              <Button href="#mission" variant="ghost">
                En savoir plus
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative min-h-[420px] lg:min-h-[560px]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </FadeIn>
      </div>
    </section>
  );
}
