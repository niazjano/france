import { transparencyItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";

export function Transparency() {
  return (
    <Section id="transparence" variant="surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-5">
            <SectionHeader
              label="Transparence"
              title="Chaque euro doit avoir un impact."
            />
            <p className="body-text-lg mt-8">
              En tant qu&apos;association loi 1901, nous nous engageons à une
              utilisation responsable et traçable des dons. Chaque contribution
              finance directement des actions éducatives et humanitaires sur le
              terrain.
            </p>
          </FadeIn>

          <FadeIn className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <div className="divide-y divide-border border-y border-border">
              {transparencyItems.map((item) => (
                <div
                  key={item.amount}
                  className="flex items-start justify-between gap-8 py-7 md:py-9"
                >
                  <p className="text-3xl font-medium tracking-tight text-primary md:text-4xl">
                    {item.amount}
                  </p>
                  <p className="max-w-xs pt-1 text-right body-text">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="body-text mt-10 text-sm">
              Les comptes de l&apos;association sont soumis aux règles de la
              loi 1901. Un rapport d&apos;activité détaillé sera publié
              régulièrement pour garantir une transparence totale envers nos
              donateurs.
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
