import React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wider uppercase";

    const variants = {
      primary:
        "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98]",
      secondary:
        "bg-black/10 dark:bg-white/10 text-zinc-900 dark:text-white border border-white/15 hover:bg-white/15 hover:border-white/25 active:scale-[0.98]",
      outline:
        "bg-transparent text-zinc-900 dark:text-white border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]",
      ghost:
        "bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:text-white hover:bg-black/5 dark:bg-white/5 active:scale-[0.98]",
      danger:
        "bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30 active:scale-[0.98]",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 rounded-sm gap-1.5",
      md: "text-xs px-5 py-2.5 rounded-sm gap-2",
      lg: "text-sm px-7 py-3.5 rounded-sm gap-2.5",
      icon: "p-2 rounded-sm",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
