import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface StatsCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon: LucideIcon;
  variant?: "default" | "gold" | "cyan" | "emerald";
}

export function StatsCard({
  label,
  value,
  subtext,
  icon: Icon,
  variant = "default",
}: StatsCardProps) {
  const iconColors = {
    default: "text-zinc-600 dark:text-zinc-400 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10",
    gold: "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-white/10 border-black/20 dark:border-white/20",
    cyan: "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-white/10 border-black/20 dark:border-white/20",
    emerald: "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-white/10 border-black/20 dark:border-white/20",
  };

  return (
    <div className="p-6 rounded-sm bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 dark:text-zinc-400">
          {label}
        </span>
        <div className={cn("p-2 rounded-sm border", iconColors[variant])}>
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div>
        <p className="text-3xl font-black font-mono text-zinc-900 dark:text-white tracking-tight">
          {value}
        </p>
        {subtext && (
          <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-500 mt-1">{subtext}</p>
        )}
      </div>
    </div>
  );
}
