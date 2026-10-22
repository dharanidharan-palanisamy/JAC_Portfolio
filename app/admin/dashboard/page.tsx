"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Sparkles,
  Mail,
  Image as ImageIcon,
  Plus,
  ArrowUpRight,
  Clock,
  Eye,
  CheckCircle2,
} from "lucide-react";
import {
  MOCK_PROJECTS,
  MOCK_SERVICES,
  MOCK_INQUIRIES,
  MOCK_MEDIA_ASSETS,
} from "@/lib/utils/mock-data";
import { AdminHeader } from "@/components/admin/admin-header";
import { StatsCard } from "@/components/admin/stats-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatRelativeTime } from "@/lib/utils/formatters";

export default function AdminDashboardPage() {
  const publishedProjects = MOCK_PROJECTS.filter((p) => p.is_published).length;
  const newInquiries = MOCK_INQUIRIES.filter((i) => i.status === "new").length;

  return (
    <div className="space-y-8">
      <AdminHeader
        title="Enterprise Dashboard"
        description="JAC-MEDIALAND overview, system deployments, and performance metrics."
        actions={
          <Link href="/admin/projects">
            <Button size="sm">
              <Plus className="w-3.5 h-3.5 mr-1" />
              <span>Create Project</span>
            </Button>
          </Link>
        }
      />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          label="Total Projects"
          value={MOCK_PROJECTS.length}
          subtext={`${publishedProjects} published live`}
          icon={Briefcase}
          variant="default"
        />
        <StatsCard
          label="Client Inquiries"
          value={MOCK_INQUIRIES.length}
          subtext={`${newInquiries} pending review`}
          icon={Mail}
          variant="default"
        />
        <StatsCard
          label="IT Services"
          value={MOCK_SERVICES.length}
          subtext="All 4 pipelines active"
          icon={Sparkles}
          variant="default"
        />
        <StatsCard
          label="Cloud Resources"
          value={MOCK_MEDIA_ASSETS.length}
          subtext="Active instances globally"
          icon={ImageIcon}
          variant="default"
        />
      </div>

      {/* Two Column Section: Inquiries & Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Project Inquiries */}
        <div className="lg:col-span-7 p-6 rounded-sm bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
            <div>
              <h2 className="text-base font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Client Inquiries & Briefs
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                Recent project requests submitted through the portal
              </p>
            </div>
            <Badge variant="default">{newInquiries} New</Badge>
          </div>

          <div className="divide-y divide-white/5">
            {MOCK_INQUIRIES.map((inquiry) => (
              <div key={inquiry.id} className="py-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">
                      {inquiry.name}
                    </span>
                    {inquiry.company && (
                      <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                        ({inquiry.company})
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-500" suppressHydrationWarning>
                    {formatRelativeTime(inquiry.created_at)}
                  </span>
                </div>

                <p className="text-xs text-zinc-700 dark:text-zinc-300 line-clamp-2 leading-relaxed font-light">
                  {inquiry.message}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-white/10 px-2 py-0.5 rounded-xs border border-black/10 dark:border-white/20">
                      Budget: {inquiry.budget_range}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-xs border border-black/10 dark:border-white/10">
                      {inquiry.service_type}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    Status: {inquiry.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Projects & Shortcuts */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Projects List */}
          <div className="p-6 rounded-sm bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
              <h2 className="text-base font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Recent Projects
              </h2>
              <Link
                href="/admin/projects"
                className="text-xs uppercase font-mono text-zinc-900 dark:text-white hover:underline inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {MOCK_PROJECTS.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-3 rounded-sm bg-zinc-100 dark:bg-black/40 border border-white/5 hover:border-black/20 dark:border-white/20 transition-colors"
                >
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white truncate max-w-[200px]">
                      {project.title}
                    </p>
                    <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-500">
                      Client: {project.client} • {project.year}
                    </p>
                  </div>

                  <Badge variant="default">
                    {project.is_published ? "Live" : "Draft"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Management Shortcuts */}
          <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 shadow-sm border border-black/10 dark:border-white/10 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold">
              Quick Operations
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/admin/media" className="block">
                <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-black/5 dark:border-white/5 text-center transition-colors">
                  <ImageIcon className="w-5 h-5 mx-auto text-zinc-600 dark:text-zinc-400 mb-1" />
                  <span className="text-[11px] uppercase font-mono text-zinc-600 dark:text-zinc-400">
                    Media Storage
                  </span>
                </div>
              </Link>

              <Link href="/admin/categories" className="block">
                <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-black/5 dark:border-white/5 text-center transition-colors">
                  <Sparkles className="w-5 h-5 mx-auto text-zinc-600 dark:text-zinc-400 mb-1" />
                  <span className="text-[11px] uppercase font-mono text-zinc-600 dark:text-zinc-400">
                    Taxonomies
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
