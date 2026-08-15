import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

export function SectionLabel({
  children,
  className,
  accent = true,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-medium uppercase tracking-[0.24em]",
        accent ? "text-accent" : "text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
