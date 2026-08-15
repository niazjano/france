"use client";

import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Stories() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="max-w-3xl">
          <SectionLabel>Terrain</SectionLabel>
          <h2 className="editorial-heading mt-5 font-serif text-text">
            Des récits réels,
            <br />
            des vies en mouvement.
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {stories.map((story, index) => {
            const reversed = index % 2 === 1;

            return (
              <FadeIn key={story.title} delay={0.05}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7">
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                      style={{ objectPosition: story.image.objectPosition }}
                    />
                  </div>

                  <div className="lg:col-span-5">
                    <SectionLabel accent>{story.category}</SectionLabel>
                    <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-text md:text-4xl">
                      {story.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-muted">
                      {story.description}
                    </p>
                    <Link
                      href="#actualites"
                      className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                    >
                      Lire l&apos;histoire →
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
