"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MOCK_SITE_SETTINGS } from "@/lib/utils/mock-data";

export function Footer() {
  const [settings, setSettings] = useState(MOCK_SITE_SETTINGS);

  useEffect(() => {
    const saved = localStorage.getItem("jac_settings");
    if (saved) {
      setSettings({ ...MOCK_SITE_SETTINGS, ...JSON.parse(saved) });
    }
  }, []);

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-black/90 pt-8 pb-4 text-zinc-700 dark:text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-black/10 dark:border-white/10">
          {/* Studio Brand & Tagline */}
          <div className="md:col-span-5 space-y-2">
            <Link href="/client" className="inline-flex items-center space-x-3">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden flex-shrink-0 flex items-center justify-center mix-blend-multiply dark:mix-blend-screen">
                <Image
                  src="/1778475141580.webp"
                  alt="JAC MediaLand Logo"
                  fill
                  className="object-contain scale-[3.2] origin-[50%_30%] dark:invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 dark:text-white leading-none">
                  JAC MediaLand
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 font-mono mt-1">
                  IT Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-sm">
              A premium IT solutions and engineering consultancy crafting scalable software, cloud infrastructure, and modern web applications.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href={settings.whatsapp_url || "https://wa.me/"} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7 space-y-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              <li>
                <Link href="/client/work" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/client/services" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/client/about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Company Story
                </Link>
              </li>
              <li>
                <Link href="/client/contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Offices */}
          <div className="md:col-span-3 space-y-4">
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-900 dark:text-white">
                Global Headquarters
              </h4>
              <address className="not-italic text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-mono whitespace-pre-line">
                {settings.address}
                <br />
                {settings.email}
                <br />
                {settings.phone}
              </address>
            </div>
            
            <div className="flex items-center gap-3 pt-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white font-mono">
                Accepting New Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex items-center justify-center text-xs text-zinc-600 dark:text-zinc-400 font-mono">
          <p className="text-center">© {new Date().getFullYear()} JAC MediaLand IT Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
