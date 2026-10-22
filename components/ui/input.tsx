import React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs uppercase tracking-wider font-medium text-zinc-600 dark:text-zinc-400">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full bg-zinc-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-sm px-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 transition-colors duration-200 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 disabled:opacity-50",
            error && "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/50",
            className
          )}
          {...props}
        />
        {helperText && !error && <p className="text-xs text-zinc-500 dark:text-zinc-500">{helperText}</p>}
        {error && <p className="text-xs text-rose-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs uppercase tracking-wider font-medium text-zinc-600 dark:text-zinc-400">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={cn(
            "w-full bg-zinc-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-sm px-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 transition-colors duration-200 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 disabled:opacity-50 resize-y",
            error && "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/50",
            className
          )}
          {...props}
        />
        {helperText && !error && <p className="text-xs text-zinc-500 dark:text-zinc-500">{helperText}</p>}
        {error && <p className="text-xs text-rose-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
