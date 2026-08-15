"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const raised = 1200;
const goal = 2000;
const percentage = Math.round((raised / goal) * 100);

export function ImpactProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="impact" className="border-y border-border bg-surface py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel accent>Impact en cours</SectionLabel>
            <h2 className="section-heading mt-5 font-serif text-text">
              Votre soutien ouvre une salle de classe.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            ref={ref}
            className="mx-auto mt-14 max-w-2xl rounded-sm border border-border bg-background p-8 md:p-10"
          >
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-4xl font-medium tracking-tight text-text md:text-5xl">
                  {raised.toLocaleString("fr-FR")} €
                </p>
                <p className="mt-1 text-sm text-muted">collectés</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-medium tracking-tight text-text/40 md:text-5xl">
                  {goal.toLocaleString("fr-FR")} €
                </p>
                <p className="mt-1 text-sm text-muted">objectif</p>
              </div>
            </div>

            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: isInView ? `${percentage}%` : "0%" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="font-medium text-primary">{percentage}% financé</span>
              <span className="text-muted">Projet salle de classe — Afghanistan</span>
            </div>

            <div className="mt-8 flex justify-center">
              <Button href="#don">Contribuer au projet</Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
