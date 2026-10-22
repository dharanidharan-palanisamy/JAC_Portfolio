import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JAC MediaLand IT Solutions // Enterprise Software & Cloud Engineering",
    template: "%s | JAC MediaLand IT Solutions",
  },
  description:
    "Premium IT engineering consultancy delivering scalable enterprise software, high-performance web applications, and resilient cloud infrastructure.",
  keywords: [
    "software engineering",
    "cloud architecture",
    "enterprise IT solutions",
    "full-stack development",
    "React Next.js agency",
    "tech consultancy",
    "digital transformation",
  ],
  authors: [{ name: "JAC MediaLand IT Solutions" }],
  creator: "JAC MediaLand IT Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jac-medialand.com",
    siteName: "JAC MediaLand IT Solutions",
    title: "JAC MediaLand IT Solutions // Software & IT Solutions",
    description:
      "Engineering robust, scalable, and premium software applications for modern enterprises.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "JAC.TECH Global Infrastructure",
      },
    ],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
