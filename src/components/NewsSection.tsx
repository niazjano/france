import { newsItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function NewsSection() {
  return (
    <section id="actualites" className="bg-surface py-24 md:py-32">
      <Container>
        <FadeIn className="max-w-3xl">
          <SectionLabel>Actualités</SectionLabel>
          <h2 className="section-heading mt-5 font-serif text-text">
            Les dernières nouvelles de l&apos;association.
          </h2>
        </FadeIn>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {newsItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="grid gap-4 py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10">
                <p className="text-sm text-muted md:col-span-2">{item.date}</p>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-2xl tracking-tight text-text md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
