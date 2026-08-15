"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { actions } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ActionGrid() {
  return (
    <section id="actions" className="bg-surface py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="max-w-3xl">
          <SectionLabel>Nos actions</SectionLabel>
          <h2 className="editorial-heading mt-5 font-serif text-text">
            Ce que nous faisons.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Des programmes éducatifs et humanitaires pensés pour répondre aux
            besoins réels des enfants et des jeunes en Afghanistan.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {actions.map((action, index) => (
            <FadeIn key={action.number} delay={index * 0.05}>
              <motion.article
                className="group relative flex h-full flex-col bg-surface"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={action.image.src}
                    alt={action.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    style={{ objectPosition: action.image.objectPosition }}
                  />
                </div>

                <div className="flex flex-1 flex-col border border-border border-t-0 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-medium text-accent">
                      {action.number}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-4 font-serif text-2xl tracking-tight text-text transition-transform duration-500 group-hover:translate-x-1">
                    {action.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                    {action.description}
                  </p>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
