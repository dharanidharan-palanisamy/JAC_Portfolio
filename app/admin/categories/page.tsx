"use client";

import React, { useState } from "react";
import { Plus, Edit3, Trash2, Tag } from "lucide-react";
import { MOCK_CATEGORIES, MOCK_PROJECTS } from "@/lib/utils/mock-data";
import { Category } from "@/types";
import { AdminHeader } from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const openNew = () => {
    setEditingCategory(null);
    setName("");
    setSlug("");
    setDescription("");
    setIsModalOpen(true);
  };

  const openEdit = (cat: Category) => {
    setEditingCategory(cat);
    setName(cat.name);
    setSlug(cat.slug);
    setDescription(cat.description || "");
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(
        categories.map((c) =>
          c.id === editingCategory.id
            ? {
                ...c,
                name,
                slug: slug || name.toLowerCase().replace(/\s+/g, "-"),
                description,
              }
            : c
        )
      );
    } else {
      const newCat: Category = {
        id: `c-${Date.now()}`,
        name,
        slug: slug || name.toLowerCase().replace(/\s+/g, "-"),
        description,
        order_index: categories.length + 1,
        created_at: new Date().toISOString(),
      };
      setCategories([...categories, newCat]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure? Existing projects in this category will become unassigned.")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <AdminHeader
        title="Taxonomies & Domains"
        description="Organize solutions into service verticals and technical classifications."
        actions={
          <Button size="sm" onClick={openNew}>
            <Plus className="w-3.5 h-3.5 mr-1" />
            <span>New Category</span>
          </Button>
        }
      />

      <div className="rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs font-medium">
          <thead className="bg-zinc-100 dark:bg-zinc-900 border-b border-black/10 dark:border-white/10 uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            <tr>
              <th className="py-3.5 px-4">Category Name</th>
              <th className="py-3.5 px-4">URL Slug</th>
              <th className="py-3.5 px-4">Description</th>
              <th className="py-3.5 px-4">Projects Count</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 dark:divide-white/5">
            {categories.map((cat) => {
              const projectCount = MOCK_PROJECTS.filter((p) => p.category_id === cat.id).length;
              return (
                <tr key={cat.id} className="hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="py-3.5 px-4 font-bold text-zinc-900 dark:text-white uppercase text-sm">
                    {cat.name}
                  </td>
                  <td className="py-3.5 px-4 text-zinc-600 dark:text-zinc-400 font-mono">/{cat.slug}</td>
                  <td className="py-3.5 px-4 text-zinc-600 dark:text-zinc-400 max-w-xs truncate">
                    {cat.description || "—"}
                  </td>
                  <td className="py-3.5 px-4 text-zinc-700 dark:text-zinc-300">
                    <span className="bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-sm border border-black/10 dark:border-white/10">
                      {projectCount} projects
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEdit(cat)}
                        className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-xs hover:bg-black/5 dark:bg-white/5 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-rose-400 rounded-xs hover:bg-black/5 dark:bg-white/5 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingCategory ? "Edit Category" : "New Category"}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            label="Category Name *"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Slug (URL path)"
            placeholder="auto-generated-if-empty"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />

          <Textarea
            label="Description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex justify-end gap-3 pt-4 border-t border-black/10 dark:border-white/10">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button size="sm" type="submit">
              Save Category
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
