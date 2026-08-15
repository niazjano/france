"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent" | "white";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark border border-transparent shadow-sm",
  secondary:
    "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/10",
  ghost:
    "bg-transparent text-text border border-border hover:border-primary/25 hover:bg-surface",
  accent:
    "bg-accent text-white hover:brightness-105 border border-transparent shadow-sm",
  white:
    "bg-white text-primary hover:bg-white/92 border border-transparent shadow-sm",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  showArrow = true,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
