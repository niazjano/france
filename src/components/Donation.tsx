import { donationTiers } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Donation() {
  return (
    <Section id="don" variant="primary">
      <Container>
        <FadeIn className="max-w-3xl">
          <SectionLabel className="text-white/55">Soutenir</SectionLabel>
          <h2 className="editorial-heading mt-5 font-serif text-white">
            Devenez donateur
            <br />
            mensuel.
          </h2>
          <p className="mt-5 text-xl text-white/85 md:text-2xl">
            Changez une vie chaque mois.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Nous cherchons des donateurs actifs et engagés prêts à soutenir
            l&apos;éducation des enfants défavorisés en Afghanistan.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {donationTiers.map((tier, index) => (
            <FadeIn key={tier.amount} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-xl border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/[0.1] md:p-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-medium tracking-tight md:text-5xl">
                    {tier.amount}
                  </span>
                  <span className="text-white/55">{tier.period}</span>
                </div>
                <p className="mt-6 flex-1 text-base leading-relaxed text-white/75">
                  {tier.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="mailto:contact@ecolelibre.org?subject=Donateur%20mensuel" variant="accent">
              Je deviens donateur mensuel
            </Button>
            <Button href="mailto:contact@ecolelibre.org" variant="secondary">
              Nous contacter
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
