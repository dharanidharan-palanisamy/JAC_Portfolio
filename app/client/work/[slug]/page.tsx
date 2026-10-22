import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Award, Film, Play } from "lucide-react";
import { MOCK_PROJECTS } from "@/lib/utils/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return MOCK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = MOCK_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project in sequence
  const currentIndex = MOCK_PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = MOCK_PROJECTS[(currentIndex + 1) % MOCK_PROJECTS.length];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
        <Link
          href="/client/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <Badge variant="default">{project.category?.name || "Production"}</Badge>
          <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">{project.year}</span>
        </div>
      </div>

      {/* Hero Title & Client */}
      <div className="space-y-4 max-w-4xl">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
          {project.title}
        </h1>
      </div>

      {/* Main Video Presentation Player */}
      <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-zinc-100 dark:bg-black border border-black/10 dark:border-white/10 shadow-2xl group">
        <Image
          src={project.cover_image_url}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Case Study Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        {/* Left Story & Background */}
        <div className="lg:col-span-12 space-y-8 max-w-5xl">
          <div className="space-y-4">
            <h2 className="text-xl uppercase tracking-wider font-bold text-zinc-900 dark:text-white font-mono">
              Project Overview
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              {project.full_story || project.description}
            </p>
          </div>



          {/* Stills Gallery */}
          {project.stills && project.stills.length > 0 && (
            <div className="space-y-4 pt-6">
              <h3 className="text-lg uppercase tracking-wider font-bold text-zinc-900 dark:text-white font-mono">
                Project Showcase
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.stills.map((stillUrl, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-sm overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10"
                  >
                    <Image
                      src={stillUrl}
                      alt={`${project.title} still ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>


      </div>

      {/* Next Project Navigator */}
      <div className="border-t border-black/10 dark:border-white/10 pt-12 mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-sm bg-zinc-50 dark:bg-gradient-to-r dark:from-zinc-950 dark:to-zinc-900 border border-black/10 dark:border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-400">
              Next In Portfolio
            </span>
            <h3 className="text-2xl font-black uppercase text-zinc-900 dark:text-white">
              {nextProject.title}
            </h3>

          </div>

          <Link href={`/client/work/${nextProject.slug}`}>
            <Button variant="secondary" size="md">
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
