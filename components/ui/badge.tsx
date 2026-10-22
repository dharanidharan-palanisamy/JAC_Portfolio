import React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "cyan" | "outline" | "success" | "warning";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-black/10 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10",
    gold: "bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/20 dark:border-white/20",
    cyan: "bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/20 dark:border-white/20",
    outline: "bg-transparent text-zinc-600 dark:text-zinc-400 border border-white/15",
    success: "bg-black/10 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10",
    warning: "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] tracking-widest uppercase font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
