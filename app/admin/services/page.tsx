"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit3, Trash2, CheckCircle2 } from "lucide-react";
import { MOCK_SERVICES } from "@/lib/utils/mock-data";
import { Service } from "@/types";
import { AdminHeader } from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>(MOCK_SERVICES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("jac_services");
    if (saved) {
      setServices(JSON.parse(saved));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("jac_services", JSON.stringify(services));
    }
  }, [services, hasLoaded]);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    short_description: "",
    full_description: "",
    deliverablesText: "",
    image_url: "",
  });

  const openNew = () => {
    setEditingService(null);
    setFormData({
      title: "",
      slug: "",
      short_description: "",
      full_description: "",
      deliverablesText: "Architecture Diagram\nCloud Deployment\nSource Code Repository",
      image_url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    });
    setIsModalOpen(true);
  };

  const openEdit = (svc: Service) => {
    setEditingService(svc);
    setFormData({
      title: svc.title,
      slug: svc.slug,
      short_description: svc.short_description,
      full_description: svc.full_description,
      deliverablesText: svc.deliverables.join("\n"),
      image_url: svc.image_url || "",
    });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const deliverables = formData.deliverablesText
      .split("\n")
      .map((d) => d.trim())
      .filter(Boolean);

    if (editingService) {
      setServices(
        services.map((s) =>
          s.id === editingService.id
            ? {
                ...s,
                title: formData.title,
                slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-"),
                short_description: formData.short_description,
                full_description: formData.full_description,
                deliverables,
                image_url: formData.image_url,
              }
            : s
        )
      );
    } else {
      const newSvc: Service = {
        id: `s-${Date.now()}`,
        title: formData.title,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-"),
        short_description: formData.short_description,
        full_description: formData.full_description,
        deliverables,
        icon_name: "Briefcase",
        image_url: formData.image_url,
        order_index: services.length + 1,
        created_at: new Date().toISOString(),
      };
      setServices([...services, newSvc]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this service?")) {
      setServices(services.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <AdminHeader
        title="IT Capabilities & Services"
        description="Configure enterprise cloud services, capabilities, and infrastructure specifications."
        actions={
          <Button size="sm" onClick={openNew}>
            <Plus className="w-3.5 h-3.5 mr-1" />
            <span>Add Service</span>
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 space-y-4 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold uppercase text-zinc-900 dark:text-white font-mono">
                  {svc.title}
                </h3>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openEdit(svc)}
                    className="p-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-xs hover:bg-black/5 dark:bg-white/5 cursor-pointer"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(svc.id)}
                    className="p-1 text-zinc-600 dark:text-zinc-400 hover:text-rose-400 rounded-xs hover:bg-black/5 dark:bg-white/5 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {svc.short_description}
              </p>

              <div className="pt-2 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Deliverables ({svc.deliverables.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {svc.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-zinc-700 dark:text-zinc-300 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2 py-0.5 rounded-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-500">
              <span>Slug: /{svc.slug}</span>
              <span>Order #{svc.order_index}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingService ? "Edit Service" : "New IT Service"}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            label="Service Title *"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />

          <Input
            label="URL Slug"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          />

          <Input
            label="Cover Image URL"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
          />

          <Textarea
            label="Short Summary *"
            required
            rows={2}
            value={formData.short_description}
            onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
          />

          <Textarea
            label="Full Description *"
            required
            rows={4}
            value={formData.full_description}
            onChange={(e) => setFormData({ ...formData, full_description: e.target.value })}
          />

          <Textarea
            label="Deliverables (One per line)"
            rows={4}
            value={formData.deliverablesText}
            onChange={(e) => setFormData({ ...formData, deliverablesText: e.target.value })}
          />

          <div className="flex justify-end gap-3 pt-4 border-t border-black/10 dark:border-white/10">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button size="sm" type="submit">
              Save Service
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
