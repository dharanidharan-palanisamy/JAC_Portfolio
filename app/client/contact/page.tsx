"use client";

import React, { useState, useEffect } from "react";
import { ContactForm } from "@/components/client/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { MOCK_SITE_SETTINGS } from "@/lib/utils/mock-data";

export default function ContactPage() {
  const [settings, setSettings] = useState(MOCK_SITE_SETTINGS);

  useEffect(() => {
    const saved = localStorage.getItem("jac_settings");
    if (saved) {
      setSettings({ ...MOCK_SITE_SETTINGS, ...JSON.parse(saved) });
    }
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300 font-mono font-semibold">
            Initiate Production
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mt-2">
            Start A Project
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Share your creative brief, timeline, and production targets below. Our executive producers will review your requirements and provide an exploratory treatment and estimate.
          </p>
        </Reveal>
      </div>

      {/* Main Grid: Form on Left, Coordinates on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-8 p-8 sm:p-10 rounded-sm bg-white dark:bg-zinc-950/60 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <ContactForm />
        </div>

        {/* Studio Info Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-8 rounded-sm bg-zinc-50 dark:bg-zinc-900/40 border border-black/10 dark:border-white/10 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-zinc-700 dark:text-zinc-300">
              Direct Inquiries
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-zinc-600 dark:text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-mono">General & Inquiries</p>
                  <a
                    href={`mailto:${settings.email}`}
                    className="text-zinc-900 dark:text-white hover:underline text-sm font-semibold transition-colors mt-0.5 block"
                  >
                    {settings.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-zinc-600 dark:text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-mono">Headquarters Line</p>
                  <a
                    href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-zinc-900 dark:text-white hover:underline text-sm font-semibold transition-colors mt-0.5 block"
                  >
                    {settings.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-zinc-600 dark:text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-mono">Operating Hours</p>
                  <p className="text-zinc-900 dark:text-white text-sm font-normal mt-0.5 leading-relaxed whitespace-pre-line">
                    {settings.operating_hours}
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
