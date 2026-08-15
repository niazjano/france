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
          <SectionLabel>Soutenir École Libre</SectionLabel>
          <h2 className="editorial-heading mt-5 font-serif text-[#F7F4EC]">
            Changez une vie
            <br />
            chaque mois.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#F7F4EC]/75 md:text-lg">
            Nous cherchons des donateurs actifs et engagés prêts à soutenir
            l&apos;éducation des enfants défavorisés en Afghanistan.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3">
          {donationTiers.map((tier, index) => (
            <FadeIn key={tier.amount} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-[#F7F4EC]/12 bg-[#F7F4EC]/[0.06] p-8 backdrop-blur-sm transition-all duration-500 hover:bg-[#F7F4EC]/[0.1] md:p-10">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl tracking-tight text-[#F7F4EC] md:text-4xl">
                    {tier.amount}
                  </span>
                  {tier.period ? (
                    <span className="text-[#F7F4EC]/55">{tier.period}</span>
                  ) : null}
                </div>
                <p className="mt-6 flex-1 text-base leading-relaxed text-[#F7F4EC]/75">
                  {tier.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="mailto:contact@ecolelibre.org?subject=Donateur%20mensuel"
              variant="gold"
            >
              Faire un don
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
