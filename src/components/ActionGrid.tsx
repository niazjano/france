"use client";

import { ArrowRight } from "lucide-react";
import { actions } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";

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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <FadeIn key={action.number} delay={index * 0.05}>
                <Card hover className="group flex h-full flex-col">
                  <IconCircle icon={Icon} />
                  <h3 className="mt-6 font-serif text-2xl tracking-tight text-text">
                    {action.title}
                  </h3>
                  <p className="body-text mt-4 flex-1">{action.description}</p>
                  <a
                    href="#don"
                    className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
                  >
                    En savoir plus
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
