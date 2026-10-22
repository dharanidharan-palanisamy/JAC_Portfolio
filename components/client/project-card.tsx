import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { ProjectWithCategory } from "@/types";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: ProjectWithCategory;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/client/work/${project.slug}`}
      className="group block relative overflow-hidden rounded-sm bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-500"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-black/80">
        <Image
          src={project.cover_image_url}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <Badge variant="default" className="bg-zinc-100 dark:bg-black/60 backdrop-blur-md border-black/20 dark:border-white/20 text-zinc-700 dark:text-zinc-300">
            {project.category?.name || "Production"}
          </Badge>
          <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/60 px-2 py-0.5 rounded-sm border border-black/10 dark:border-white/10">
            {project.year}
          </span>
        </div>

        {/* Play Icon Trigger (Hover) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="w-14 h-14 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-xl shadow-black/20 backdrop-blur-sm">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-5 sm:p-6 bg-white dark:bg-zinc-950/60 backdrop-blur-sm border-t border-white/5 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-semibold">
            {project.client}
          </p>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>

        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>


      </div>
    </Link>
  );
}
