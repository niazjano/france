import { transparencyItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Transparency() {
  return (
    <Section id="transparence">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Transparence"
            title="Chaque euro doit avoir un impact."
            description="En tant qu'association loi 1901, nous nous engageons à une utilisation responsable et traçable des dons. Chaque contribution finance directement des actions éducatives et humanitaires sur le terrain."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3">
          {transparencyItems.map((item, index) => (
            <FadeIn key={item.amount} delay={index * 0.06}>
              <Card hover className="text-center">
                <p className="font-serif text-4xl tracking-tight text-primary dark:text-accent md:text-5xl">
                  {item.amount}
                </p>
                <p className="body-text mt-4">{item.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <p className="body-text mx-auto mt-12 max-w-2xl text-center text-sm">
            Les comptes de l&apos;association sont soumis aux règles de la loi
            1901. Un rapport d&apos;activité détaillé sera publié régulièrement
            pour garantir une transparence totale envers nos donateurs.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
