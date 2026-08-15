"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { actions } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";

export function ActionGrid() {
  return (
    <Section id="actions" variant="surface">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Nos actions"
            title="Ce que nous faisons."
            description="Des programmes éducatifs et humanitaires pensés pour répondre aux besoins réels des enfants et des jeunes en Afghanistan."
          />
        </FadeIn>

        <div className="mt-20 space-y-0">
          {actions.map((action, index) => {
            const reversed = index % 2 === 1;

            return (
              <FadeIn key={action.number} delay={index * 0.04}>
                <article
                  className={cn(
                    "group grid items-center gap-8 border-t border-border py-12 md:grid-cols-12 md:gap-12 md:py-16 lg:gap-16",
                    reversed && "md:[&>*:first-child]:order-2",
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-5">
                    <Image
                      src={action.image.src}
                      alt={action.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                      style={{ objectPosition: action.image.objectPosition }}
                    />
                  </div>

                  <div className="md:col-span-6 md:col-start-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium tracking-wide text-accent">
                        {action.number}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl tracking-tight text-text md:text-3xl">
                      {action.title}
                    </h3>
                    <p className="body-text mt-4 max-w-lg">{action.description}</p>
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
