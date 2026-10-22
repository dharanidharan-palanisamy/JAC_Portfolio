"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget_range: "$50k - $100k",
    service_type: "Commercial Production",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const budgetOptions = [
    "Under $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k - $250k",
    "$250k+",
  ];

  const serviceOptions = [
    "Graphic Design",
    "App Development",
    "Website Development",
    "SEO Marketing",
    "UI / UX Design",
    "Digital Marketing",
    "Social Media Management",
    "Cinematography & Video",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate inquiry submission or Supabase insertion
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-black/10 dark:border-white/10 p-8 sm:p-12 text-center rounded-sm space-y-4 backdrop-blur-md">
        <div className="w-16 h-16 mx-auto rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
          Brief Received
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to JAC-MEDIALAND. Our executive producer will review your project requirements and connect within 24 business hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              budget_range: "$50k - $100k",
              service_type: "Commercial Production",
              message: "",
            });
          }}
          className="mt-4"
        >
          Send Another Brief
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Your Name *"
          placeholder="e.g. Elena Rostova"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <Input
          label="Corporate / Work Email *"
          type="email"
          placeholder="e.g. elena@company.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Company or Brand"
          placeholder="e.g. AURA Motors"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />

        <div className="space-y-1.5">
          <label className="block text-xs uppercase tracking-wider font-medium text-zinc-600 dark:text-zinc-400">
            Estimated Budget
          </label>
          <select
            value={formData.budget_range}
            onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
            className="w-full bg-zinc-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-sm px-4 py-2.5 text-sm text-zinc-900 dark:text-white transition-colors duration-200 focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs uppercase tracking-wider font-medium text-zinc-600 dark:text-zinc-400">
          Primary Production Focus
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {serviceOptions.map((svc) => {
            const isSelected = formData.service_type === svc;
            return (
              <button
                type="button"
                key={svc}
                onClick={() => setFormData({ ...formData, service_type: svc })}
                className={`text-xs px-3 py-2.5 text-left rounded-sm border transition-all cursor-pointer ${
                  isSelected
                    ? "border-zinc-900 dark:border-white bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold"
                    : "border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-black/30 text-zinc-600 dark:text-zinc-400 hover:border-black/20 dark:border-white/20 hover:text-zinc-900 dark:text-white"
                }`}
              >
                {svc}
              </button>
            );
          })}
        </div>
      </div>

      <Textarea
        label="Project Overview & Deliverables *"
        placeholder="Tell us about your creative concept, timeline, targeted locations, and any technical scope requirements..."
        rows={5}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <Button
        type="submit"
        size="lg"
        isLoading={isSubmitting}
        className="w-full sm:w-auto"
      >
        <span>Submit Production Brief</span>
        <Send className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
