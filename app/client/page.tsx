"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Sparkles, Film, Video, Award, ChevronRight } from "lucide-react";
import { MOCK_PROJECTS, MOCK_SERVICES, MOCK_SITE_SETTINGS } from "@/lib/utils/mock-data";
import { ProjectCard } from "@/components/client/project-card";
import { StackingCards } from "@/components/client/stacking-cards";
import { ServicesGrid } from "@/components/client/services-grid";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [settings, setSettings] = useState(MOCK_SITE_SETTINGS);

  useEffect(() => {
    const savedProjects = localStorage.getItem("jac_projects");
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    
    const savedSettings = localStorage.getItem("jac_settings");
    if (savedSettings) setSettings({ ...MOCK_SITE_SETTINGS, ...JSON.parse(savedSettings) });
  }, []);

  const featuredProjects = projects.filter((p) => p.is_featured).slice(0, 4);

  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-6 sm:px-8">
        {/* Background Video / Image Banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85"
            alt="JAC.TECH Global Infrastructure"
            fill
            priority
            className="object-cover object-center opacity-30 scale-105 filter brightness-75"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 dark:from-[#08080b] via-zinc-100/60 dark:via-[#08080b]/60 to-white/80 dark:to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">

          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-[1.05]">
              {settings.hero_title_1} <br />
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent">
                {settings.hero_title_2}
              </span>{" "}
              <span className="text-zinc-900 dark:text-white">
                {settings.hero_title_3}
              </span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={200}>
            <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300/90 max-w-2xl mx-auto leading-relaxed font-light">
              {settings.hero_subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/client/work">
                <Button size="lg" className="w-full sm:w-auto">
                  <span>{settings.hero_button_1_text || "Explore Featured Works"}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>

              <Link href="/client/services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Sparkles className="w-4 h-4 mr-1.5 text-zinc-900 dark:text-white" />
                  <span>{settings.hero_button_2_text || "IT Capabilities"}</span>
                </Button>
              </Link>
            </div>
          </Reveal>

          {/* Live Tech Stats */}
          <Reveal delay={400}>
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-black/10 dark:border-white/10 max-w-4xl mx-auto">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-mono">{settings.stat_1_value}</p>
                <p className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">{settings.stat_1_label}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-mono">{settings.stat_2_value}</p>
                <p className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">{settings.stat_2_label}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-mono">{settings.stat_3_value}</p>
                <p className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">{settings.stat_3_label}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-mono">{settings.stat_4_value}</p>
                <p className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">{settings.stat_4_label}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. CLIENT LOGOS */}
      <section className="py-16 px-6 sm:px-8 border-y border-black/10 dark:border-white/10 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
            {(settings.client_logo_urls || "").split(",").map((url, i) => (
              <div key={i} className="relative bg-white/95 backdrop-blur-sm rounded-2xl h-24 w-40 sm:h-28 sm:w-48 md:h-32 md:w-56 transition-all duration-300 hover:-translate-y-1 hover:bg-white shadow-lg hover:shadow-xl hover:shadow-white/5 p-4 flex items-center justify-center group">
                <div className="relative w-full h-full">
                  <Image
                    src={url.trim()}
                    alt={`Client Logo ${i + 1}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK SHOWCASE */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <Reveal>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-900 dark:text-white font-mono font-semibold">
                Curated Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                Selected Works
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Link
              href="/client/work"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <span>View All Projects ({MOCK_PROJECTS.length})</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Stacking Cards Deck View */}
        <StackingCards projects={featuredProjects} />
      </section>

      {/* 4. TECH MANIFESTO / ETHOS */}
      <section className="py-20 border-y border-black/10 dark:border-white/10 bg-white dark:bg-zinc-950/40 relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-zinc-900 dark:text-white font-semibold">
              {settings.manifesto_title || "Our Engineering Philosophy"}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white leading-snug">
              &ldquo;{settings.manifesto_quote || "We don't just write code. We architect scalable solutions, optimize system performance, and engineer digital experiences that drive growth."}&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
              — {settings.manifesto_author || "John Charles, Founder and CEO"}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. OUR SERVICES (SCREENSHOT MATCHING GRID) */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <Reveal>
          <ServicesGrid />
        </Reveal>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 px-6 sm:px-8 border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent to-zinc-100 dark:to-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-zinc-900 dark:text-white font-semibold">
              {settings.cta_subtitle}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mt-3">
              {settings.cta_title}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
              {settings.cta_description}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/client/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  <span>{settings.cta_button_1_text || "Submit Project Brief"}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/client/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <span>{settings.cta_button_2_text || "Learn About Our Tech"}</span>
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
