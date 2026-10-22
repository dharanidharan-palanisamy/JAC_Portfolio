"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "/client/work" },
    { label: "Services", href: "/client/services" },
    { label: "About", href: "/client/about" },
    { label: "Contact", href: "/client/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-zinc-100 dark:bg-black/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10 py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/client" className="group flex items-center space-x-3">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 overflow-hidden flex-shrink-0 flex items-center justify-center mix-blend-multiply dark:mix-blend-screen">
            <Image
              src="/1778475141580.webp"
              alt="JAC MediaLand Logo"
              fill
              className="object-contain scale-[3.2] origin-[50%_30%] dark:invert hue-rotate-15 brightness-125 saturate-150"
            />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
            JAC MediaLand
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 font-mono border-l border-black/20 dark:border-white/20 pl-2">
            IT Solutions
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative py-1",
                  isActive
                    ? "text-zinc-900 dark:text-white font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:text-white"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-900 dark:bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Portal */}
        <div className="hidden md:flex items-center space-x-5">
          <ThemeToggle />
          <Link
            href="/client/contact"
            className="group relative inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2 text-xs uppercase font-bold tracking-wider rounded-sm hover:bg-zinc-800 dark:hover:bg-zinc-300 transition-all duration-300"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:text-white p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-zinc-950/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 p-6 flex flex-col space-y-5 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-sm uppercase tracking-[0.2em] font-medium py-2 border-b border-white/5",
                pathname === link.href ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/client/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-zinc-900 dark:bg-white text-white dark:text-black py-3 text-xs uppercase font-bold tracking-wider rounded-sm"
            >
              Start a Project
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
