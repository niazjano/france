"use client";

import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";

export function Stories() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeader
            label="Nos histoires"
            title={
              <>
                Des récits réels,
                <br />
                des vies en mouvement.
              </>
            }
          />
        </FadeIn>

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
          {stories.map((story, index) => {
            const reversed = index % 2 === 1;

            return (
              <FadeIn key={story.title} delay={0.04}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-7">
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.015]"
                      style={{ objectPosition: story.image.objectPosition }}
                    />
                  </div>

                  <div className="lg:col-span-5">
                    <SectionLabel accent>{story.category}</SectionLabel>
                    <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-text md:text-4xl">
                      {story.title}
                    </h3>
                    <p className="body-text mt-5">{story.description}</p>
                    <Link
                      href="#actualites"
                      className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
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
    </Section>
  );
}
