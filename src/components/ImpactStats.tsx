"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { impactStats } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
    <section className="border-y border-border bg-background py-24 md:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <SectionLabel>Notre engagement</SectionLabel>
          <h2 className="section-heading mt-5 font-serif text-text">
            Une mission claire, une action dédiée.
          </h2>
        </FadeIn>

        <div
          ref={ref}
          className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20"
        >
          {impactStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <div className="border-t border-border pt-8">
                <p className="text-5xl font-medium tracking-tight text-text md:text-6xl lg:text-7xl">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </p>
                <p className="mt-3 font-serif text-2xl text-text">{stat.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
