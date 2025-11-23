"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  icon?: LucideIcon;
  className?: string;
  align?: "center" | "left" | "responsive";
  description?: string;
}

export function SectionHeader({
  title,
  icon: Icon,
  className,
  align = "center",
  description,
}: SectionHeaderProps) {
  const alignmentClass =
    align === "center"
      ? "items-center text-center"
      : align === "left"
      ? "items-start text-left"
      : "items-center md:items-start text-center md:text-left";

  const justifyClass =
    align === "center"
      ? "justify-center"
      : align === "left"
      ? "justify-start"
      : "justify-center md:justify-start";

  const flexColClass =
    align === "center"
      ? "items-center"
      : align === "left"
      ? "items-start"
      : "items-center md:items-start";

  return (
    <div className={cn("mb-12 md:mb-16", alignmentClass, className)}>
      <div className={cn("flex items-center gap-3 mb-4", justifyClass)}>
        {Icon && (
          <Icon className="w-6 h-6 md:w-8 md:h-8 gradient-text-primary shrink-0" />
        )}
        <div className={cn("flex flex-col", flexColClass)}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-primary">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full glow-primary mt-2" />
        </div>
      </div>
      {description && (
        <p
          className={cn(
            "text-sm md:text-base text-muted-foreground max-w-2xl",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
