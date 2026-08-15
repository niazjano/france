import { donationTiers } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function Donation() {
  return (
    <section id="don" className="bg-primary py-24 text-white md:py-32 lg:py-40">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-white/60">
            Soutien mensuel
          </p>
          <h2 className="editorial-heading mt-5 font-serif text-white">
            Devenez donateur
            <br />
            mensuel.
          </h2>
          <p className="mt-5 text-xl text-white/80 md:text-2xl">
            Changez une vie chaque mois.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Nous cherchons des donateurs actifs et engagés prêts à soutenir
            l&apos;éducation des enfants défavorisés en Afghanistan.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20">
          {donationTiers.map((tier, index) => (
            <FadeIn key={tier.amount} delay={index * 0.08}>
              <div className="flex h-full flex-col border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/10 md:p-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-medium tracking-tight md:text-5xl">
                    {tier.amount}
                  </span>
                  <span className="text-white/60">{tier.period}</span>
                </div>
                <p className="mt-6 flex-1 text-base leading-relaxed text-white/75">
                  {tier.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="mailto:contact@ecolelibre.org?subject=Donateur%20mensuel" variant="accent">
              Je deviens donateur mensuel
            </Button>
            <Button
              href="mailto:contact@ecolelibre.org"
              variant="secondary"
            >
              Nous contacter
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
