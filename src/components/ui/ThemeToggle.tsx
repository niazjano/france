"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  variant?: "default" | "hero" | "menu";
};

export function ThemeToggle({
  className,
  variant = "default",
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const styles = {
    default:
      "border-border text-text hover:bg-surface hover:border-primary/20",
    hero: "border-white/20 text-white hover:bg-white/10",
    menu: "border-border text-text hover:bg-background",
  };

  if (resolvedTheme === undefined) {
    return (
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        styles[variant],
        className,
      )}
      aria-label={
        isDark ? "Activer le mode clair" : "Activer le mode sombre"
      }
    >
      {isDark ? (
        <Moon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} />
      ) : (
        <Sun className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} />
      )}
    </button>
  );
}
