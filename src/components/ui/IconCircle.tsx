import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconCircleProps = {
  icon: LucideIcon;
  className?: string;
};

export function IconCircle({ icon: Icon, className }: IconCircleProps) {
  return (
    <div className={cn("icon-circle", className)}>
      <Icon className="h-5 w-5" strokeWidth={1.5} />
    </div>
  );
}
