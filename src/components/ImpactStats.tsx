"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { impactStats } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";

function AnimatedNumber({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const element = ref.current;

    if (shouldReduceMotion) {
      element.textContent = `${value.toLocaleString("fr-FR")}${suffix}`;
      return;
    }

    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        element.textContent = `${Math.round(latest).toLocaleString("fr-FR")}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, suffix, value]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}

export function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section variant="muted">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Impact"
            title="Une mission claire, une action dédiée."
          />
        </FadeIn>

        <div
          ref={ref}
          className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10 lg:mt-28"
        >
          {impactStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.06}>
              <div className="surface-divider pt-10">
                <p className="stat-number text-text">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </p>
                <p className="mt-4 font-serif text-2xl text-text">{stat.label}</p>
                <p className="body-text mt-3 text-sm md:text-base">
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
