import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  accent?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  accent = false,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <SectionLabel accent={accent}>{label}</SectionLabel>
      <h2 className="editorial-heading mt-5 font-serif text-text">{title}</h2>
      {description ? (
        <p className="body-text-lg mt-6 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}
