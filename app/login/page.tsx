"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, KeyRound, Lock, Mail, ShieldAlert, Sparkles } from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const { signInWithPassword, demoLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const res = await signInWithPassword(email, password);
    if (res.error) {
      setError(res.error);
      setIsLoading(false);
    } else {
      router.push("/admin/dashboard");
    }
  };

  const handleDemoSignIn = () => {
    demoLogin();
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#08080b] flex flex-col items-center justify-center p-6 relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.06),transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Back to Public Site */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-zinc-500 dark:text-zinc-500 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Studio Site</span>
        </Link>

        {/* Brand Heading */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
              JAC MEDIALAND
            </span>
            <span className="text-[10px] uppercase tracking-widest font-mono bg-black/10 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded-xs">
              CMS Portal
            </span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-mono">
            Authorized Studio Production Staff Only
          </p>
        </div>

        {/* Login Box */}
        <div className="p-8 rounded-sm bg-white dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-xl space-y-6">
          {error && (
            <div className="p-4 rounded-sm bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-xs">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Staff Email"
              type="email"
              placeholder="director@jac-medialand.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              isLoading={isLoading}
            >
              <span>Authenticate Session</span>
              <Lock className="w-3.5 h-3.5 ml-2" />
            </Button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-3">
            <p className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 text-center uppercase tracking-wider">
              Preview Mode Demo Access
            </p>
            <button
              type="button"
              onClick={handleDemoSignIn}
              className="w-full py-2.5 px-4 rounded-sm border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>One-Click Demo Admin Login</span>
            </button>
          </div>
        </div>

        <p className="text-[11px] text-zinc-600 font-mono text-center">
          Encrypted AES-256 session tokens. Secured by Supabase Auth.
        </p>
      </div>
    </div>
  );
}
