import { newsItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";

export function NewsSection() {
  return (
    <Section id="actualites" variant="surface">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Actualités"
            title="Les dernières nouvelles de l'association."
          />
        </FadeIn>

        <div className="mt-16 divide-y divide-border border-y border-border md:mt-20">
          {newsItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="grid gap-4 py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10">
                <p className="text-sm text-muted md:col-span-2">{item.date}</p>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-2xl tracking-tight text-text md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="body-text mt-4 max-w-3xl">{item.excerpt}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
