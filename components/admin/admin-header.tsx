import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AdminHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/10 dark:border-white/10 gap-4">
      <div>
        <h1 className="text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-mono">{description}</p>
        )}
      </div>

      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}
