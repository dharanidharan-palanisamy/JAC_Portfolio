"use client";

import React, { useState, useEffect } from "react";
import { Save, CheckCircle2 } from "lucide-react";
import { MOCK_SITE_SETTINGS } from "@/lib/utils/mock-data";
import { AdminHeader } from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState(MOCK_SITE_SETTINGS);
  const [isSaved, setIsSaved] = useState(false);

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
        title="Enterprise Configuration"
        description="Configure corporate brand information, support details, social links, and public copy."
      />

      {isSaved && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-zinc-900 dark:bg-white border border-black/10 flex items-center gap-3 text-white dark:text-zinc-900 text-xs font-mono shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400 dark:text-amber-500" />
          <span>Enterprise settings successfully saved!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Brand & Identity */}
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Corporate Identity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Company Name"
              value={settings.studio_name}
              onChange={(e) => setSettings({ ...settings, studio_name: e.target.value })}
            />

            <Input
              label="Tagline / Manifesto"
              value={settings.tagline}
              onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
            />
          </div>
        </div>

        {/* Contact Coordinates */}
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Corporate Support & Contact
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Support Email"
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            />

            <Input
              label="Support Phone"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
            />
          </div>

          <Input
            label="Headquarters Address"
            value={settings.address}
            onChange={(e) => setSettings({ ...settings, address: e.target.value })}
          />

          <Textarea
            label="Operating Hours"
            rows={2}
            value={settings.operating_hours || ""}
            onChange={(e) => setSettings({ ...settings, operating_hours: e.target.value })}
          />
        </div>

        {/* Social Channels */}
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Developer & Social Channels
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="WhatsApp Profile URL"
              value={settings.whatsapp_url || ""}
              onChange={(e) => setSettings({ ...settings, whatsapp_url: e.target.value })}
            />

            <Input
              label="Instagram Profile"
              value={settings.instagram_url}
              onChange={(e) => setSettings({ ...settings, instagram_url: e.target.value })}
            />

            <Input
              label="YouTube Channel"
              value={settings.youtube_url}
              onChange={(e) => setSettings({ ...settings, youtube_url: e.target.value })}
            />

            <Input
              label="LinkedIn Agency Page"
              value={settings.linkedin_url}
              onChange={(e) => setSettings({ ...settings, linkedin_url: e.target.value })}
            />
          </div>

          <Input
            label="Documentation URL"
            value={settings.showreel_url}
            onChange={(e) => setSettings({ ...settings, showreel_url: e.target.value })}
          />
        </div>

        <div className="flex justify-end">
          <Button size="lg" type="submit">
            <span>Save Enterprise Settings</span>
            <Save className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}
