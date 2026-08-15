import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  elevated?: boolean;
};

export function Card({
  children,
  className,
  hover = false,
  elevated = false,
}: CardProps) {
  return (
    <div
      className={cn(
        elevated ? "card-elevated" : "card-soft",
        "p-8 md:p-10",
        hover &&
          "hover:-translate-y-0.5 hover:shadow-[var(--shadow-medium)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
