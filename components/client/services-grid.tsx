"use client";

import React from "react";
import Link from "next/link";
import {
  PenTool,
  Smartphone,
  Code2,
  Search,
  Layers,
  TrendingUp,
  Users,
  Film,
  ArrowRight,
} from "lucide-react";
import { MOCK_SERVICES } from "@/lib/utils/mock-data";
import { Service } from "@/types";

export function ServicesGrid() {
  const [services, setServices] = React.useState<Service[]>(MOCK_SERVICES);

  React.useEffect(() => {
    const saved = localStorage.getItem("jac_services");
    if (saved) {
      setServices(JSON.parse(saved));
    }
  }, []);
  const iconMapping: Record<string, React.ReactNode> = {
    PenTool: <PenTool className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />,
    Smartphone: <Smartphone className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />,
    Code2: <Code2 className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />,
    Search: <Search className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />,
    Layers: <Layers className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />,
    Users: <Users className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />,
    Film: <Film className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />,
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-zinc-950/70 border border-black/10 dark:border-white/10 p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl">
      {/* Section Header */}
      <div className="mb-10 pb-6 border-b border-black/10 dark:border-white/10">
        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
          Our Services
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light mt-1.5">
          Focused expertise, connected around your goals.
        </p>
      </div>

      {/* 2-Column Services Grid matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services#${service.slug}`}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-all duration-200 group"
          >
            {/* Icon Container with rounded square */}
            <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
              {iconMapping[service.icon_name] || (
                <Code2 className="w-5 h-5 text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
              )}
            </div>

            {/* Service Title & Subtitle */}
            <div className="space-y-1">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                {service.short_description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Action Strip */}
      <Link
        href="/services"
        className="flex items-center justify-between w-full px-6 py-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:border-zinc-400 dark:hover:border-zinc-500 text-sm font-medium text-zinc-900 dark:text-white transition-all group"
      >
        <span className="font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white">
          View all services
        </span>
        <ArrowRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
