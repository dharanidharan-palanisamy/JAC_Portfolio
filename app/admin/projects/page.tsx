"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Search, Edit3, Trash2, Check, X, ExternalLink } from "lucide-react";
import { MOCK_PROJECTS, MOCK_CATEGORIES } from "@/lib/utils/mock-data";
import { ProjectWithCategory } from "@/types";
import { AdminHeader } from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectWithCategory[]>(MOCK_PROJECTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectWithCategory | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("jac_projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("jac_projects", JSON.stringify(projects));
    }
  }, [projects, hasLoaded]);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    client: "",
    year: 2025,
    category_id: MOCK_CATEGORIES[0].id,
    cover_image_url: "",
    video_url: "",
    description: "",
    director: "Julian Vance",
    dop: "Elena Rostova",
    colorist: "Kai Takahashi",
    is_featured: false,
    is_published: true,
  });

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === "all" || p.category_id === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const openNewModal = () => {
    setEditingProject(null);
    setFormData({
      title: "",
      slug: "",
      client: "",
      year: 2026,
      category_id: MOCK_CATEGORIES[0].id,
      cover_image_url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
      video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "",
      director: "Julian Vance",
      dop: "Elena Rostova",
      colorist: "Kai Takahashi",
      is_featured: false,
      is_published: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (project: ProjectWithCategory) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      slug: project.slug,
      client: project.client,
      year: project.year,
      category_id: project.category_id || MOCK_CATEGORIES[0].id,
      cover_image_url: project.cover_image_url,
      video_url: project.video_url || "",
      description: project.description,
      director: project.director || "",
      dop: project.dop || "",
      colorist: project.colorist || "",
      is_featured: project.is_featured,
      is_published: project.is_published,
    });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cat = MOCK_CATEGORIES.find((c) => c.id === formData.category_id);

    if (editingProject) {
      // Update
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingProject.id
            ? {
                ...p,
                ...formData,
                category: cat || p.category,
              }
            : p
        )
      );
    } else {
      // Create new
      const newP: ProjectWithCategory = {
        id: `p-${Date.now()}`,
        title: formData.title,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-"),
        client: formData.client,
        year: Number(formData.year),
        category_id: formData.category_id,
        category: cat,
        cover_image_url: formData.cover_image_url,
        video_url: formData.video_url,
        video_embed_id: "dQw4w9WgXcQ",
        description: formData.description,
        full_story: formData.description,
        director: formData.director,
        dop: formData.dop,
        editor: "Marcus Sterling",
        colorist: "Kai Takahashi",
        awards: [],
        stills: [],
        is_featured: formData.is_featured,
        is_published: formData.is_published,
        order_index: projects.length + 1,
        created_at: new Date().toISOString(),
      };
      setProjects([newP, ...projects]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const togglePublish = (id: string) => {
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, is_published: !p.is_published } : p))
    );
  };

  return (
    <div className="space-y-8">
      <AdminHeader
        title="Solutions Catalog"
        description="Manage, deploy, and monitor enterprise applications and cloud infrastructure."
        actions={
          <Button size="sm" onClick={openNewModal}>
            <Plus className="w-3.5 h-3.5 mr-1" />
            <span>Add New Project</span>
          </Button>
        }
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-sm bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-zinc-500 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search by title or client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-sm pl-9 pr-4 py-2 text-xs text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 font-mono"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs uppercase font-mono text-zinc-600 dark:text-zinc-400">Filter:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-zinc-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-sm px-3 py-1.5 text-xs text-zinc-200 font-mono focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Categories</option>
            {MOCK_CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="rounded-sm bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-medium">
            <thead className="bg-zinc-100 dark:bg-zinc-900 border-b border-black/10 dark:border-white/10 uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              <tr>
                <th className="py-4 px-6 font-semibold">Solution</th>
                <th className="py-3.5 px-4">Client</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Year</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Featured</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-black/5 dark:border-white/10 shrink-0 shadow-sm">
                        <Image
                          src={project.cover_image_url}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-bold text-zinc-900 dark:text-white uppercase text-sm truncate max-w-[180px]">
                        {project.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-zinc-700 dark:text-zinc-300 font-medium">{project.client}</td>
                  <td className="py-4 px-6">
                    <Badge variant="outline">{project.category?.name || "General"}</Badge>
                  </td>
                  <td className="py-4 px-6 text-zinc-500 dark:text-zinc-400">{project.year}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => togglePublish(project.id)}
                      className="cursor-pointer"
                    >
                      <Badge variant={project.is_published ? "success" : "warning"}>
                        {project.is_published ? "Published" : "Draft"}
                      </Badge>
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    {project.is_featured ? (
                      <span className="text-zinc-900 dark:text-zinc-100 font-bold">★ Featured</span>
                    ) : (
                      <span className="text-zinc-600">—</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={`/work/${project.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:text-white rounded-xs hover:bg-black/5 dark:bg-white/5"
                        title="View Live Page"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => openEditModal(project)}
                        className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-amber-400 rounded-xs hover:bg-black/5 dark:bg-white/5 cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-rose-400 rounded-xs hover:bg-black/5 dark:bg-white/5 cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit / Create Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingProject ? "Edit Project" : "New IT Project"}
        description="Provide metadata, video embeds, and credits for this project."
        maxWidth="2xl"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Project Title *"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <Input
              label="URL Slug"
              placeholder="auto-generated-if-blank"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <Input
              label="Launch Year"
              type="number"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
            />
            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-wider font-medium text-zinc-600 dark:text-zinc-400">
                Category
              </label>
              <select
                value={formData.category_id}
                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                className="w-full bg-zinc-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-sm px-4 py-2.5 text-sm text-zinc-900 dark:text-white"
              >
                {MOCK_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id} className="bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Input
            label="Cover Image URL *"
            required
            value={formData.cover_image_url}
            onChange={(e) => setFormData({ ...formData, cover_image_url: e.target.value })}
          />



          <Textarea
            label="Synopsis / Description *"
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />



          <div className="flex items-center gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <input
                type="checkbox"
                checked={formData.is_featured}
                onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                className="rounded-xs border-black/20 dark:border-white/20 text-zinc-900 focus:ring-zinc-900 dark:text-zinc-100 dark:focus:ring-zinc-100"
              />
              <span>Feature on Homepage</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                className="rounded-xs border-black/20 dark:border-white/20 text-zinc-900 focus:ring-zinc-900 dark:text-zinc-100 dark:focus:ring-zinc-100"
              />
              <span>Publish Publicly</span>
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-black/10 dark:border-white/10">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button size="sm" type="submit">
              Save Project
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
