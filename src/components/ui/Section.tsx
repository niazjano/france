import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "surface" | "primary" | "muted";
};

const variants = {
  default: "bg-background",
  surface: "bg-surface",
  primary: "bg-primary text-white",
  muted: "bg-background border-y border-border",
};

export function Section({
  children,
  id,
  className,
  variant = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-space", variants[variant], className)}>
      {children}
    </section>
  );
}
