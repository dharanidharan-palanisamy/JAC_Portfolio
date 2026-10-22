"use client";

import React, { useState, useEffect } from "react";
import { Save, CheckCircle2 } from "lucide-react";
import { MOCK_SITE_SETTINGS } from "@/lib/utils/mock-data";
import { AdminHeader } from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

export default function AdminHomePageSettings() {
  const [settings, setSettings] = useState(MOCK_SITE_SETTINGS);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const saved = localStorage.getItem("jac_settings");
    if (saved) {
      setSettings({ ...MOCK_SITE_SETTINGS, ...JSON.parse(saved) });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("jac_settings", JSON.stringify(settings));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <AdminHeader
        title="Home Page Details"
        description="Configure the text and messaging displayed on the public Home page."
      />

      {isSaved && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-zinc-900 dark:bg-white border border-black/10 flex items-center gap-3 text-white dark:text-zinc-900 text-xs font-mono shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400 dark:text-amber-500" />
          <span>Home page content successfully saved!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Tabs Navigation */}
        <div className="flex items-center gap-2 border-b border-black/10 dark:border-white/10 pb-4 overflow-x-auto">
          <Button 
            variant={activeTab === "hero" ? "primary" : "outline"} 
            onClick={() => setActiveTab("hero")}
            type="button"
          >
            Hero Section
          </Button>
          <Button 
            variant={activeTab === "stats" ? "primary" : "outline"} 
            onClick={() => setActiveTab("stats")}
            type="button"
          >
            Live Tech Stats
          </Button>
          <Button 
            variant={activeTab === "logos" ? "primary" : "outline"} 
            onClick={() => setActiveTab("logos")}
            type="button"
          >
            Client Logos
          </Button>
          <Button 
            variant={activeTab === "philosophy" ? "primary" : "outline"} 
            onClick={() => setActiveTab("philosophy")}
            type="button"
          >
            Engineering Philosophy
          </Button>
          <Button 
            variant={activeTab === "cta" ? "primary" : "outline"} 
            onClick={() => setActiveTab("cta")}
            type="button"
          >
            Call to Action
          </Button>
        </div>

        {/* Hero Section */}
        {activeTab === "hero" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Hero Section
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Hero Title (Part 1)"
              value={settings.hero_title_1 || ""}
              onChange={(e) => setSettings({ ...settings, hero_title_1: e.target.value })}
            />
            <Input
              label="Hero Title (Gradient Part)"
              value={settings.hero_title_2 || ""}
              onChange={(e) => setSettings({ ...settings, hero_title_2: e.target.value })}
            />
            <Input
              label="Hero Title (Part 3)"
              value={settings.hero_title_3 || ""}
              onChange={(e) => setSettings({ ...settings, hero_title_3: e.target.value })}
            />
          </div>

          <Textarea
            label="Hero Subtitle"
            rows={3}
            value={settings.hero_subtitle || ""}
            onChange={(e) => setSettings({ ...settings, hero_subtitle: e.target.value })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Hero Button 1 Text"
              value={settings.hero_button_1_text || ""}
              onChange={(e) => setSettings({ ...settings, hero_button_1_text: e.target.value })}
            />
            <Input
              label="Hero Button 2 Text"
              value={settings.hero_button_2_text || ""}
              onChange={(e) => setSettings({ ...settings, hero_button_2_text: e.target.value })}
            />
          </div>
        </div>
        )}

        {/* Live Tech Stats */}
        {activeTab === "stats" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Live Tech Stats
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4 border p-4 rounded-lg border-black/10 dark:border-white/10">
              <Input label="Stat 1 Value" value={settings.stat_1_value || ""} onChange={(e) => setSettings({ ...settings, stat_1_value: e.target.value })} />
              <Input label="Stat 1 Label" value={settings.stat_1_label || ""} onChange={(e) => setSettings({ ...settings, stat_1_label: e.target.value })} />
            </div>
            <div className="space-y-4 border p-4 rounded-lg border-black/10 dark:border-white/10">
              <Input label="Stat 2 Value" value={settings.stat_2_value || ""} onChange={(e) => setSettings({ ...settings, stat_2_value: e.target.value })} />
              <Input label="Stat 2 Label" value={settings.stat_2_label || ""} onChange={(e) => setSettings({ ...settings, stat_2_label: e.target.value })} />
            </div>
            <div className="space-y-4 border p-4 rounded-lg border-black/10 dark:border-white/10">
              <Input label="Stat 3 Value" value={settings.stat_3_value || ""} onChange={(e) => setSettings({ ...settings, stat_3_value: e.target.value })} />
              <Input label="Stat 3 Label" value={settings.stat_3_label || ""} onChange={(e) => setSettings({ ...settings, stat_3_label: e.target.value })} />
            </div>
            <div className="space-y-4 border p-4 rounded-lg border-black/10 dark:border-white/10">
              <Input label="Stat 4 Value" value={settings.stat_4_value || ""} onChange={(e) => setSettings({ ...settings, stat_4_value: e.target.value })} />
              <Input label="Stat 4 Label" value={settings.stat_4_label || ""} onChange={(e) => setSettings({ ...settings, stat_4_label: e.target.value })} />
            </div>
          </div>
        </div>
        )}

        {/* Client Logos */}
        {activeTab === "logos" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Client Logos Marquee
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Paste image URLs separated by commas. You can upload images in the <strong>Media Library</strong>, copy their URLs, and paste them here.
          </p>
          <Textarea
            label="Client Logo URLs"
            rows={4}
            value={settings.client_logo_urls || ""}
            onChange={(e) => setSettings({ ...settings, client_logo_urls: e.target.value })}
          />
        </div>
        )}

        {/* Engineering Philosophy Section */}
        {activeTab === "philosophy" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Engineering Philosophy & Tech Manifesto
          </h3>

          <Input
            label="Eyebrow Subtitle"
            value={settings.manifesto_title || "Our Engineering Philosophy"}
            onChange={(e) => setSettings({ ...settings, manifesto_title: e.target.value })}
          />

          <Textarea
            label="Manifesto Quote / Statement"
            rows={3}
            value={settings.manifesto_quote || "We don't just write code. We architect scalable solutions, optimize system performance, and engineer digital experiences that drive growth."}
            onChange={(e) => setSettings({ ...settings, manifesto_quote: e.target.value })}
          />

          <Input
            label="Quote Author & Title"
            value={settings.manifesto_author || "John Charles, Founder and CEO"}
            onChange={(e) => setSettings({ ...settings, manifesto_author: e.target.value })}
          />
        </div>
        )}

        {/* Home Page Call to Action */}
        {activeTab === "cta" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Call to Action Section
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="CTA Subtitle (Eyebrow)"
              value={settings.cta_subtitle || ""}
              onChange={(e) => setSettings({ ...settings, cta_subtitle: e.target.value })}
            />
            <Input
              label="CTA Main Title"
              value={settings.cta_title || ""}
              onChange={(e) => setSettings({ ...settings, cta_title: e.target.value })}
            />
          </div>

          <Textarea
            label="CTA Description"
            rows={2}
            value={settings.cta_description || ""}
            onChange={(e) => setSettings({ ...settings, cta_description: e.target.value })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="CTA Button 1 Text"
              value={settings.cta_button_1_text || ""}
              onChange={(e) => setSettings({ ...settings, cta_button_1_text: e.target.value })}
            />
            <Input
              label="CTA Button 2 Text"
              value={settings.cta_button_2_text || ""}
              onChange={(e) => setSettings({ ...settings, cta_button_2_text: e.target.value })}
            />
          </div>
        </div>
        )}

        <div className="flex justify-end">
          <Button size="lg" type="submit">
            <span>Save Home Page Details</span>
            <Save className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}
