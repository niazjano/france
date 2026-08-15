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
    const onScroll = () => setScrolled(window.scrollY > 48);
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
            ? "border-b border-border/70 bg-surface/88 shadow-[var(--shadow-nav)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav
          className="container-shell flex items-center justify-between py-4 md:py-5"
          aria-label="Navigation principale"
        >
          <Link
            href="/"
            className={cn(
              "font-serif text-xl tracking-tight transition-opacity hover:opacity-75",
              scrolled ? "text-text" : "text-white",
            )}
          >
            École Libre
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "link-underline text-sm transition-colors",
                  scrolled
                    ? "text-muted hover:text-text"
                    : "text-white/80 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              href="#don"
              variant={scrolled ? "accent" : "accent"}
              showArrow={false}
              size="sm"
            >
              Faire un don
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-lg border p-2.5 transition-colors lg:hidden",
              scrolled
                ? "border-border text-text hover:bg-background"
                : "border-white/25 text-white hover:bg-white/10",
            )}
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
            className="fixed inset-0 z-40 bg-background lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex h-full flex-col justify-between px-6 pb-10 pt-28"
              initial={shouldReduceMotion ? false : { y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.45 }}
                  >
                    <Link
                      href={link.href}
                      className="block font-serif text-3xl tracking-tight text-text"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                href="#don"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-4 text-sm font-medium text-white transition-all duration-500 hover:brightness-110"
                onClick={() => setMenuOpen(false)}
              >
                Faire un don
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
