"use client";

import React, { useState, useEffect } from "react";
import { Layers, LayoutGrid } from "lucide-react";
import { MOCK_CATEGORIES, MOCK_PROJECTS } from "@/lib/utils/mock-data";
import { ProjectCard } from "@/components/client/project-card";
import { StackingCards } from "@/components/client/stacking-cards";
import { Reveal } from "@/components/animations/reveal";

export default function WorkPage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"stack" | "grid">("stack");

  useEffect(() => {
    const saved = localStorage.getItem("jac_projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category?.slug === selectedCategory);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mt-2">
            Selected Works
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            A comprehensive catalog of IT solutions, cloud architectures, and modern web applications crafted with relentless dedication to performance and scale.
          </p>
        </Reveal>
      </div>

      {/* Filter and View Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-10 border-b border-black/10 dark:border-white/10">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold border-zinc-900 dark:border-white shadow-md"
                : "bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border-black/10 dark:border-white/10 hover:text-zinc-900 dark:text-white hover:border-black/20 dark:border-white/20"
            }`}
          >
            All Projects ({projects.length})
          </button>

          {MOCK_CATEGORIES.map((cat) => {
            const count = projects.filter((p) => p.category_id === cat.id).length;
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold border-zinc-900 dark:border-white shadow-md"
                    : "bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border-black/10 dark:border-white/10 hover:text-zinc-900 dark:text-white hover:border-black/20 dark:border-white/20"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center p-1 rounded-full bg-zinc-100 dark:bg-black/40 border border-black/10 dark:border-white/10 self-end sm:self-auto shrink-0">
          <button
            onClick={() => setViewMode("stack")}
            className={`flex items-center justify-center p-2 rounded-full transition-all cursor-pointer ${
              viewMode === "stack"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:text-white"
            }`}
            title="Card Deck Stack View"
            aria-label="Deck Stack View"
          >
            <Layers className="w-4 h-4" />
          </button>

          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center justify-center p-2 rounded-full transition-all cursor-pointer ${
              viewMode === "grid"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:text-white"
            }`}
            title="Grid View"
            aria-label="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Projects Display: Stacking Cards vs Grid */}
      {viewMode === "stack" ? (
        <StackingCards projects={filteredProjects} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-zinc-500 dark:text-zinc-500 font-mono">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
