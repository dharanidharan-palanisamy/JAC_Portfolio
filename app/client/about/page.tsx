"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, BookOpen, Heart, Users, Target, Map, PenTool, Rocket, MonitorPlay, Users2, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { MOCK_SITE_SETTINGS, MOCK_TEAM_MEMBERS } from "@/lib/utils/mock-data";

export default function AboutPage() {
  const [team, setTeam] = useState(MOCK_TEAM_MEMBERS);
  const [settings, setSettings] = useState(MOCK_SITE_SETTINGS);

  useEffect(() => {
    const savedTeam = localStorage.getItem("jac_team");
    const savedSettings = localStorage.getItem("jac_settings");
    if (savedTeam) setTeam(JSON.parse(savedTeam));
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="space-y-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-700 dark:text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 dark:bg-zinc-300"></span>
              About JAC MediaLand
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-white mt-6 leading-[1.1] whitespace-pre-line">
              {settings.about_title}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              {settings.about_subtitle}
            </p>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="pl-6 border-l-2 border-zinc-300 dark:border-zinc-700 space-y-4 mt-8">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {settings.about_paragraph_1}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {settings.about_paragraph_2}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {settings.about_paragraph_3}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium text-zinc-900 dark:text-white/90">
                {settings.about_paragraph_4}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:mt-12">
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 space-y-8">
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-500">
              EST. 2022
            </span>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 overflow-hidden flex items-center justify-center shrink-0 mix-blend-multiply dark:mix-blend-screen">
                 <Image
                    src="/1778475141580.webp"
                    alt="Logo"
                    fill
                    className="object-contain scale-[3.2] origin-[50%_30%] dark:invert"
                  />
              </div>
              <div>
                <h3 className="text-xl font-black text-zinc-900 dark:text-white">JAC MediaLand</h3>
                <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400">IT Solutions</p>
              </div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A youth-powered creative & technology company building thoughtful digital experiences with clarity and purpose.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10 dark:border-white/10">
              <div className="text-center p-3 rounded-lg bg-black/5 dark:bg-white/5">
                <p className="text-xl font-black text-zinc-900 dark:text-white">50+</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">Projects</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-black/5 dark:bg-white/5">
                <p className="text-xl font-black text-zinc-900 dark:text-white">3+</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">Years</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-black/5 dark:bg-white/5">
                <p className="text-xl font-black text-zinc-900 dark:text-white">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">Committed</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* 2. Life at JAC MediaLand */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <Reveal>
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </Reveal>
        
        <div className="space-y-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300 font-mono font-semibold">
              Life at JAC
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mt-2 leading-[1.1]">
              Life at JAC<br />MediaLand
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base text-zinc-900 dark:text-white font-medium">
              A workplace where curiosity is encouraged, people feel supported, and passion fuels progress.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              At JAC MediaLand, we believe that great innovation thrives in a positive and collaborative environment. Our culture is built on the foundation of mutual respect, continuous learning, and creative freedom. We nurture a healthy ecosystem where ideas are encouraged, individuality is celebrated, and every voice is heard.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We are not just building technology — we are building a community of forward-thinkers driven by curiosity and purpose. With an open-door policy, flexible thinking, and a strong focus on work-life balance, JAC MediaLand is a place where careers flourish, friendships grow, and innovation never stops.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <Check className="w-4 h-4 text-zinc-900 dark:text-white" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Creative Freedom</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <BookOpen className="w-4 h-4 text-zinc-900 dark:text-white" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Continuous Learning</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <Heart className="w-4 h-4 text-zinc-900 dark:text-white" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">People First</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <Users className="w-4 h-4 text-zinc-900 dark:text-white" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Shared Ideas</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 3. How We Work */}
      <div className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300 font-mono font-semibold">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mt-2">
              How We Work
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A clear, collaborative path that turns your ideas into dependable digital experiences.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0}>
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 space-y-6 h-full hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-zinc-900 dark:text-white/10">01</span>
                <Target className="w-5 h-5 text-zinc-900 dark:text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">Understand Your Goals</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">We listen closely, clarify your needs, and define what success looks like.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 space-y-6 h-full hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-zinc-900 dark:text-white/10">02</span>
                <Map className="w-5 h-5 text-zinc-900 dark:text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">Plan the Right Approach</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">We shape a practical strategy with clear priorities, scope, and direction.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 space-y-6 h-full hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-zinc-900 dark:text-white/10">03</span>
                <PenTool className="w-5 h-5 text-zinc-900 dark:text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">Create and Collaborate</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">We design, build, and refine the solution with your feedback throughout.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 space-y-6 h-full hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-zinc-900 dark:text-white/10">04</span>
                <Rocket className="w-5 h-5 text-zinc-900 dark:text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">Launch and Support</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">We deliver confidently and stay available as your business continues to grow.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 4. Leadership & Team */}
      <div className="space-y-8 text-center max-w-3xl mx-auto">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300 font-mono font-semibold">
            Leadership & Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mt-2">
            People Behind Our Success
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Purposeful leadership and a committed team working together to create meaningful digital experiences.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10">
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={settings.ceo_image}
              alt={settings.ceo_name}
              fill
              className="object-contain object-bottom filter grayscale bg-zinc-100 dark:bg-black/40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 px-3 py-1 rounded-full bg-zinc-100 dark:bg-black/80 border border-black/10 dark:border-white/10 text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              Founder Spotlight
            </div>
          </div>
          <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6">
            <span className="inline-flex items-center self-start gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-900 dark:text-white">
              <Award className="w-3.5 h-3.5" /> Founder & CEO
            </span>
            <div className="space-y-2">
              <p className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-500 uppercase">Leading the vision behind JAC MediaLand</p>
              <h3 className="text-4xl sm:text-5xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">John Charles</h3>
              <p className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Founder and CEO</p>
            </div>
            <blockquote className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic border-l-2 border-zinc-900 dark:border-white pl-4">
              "Building a team where thoughtful ideas, bold creativity, and dependable execution come together to create work that matters."
            </blockquote>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-8 h-[1px] bg-white"></div>
              <span className="text-sm font-bold text-zinc-900 dark:text-white">JAC MediaLand</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 5. Team Grid */}
      <div className="space-y-12 pt-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300 font-mono font-semibold">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white mt-2">
              Meet the people who make it happen.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Different strengths, one shared commitment to excellent work.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <Reveal key={member.name} delay={idx * 50}>
              <div className="group rounded-xl overflow-hidden bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10">
                <div className="relative aspect-[4/5] bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-zinc-900 dark:text-white">{member.name}</h3>
                  <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mt-1">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 6. Our Space */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-12 items-center">
        <div className="space-y-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300 font-mono font-semibold">
              Inside JAC MediaLand
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mt-2">
              Our Space
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A creative environment designed for focused thinking, open collaboration, and meaningful progress.
            </p>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-8 space-y-6">
              <span className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-mono">Where Ideas Grow</span>
              <h3 className="text-3xl font-black text-zinc-900 dark:text-white leading-tight">Built for people who love creating together.</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our space brings focused work, thoughtful conversations, and fresh ideas under one roof. It is where our team explores possibilities, solves challenges, and turns ambitious concepts into dependable digital experiences.
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <MonitorPlay className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Creative Studio</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Room to explore and shape bold ideas.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <Users2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Collaborative Space</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">A culture built around shared thinking.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <TrendingUp className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Growth Environment</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Every project creates a chance to learn.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="order-first lg:order-last">
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-70"></div>
             <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-black/60 border border-black/10 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-700 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white"></span>
                  A look inside our workspace
                </span>
             </div>
          </div>
        </Reveal>
      </div>

    </div>
  );
}
