"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAdmin: boolean;
  signInWithPassword: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  demoLogin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDemoAdmin, setIsDemoAdmin] = useState(false);

  useEffect(() => {
    // Check local storage for demo admin flag
    const storedDemo = typeof window !== "undefined" ? localStorage.getItem("jac_demo_admin") : null;
    if (storedDemo === "true") {
      setIsDemoAdmin(true);
      setUser({
        id: "demo-admin-id",
        app_metadata: {},
        user_metadata: { name: "Studio Director" },
        aud: "authenticated",
        created_at: new Date().toISOString(),
        email: "director@jac-medialand.com",
      } as User);
    }

    try {
      const supabase = createClient();
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user);
        }
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser(session.user);
          setIsDemoAdmin(false);
        } else if (!storedDemo) {
          setUser(null);
        }
      });

      return () => {
        subscription?.unsubscribe();
      };
    } catch {
      setIsLoading(false);
    }
  }, []);

  const signInWithPassword = async (email: string, password: string) => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) return { error: error.message };
      return { error: null };
    } catch (err: unknown) {
      return { error: err instanceof Error ? err.message : "Failed to connect to authentication server" };
    }
  };

  const demoLogin = () => {
    setIsDemoAdmin(true);
    const mockUser = {
      id: "demo-admin-id",
      app_metadata: {},
      user_metadata: { name: "Studio Director" },
      aud: "authenticated",
      created_at: new Date().toISOString(),
      email: "director@jac-medialand.com",
    } as User;
    setUser(mockUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("jac_demo_admin", "true");
    }
  };

  const signOut = async () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jac_demo_admin");
    }
    setIsDemoAdmin(false);
    setUser(null);
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAdmin: !!user || isDemoAdmin,
        signInWithPassword,
        signOut,
        demoLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
