"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";

const raised = 1200;
const goal = 2000;
const percentage = Math.round((raised / goal) * 100);

export function ImpactProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="impact" variant="muted">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Impact"
            title="Votre soutien ouvre une salle de classe."
            accent
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div ref={ref} className="card-soft mx-auto mt-16 max-w-2xl p-8 md:p-12">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="stat-number text-text">{raised.toLocaleString("fr-FR")} €</p>
                <p className="mt-2 text-sm text-muted">collectés</p>
              </div>
              <div className="text-right">
                <p className="stat-number text-text/35">{goal.toLocaleString("fr-FR")} €</p>
                <p className="mt-2 text-sm text-muted">objectif</p>
              </div>
            </div>

            <div className="mt-10 h-1 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: isInView ? `${percentage}%` : "0%" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <div className="mt-5 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-accent">{percentage}% financé</span>
              <span className="text-muted">Projet salle de classe — Afghanistan</span>
            </div>

            <div className="mt-10 flex justify-center">
              <Button href="#don">Contribuer au projet</Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
