"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";

export interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({ items, className }: MarqueeProps) {
  const displayItems = [...items, ...items, ...items];

  return (
    <div className={cn("overflow-hidden w-full relative py-6 border-y border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-black/40", className)}>
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-12">
            <span className="text-xl md:text-2xl font-black uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-500/80 hover:text-amber-400 transition-colors duration-300">
              {item}
            </span>
            <span className="text-amber-500/40 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
