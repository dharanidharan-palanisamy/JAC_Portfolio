"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  PenTool,
  Smartphone,
  Code2,
  Search,
  Layers,
  TrendingUp,
  Users,
  Film,
} from "lucide-react";
import { MOCK_SERVICES } from "@/lib/utils/mock-data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";

export default function ServicesPage() {
  const [services, setServices] = useState(MOCK_SERVICES);

  useEffect(() => {
    const saved = localStorage.getItem("jac_services");
    if (saved) {
      setServices(JSON.parse(saved));
    }
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "PenTool":
        return <PenTool className="w-6 h-6 text-zinc-900 dark:text-white" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-zinc-900 dark:text-white" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-zinc-900 dark:text-white" />;
      case "Search":
        return <Search className="w-6 h-6 text-zinc-900 dark:text-white" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-zinc-900 dark:text-white" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-zinc-900 dark:text-white" />;
      case "Users":
        return <Users className="w-6 h-6 text-zinc-900 dark:text-white" />;
      default:
        return <Film className="w-6 h-6 text-zinc-900 dark:text-white" />;
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <Reveal>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white mt-2">
            IT Services & Solutions
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Focused expertise, connected around your goals. From custom software engineering and cloud infrastructure to scalable web platforms, we engineer end-to-end solutions that elevate ambitious brands.
          </p>
        </Reveal>
      </div>

      {/* Services Detailed List */}
      <div className="space-y-16">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <Reveal key={service.id}>
              <div
                id={service.slug}
                className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-2xl bg-white dark:bg-zinc-950/70 border border-black/10 dark:border-white/10 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Preview */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image_url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-zinc-100 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/10">
                    {getServiceIcon(service.icon_name)}
                  </div>
                </div>

                {/* Service Copy */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">

                    <h2 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white tracking-wide">
                      {service.title}
                    </h2>
                    <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400">
                      {service.short_description}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                    {service.full_description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs uppercase tracking-wider font-mono text-zinc-600 dark:text-zinc-400 font-semibold">
                      Key Deliverables & Specifications
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 dark:text-white shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/client/contact">
                      <Button variant="outline" size="sm">
                        <span>Commission This Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>


    </div>
  );
}
