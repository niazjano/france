"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-b border-white/10 bg-primary-dark/85 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav
          className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 md:px-8 lg:px-10"
          aria-label="Navigation principale"
        >
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-white transition-opacity hover:opacity-80"
          >
            École Libre
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="#don" variant="accent" showArrow={false}>
              Faire un don
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2.5 text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-primary-dark lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24">
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="block font-serif text-3xl text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                href="#don"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:brightness-110"
                onClick={() => setMenuOpen(false)}
              >
                Faire un don
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
