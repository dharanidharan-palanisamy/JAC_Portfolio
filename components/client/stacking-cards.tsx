"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Award, Film, Sparkles } from "lucide-react";
import { ProjectWithCategory } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface StackingCardsProps {
  projects: ProjectWithCategory[];
}

export function StackingCards({ projects }: StackingCardsProps) {
  // Monochrome styling for stacked cards
  const cardAccents = [
    { border: "hover:border-zinc-400 dark:hover:border-zinc-600", glow: "from-white/5", tag: "default" as const, dot: "bg-zinc-900 dark:bg-white" },
    { border: "hover:border-zinc-400 dark:hover:border-zinc-600", glow: "from-white/5", tag: "default" as const, dot: "bg-zinc-900 dark:bg-white" },
    { border: "hover:border-zinc-400 dark:hover:border-zinc-600", glow: "from-white/5", tag: "default" as const, dot: "bg-zinc-900 dark:bg-white" },
    { border: "hover:border-zinc-400 dark:hover:border-zinc-600", glow: "from-white/5", tag: "default" as const, dot: "bg-zinc-900 dark:bg-white" },
  ];

  return (
    <div className="relative w-full pb-32">
      {projects.map((project, index) => {
        const accent = cardAccents[index % cardAccents.length];
        // Calculate offset so each card header peeks out like a real deck of cards
        const topOffsetDesktop = 96 + index * 36;
        const topOffsetMobile = 80 + index * 24;

        return (
          <div
            key={project.id}
            className="sticky transition-all duration-500 mb-16 sm:mb-24"
            style={{
              top: `${topOffsetDesktop}px`,
              zIndex: index + 10,
            }}
          >
            {/* Card Shell */}
            <div
              className={`relative w-full rounded-md bg-white dark:bg-[#0c0d14] border border-black/10 dark:border-white/15 ${accent.border} overflow-hidden shadow-2xl dark:shadow-[0_-16px_40px_rgba(0,0,0,0.85),0_30px_70px_rgba(0,0,0,0.95)] transition-all duration-300 group`}
            >
              {/* Subtle Ambient Radial Glow */}
              <div
                className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${accent.glow} to-transparent opacity-30 pointer-events-none rounded-full blur-3xl`}
              />

              {/* Peeking Deck Header (Stays visible as subsequent cards stack over) */}
              <div className="px-6 py-3.5 sm:px-8 sm:py-4 bg-zinc-50 dark:bg-[#12131d] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-zinc-600 dark:text-zinc-400">
                    0{index + 1}
                  </span>
                  <span className="hidden sm:inline-block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 tracking-wider">
                    {project.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant={accent.tag} className="text-[9px]">
                    {project.category?.name || "Production"}
                  </Badge>
                  <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/50 px-2 py-0.5 rounded-xs border border-black/10 dark:border-white/10">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Main Card Body */}
              <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Visual Media Preview */}
                <div className="lg:col-span-7">
                  <div
                    className="block relative aspect-video w-full rounded-sm overflow-hidden bg-zinc-100 dark:bg-black border border-black/10 dark:border-white/10 group/media"
                  >
                    <Image
                      src={project.cover_image_url}
                      alt={project.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover/media:scale-105 opacity-90 group-hover/media:opacity-100"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/media:opacity-50 transition-opacity" />




                  </div>
                </div>

                {/* Right Column: Project Meta & Story */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">

                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                        {project.title}
                      </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                    {project.description}
                  </p>





                  {/* CTA Link */}
                  <div className="pt-2">
                    <Link href={`/client/work/${project.slug}`}>
                      <Button size="md" className="gap-2">
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
