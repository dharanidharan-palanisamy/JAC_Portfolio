"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Sparkles,
  Tag,
  Image as ImageIcon,
  Settings,
  ArrowUpRight,
  LogOut,
  ShieldCheck,
  Info,
} from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";
import { cn } from "@/lib/utils/cn";

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut, user } = useAuth();

  const menuItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Home Page", href: "/admin/home", icon: LayoutDashboard },
    { label: "Projects", href: "/admin/projects", icon: Briefcase },
    { label: "Services", href: "/admin/services", icon: Sparkles },
    { label: "Categories", href: "/admin/categories", icon: Tag },
    { label: "Media Library", href: "/admin/media", icon: ImageIcon },
    { label: "About Page", href: "/admin/about", icon: Info },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-white dark:bg-zinc-950 border-r border-black/10 dark:border-white/10 flex flex-col justify-between shrink-0 min-h-screen">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-black/10 dark:border-white/10">
          <Link href="/admin/dashboard" className="block">
            <span className="text-lg font-black tracking-tight text-zinc-900 dark:text-white uppercase">
              JAC MEDIALAND
            </span>
            <div className="flex items-center gap-1.5 mt-1 text-[10px] uppercase font-mono tracking-widest text-zinc-600 dark:text-zinc-400">
              <ShieldCheck className="w-3 h-3" />
              <span>Enterprise Portal</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs uppercase tracking-wider font-mono transition-colors",
                  isActive
                    ? "bg-zinc-200 dark:bg-white/10 text-zinc-900 dark:text-white font-semibold border border-zinc-300 dark:border-white/20"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:text-white hover:bg-black/5 dark:bg-white/5"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-500")} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile & Links */}
      <div className="p-4 border-t border-black/10 dark:border-white/10 space-y-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-sm text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:text-white hover:bg-black/5 dark:bg-white/5 transition-colors"
        >
          <span>View Live Studio</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-500" />
        </Link>

        <div className="px-3 py-2 bg-zinc-100 dark:bg-black/40 border border-white/5 rounded-sm">
          <p className="text-[11px] font-mono text-zinc-700 dark:text-zinc-300 truncate">
            {user?.email || "admin@jac-medialand.com"}
          </p>
          <span className="text-[9px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-mono">
            Admin Access
          </span>
        </div>

        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-mono text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out Session</span>
        </button>
      </div>
    </aside>
  );
}
