import { transparencyItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Transparency() {
  return (
    <section id="transparence" className="bg-surface py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <SectionLabel>Transparence</SectionLabel>
            <h2 className="editorial-heading mt-5 font-serif text-text">
              Chaque euro doit avoir un impact.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              En tant qu&apos;association loi 1901, nous nous engageons à une
              utilisation responsable et traçable des dons. Chaque contribution
              finance directement des actions éducatives et humanitaires sur le
              terrain.
            </p>
          </FadeIn>

          <FadeIn className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="divide-y divide-border border-y border-border">
              {transparencyItems.map((item) => (
                <div
                  key={item.amount}
                  className="flex items-start justify-between gap-6 py-6 md:py-8"
                >
                  <p className="text-3xl font-medium tracking-tight text-primary md:text-4xl">
                    {item.amount}
                  </p>
                  <p className="max-w-xs pt-1 text-right text-sm leading-relaxed text-muted md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted">
              Les comptes de l&apos;association sont soumis aux règles de la
              loi 1901. Un rapport d&apos;activité détaillé sera publié
              régulièrement pour garantir une transparence totale envers nos
              donateurs.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
