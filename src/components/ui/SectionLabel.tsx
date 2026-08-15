import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

export function SectionLabel({
  children,
  className,
  accent = false,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-medium uppercase tracking-[0.22em]",
        accent ? "text-accent" : "text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
