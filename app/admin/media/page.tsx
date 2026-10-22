"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Upload, Copy, Check, Trash2, ExternalLink } from "lucide-react";
import { MOCK_MEDIA_ASSETS } from "@/lib/utils/mock-data";
import { MediaAsset } from "@/types";
import { AdminHeader } from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { formatBytes } from "@/lib/utils/formatters";

export default function AdminMediaPage() {
  const [assets, setAssets] = useState<MediaAsset[]>(MOCK_MEDIA_ASSETS);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [newUrl, setNewUrl] = useState("");
  const [filename, setFilename] = useState("");
  const [altText, setAltText] = useState("");

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddAsset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl) return;

    const newAsset: MediaAsset = {
      id: `m-${Date.now()}`,
      filename: filename || newUrl.split("/").pop() || "upload_still.jpg",
      file_url: newUrl,
      file_size: 2100000,
      mime_type: "image/jpeg",
      alt_text: altText,
      created_at: new Date().toISOString(),
    };

    setAssets([newAsset, ...assets]);
    setNewUrl("");
    setFilename("");
    setAltText("");
    setIsUploadOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this media asset?")) {
      setAssets(assets.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <AdminHeader
        title="Media Asset Library"
        description="Browse, upload, and reference high-resolution project assets and architecture diagrams."
        actions={
          <Button size="sm" onClick={() => setIsUploadOpen(true)}>
            <Upload className="w-3.5 h-3.5 mr-1" />
            <span>Add Media Asset</span>
          </Button>
        }
      />

      {/* Asset Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="rounded-xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 overflow-hidden flex flex-col justify-between group hover:border-black/20 dark:hover:border-white/20 transition-colors shadow-sm"
          >
            <div className="relative aspect-[16/10] bg-zinc-100 dark:bg-black">
              <Image
                src={asset.file_url}
                alt={asset.alt_text || asset.filename}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 space-y-3 bg-white dark:bg-zinc-950">
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-white uppercase truncate font-mono">
                  {asset.filename}
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-500 mt-1">
                  <span>{formatBytes(asset.file_size)}</span>
                  <span>{asset.mime_type}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <button
                  onClick={() => handleCopy(asset.id, asset.file_url)}
                  className="flex items-center gap-1 text-[10px] font-mono uppercase text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {copiedId === asset.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={asset.file_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:text-white"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => handleDelete(asset.id)}
                    className="text-zinc-500 dark:text-zinc-500 hover:text-rose-400 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        title="Add Media Asset"
        description="Add a high-resolution still or video URL to the media library."
      >
        <form onSubmit={handleAddAsset} className="space-y-4">
          <Input
            label="Image / Media URL *"
            placeholder="https://images.unsplash.com/..."
            required
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />

          <Input
            label="Filename"
            placeholder="project_master_frame.jpg"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />

          <Input
            label="Alt Text / Caption"
            placeholder="Cinematic anamorphic frame"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
          />

          <div className="flex justify-end gap-3 pt-4 border-t border-black/10 dark:border-white/10">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsUploadOpen(false)}>
              Cancel
            </Button>
            <Button size="sm" type="submit">
              Save to Library
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
