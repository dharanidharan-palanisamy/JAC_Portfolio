"use client";

import React, { useState, useEffect } from "react";
import { Save, CheckCircle2, UserCircle, Trash2, Plus } from "lucide-react";
import { MOCK_SITE_SETTINGS, MOCK_TEAM_MEMBERS } from "@/lib/utils/mock-data";
import { AdminHeader } from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

export default function AdminAboutPage() {
  const [settings, setSettings] = useState(MOCK_SITE_SETTINGS);
  const [team, setTeam] = useState(MOCK_TEAM_MEMBERS);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("primary");

  useEffect(() => {
    const savedTeam = localStorage.getItem("jac_team");
    const savedSettings = localStorage.getItem("jac_settings");
    if (savedTeam) setTeam(JSON.parse(savedTeam));
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("jac_settings", JSON.stringify(settings));
    localStorage.setItem("jac_team", JSON.stringify(team));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleTeamChange = (id: string, field: string, value: string) => {
    setTeam(team.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  };

  const handleAddTeamMember = () => {
    const newId = `t${Date.now()}`;
    setTeam([...team, { id: newId, name: "New Member", role: "Role", image: "" }]);
  };

  const handleRemoveTeamMember = (id: string) => {
    setTeam(team.filter((t) => t.id !== id));
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <AdminHeader
        title="About Page Content"
        description="Configure the text and messaging displayed on the public About Us page."
      />

      {isSaved && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-zinc-900 dark:bg-white border border-black/10 flex items-center gap-3 text-white dark:text-zinc-900 text-xs font-mono shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400 dark:text-amber-500" />
          <span>About page content successfully saved!</span>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {["primary", "life", "process", "leadership", "team", "space"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md border transition-colors ${
              activeTab === tab 
                ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white" 
                : "bg-white text-zinc-600 border-black/10 hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-400 dark:border-white/10 dark:hover:bg-zinc-900"
            }`}
          >
            {tab === "primary" ? "Primary Content" : 
             tab === "life" ? "Life at JAC" : 
             tab === "process" ? "How We Work" : 
             tab === "leadership" ? "Leadership" : 
             tab === "team" ? "Team Members" : "Our Space"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {activeTab === "primary" && (
          <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3">
            Primary Content
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <Input
              label="About Title"
              value={settings.about_title}
              onChange={(e) => setSettings({ ...settings, about_title: e.target.value })}
            />

            <Textarea
              label="About Subtitle"
              rows={2}
              value={settings.about_subtitle}
              onChange={(e) => setSettings({ ...settings, about_subtitle: e.target.value })}
            />
            
            <Textarea
              label="Mission Statement"
              rows={2}
              value={settings.about_paragraph_1}
              onChange={(e) => setSettings({ ...settings, about_paragraph_1: e.target.value })}
            />

            <Textarea
              label="Strategic Approach"
              rows={2}
              value={settings.about_paragraph_2}
              onChange={(e) => setSettings({ ...settings, about_paragraph_2: e.target.value })}
            />

            <Textarea
              label="Team & Culture"
              rows={2}
              value={settings.about_paragraph_3}
              onChange={(e) => setSettings({ ...settings, about_paragraph_3: e.target.value })}
            />

            <Textarea
              label="Closing Statement"
              rows={2}
              value={settings.about_paragraph_4}
              onChange={(e) => setSettings({ ...settings, about_paragraph_4: e.target.value })}
            />
          </div>
        </div>
        )}

        {activeTab === "life" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3 flex justify-between items-center">
            Life at JAC
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <Input 
              label="Section Title" 
              value={settings.life_title}
              onChange={(e) => setSettings({ ...settings, life_title: e.target.value })} 
            />
            <Textarea 
              label="Section Subtitle" 
              rows={2} 
              value={settings.life_subtitle}
              onChange={(e) => setSettings({ ...settings, life_subtitle: e.target.value })} 
            />
          </div>
        </div>
        )}

        {activeTab === "process" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3 flex justify-between items-center">
            How We Work
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <Input 
              label="Process Title" 
              value={settings.how_we_work_title}
              onChange={(e) => setSettings({ ...settings, how_we_work_title: e.target.value })} 
            />
            <Input 
              label="Step 1" 
              value={settings.step_1}
              onChange={(e) => setSettings({ ...settings, step_1: e.target.value })} 
            />
            <Input 
              label="Step 2" 
              value={settings.step_2}
              onChange={(e) => setSettings({ ...settings, step_2: e.target.value })} 
            />
            <Input 
              label="Step 3" 
              value={settings.step_3}
              onChange={(e) => setSettings({ ...settings, step_3: e.target.value })} 
            />
            <Input 
              label="Step 4" 
              value={settings.step_4}
              onChange={(e) => setSettings({ ...settings, step_4: e.target.value })} 
            />
          </div>
        </div>
        )}

        {activeTab === "leadership" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3 flex justify-between items-center">
            Leadership & Team
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <Input 
              label="CEO Name" 
              value={settings.ceo_name}
              onChange={(e) => setSettings({ ...settings, ceo_name: e.target.value })} 
            />
            <Input 
              label="CEO Image URL" 
              value={settings.ceo_image}
              onChange={(e) => setSettings({ ...settings, ceo_image: e.target.value })} 
            />
            <Input 
              label="CEO Subtitle" 
              value={settings.ceo_subtitle}
              onChange={(e) => setSettings({ ...settings, ceo_subtitle: e.target.value })} 
            />
            <Textarea 
              label="CEO Quote" 
              rows={2} 
              value={settings.ceo_quote}
              onChange={(e) => setSettings({ ...settings, ceo_quote: e.target.value })} 
            />
            <Input 
              label="Team Section Title" 
              value={settings.team_title}
              onChange={(e) => setSettings({ ...settings, team_title: e.target.value })} 
            />
            <Textarea 
              label="Team Section Subtitle" 
              rows={2} 
              value={settings.team_subtitle}
              onChange={(e) => setSettings({ ...settings, team_subtitle: e.target.value })} 
            />
          </div>
        </div>
        )}

        {activeTab === "team" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3 flex justify-between items-center">
            Team Members
          </h3>
          <div className="space-y-6">
            {team.map((member, index) => (
              <div key={member.id} className="p-4 bg-zinc-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-lg space-y-4 relative group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <UserCircle className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Member {index + 1}</span>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => handleRemoveTeamMember(member.id)}
                    className="p-1.5 text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-md transition-colors"
                    title="Remove Member"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Name" 
                    value={member.name}
                    onChange={(e) => handleTeamChange(member.id, "name", e.target.value)} 
                  />
                  <Input 
                    label="Role" 
                    value={member.role}
                    onChange={(e) => handleTeamChange(member.id, "role", e.target.value)} 
                  />
                </div>
                <Input 
                  label="Image URL (or path)" 
                  value={member.image}
                  onChange={(e) => handleTeamChange(member.id, "image", e.target.value)} 
                />
              </div>
            ))}
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full border-dashed py-8 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              onClick={handleAddTeamMember}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Team Member
            </Button>
          </div>
        </div>
        )}

        {activeTab === "space" && (
        <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
          <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-900 dark:text-white font-bold border-b border-black/10 dark:border-white/10 pb-3 flex justify-between items-center">
            Our Space
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <Input 
              label="Space Tag" 
              value={settings.space_tag}
              onChange={(e) => setSettings({ ...settings, space_tag: e.target.value })} 
            />
            <Input 
              label="Space Title" 
              value={settings.space_title}
              onChange={(e) => setSettings({ ...settings, space_title: e.target.value })} 
            />
            <Textarea 
              label="Space Subtitle" 
              rows={2} 
              value={settings.space_subtitle}
              onChange={(e) => setSettings({ ...settings, space_subtitle: e.target.value })} 
            />
            <Input 
              label="Space Heading" 
              value={settings.space_heading}
              onChange={(e) => setSettings({ ...settings, space_heading: e.target.value })} 
            />
            <Textarea 
              label="Space Paragraph" 
              rows={3} 
              value={settings.space_paragraph}
              onChange={(e) => setSettings({ ...settings, space_paragraph: e.target.value })} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-black/10 dark:border-white/10">
              <Input 
                label="Feature 1 Title" 
                value={settings.feature_1_title}
                onChange={(e) => setSettings({ ...settings, feature_1_title: e.target.value })} 
              />
              <Input 
                label="Feature 1 Description" 
                value={settings.feature_1_desc}
                onChange={(e) => setSettings({ ...settings, feature_1_desc: e.target.value })} 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="Feature 2 Title" 
                value={settings.feature_2_title}
                onChange={(e) => setSettings({ ...settings, feature_2_title: e.target.value })} 
              />
              <Input 
                label="Feature 2 Description" 
                value={settings.feature_2_desc}
                onChange={(e) => setSettings({ ...settings, feature_2_desc: e.target.value })} 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="Feature 3 Title" 
                value={settings.feature_3_title}
                onChange={(e) => setSettings({ ...settings, feature_3_title: e.target.value })} 
              />
              <Input 
                label="Feature 3 Description" 
                value={settings.feature_3_desc}
                onChange={(e) => setSettings({ ...settings, feature_3_desc: e.target.value })} 
              />
            </div>
          </div>
        </div>
        )}

        <div className="flex justify-end pt-4">
          <Button type="submit" size="md" className="gap-2">
            <Save className="w-4 h-4" />
            <span>Save About Content</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
