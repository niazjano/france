import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "surface" | "primary" | "muted" | "footer";
};

const variants = {
  default: "bg-background",
  surface: "bg-surface",
  primary: "bg-primary text-[#F7F4EC]",
  muted: "bg-background dark:bg-primary-dark/40 border-y border-border",
  footer: "bg-primary-dark text-[#F7F4EC]",
};

export function Section({
  children,
  id,
  className,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-space transition-colors duration-500",
        variants[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}
