import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { profile } from "@/data/portfolio";
import "./globals.css";

const title = `${profile.name} | Full-stack and AI portfolio`;
const description = profile.description;

// Vercel sets this variable. Set the URL here if you add a custom domain elsewhere.
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(host ? `https://${host}` : "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_SG", siteName: profile.name },
  twitter: { card: "summary_large_image", title, description },
};

// Light by default. Applies a saved dark choice before first paint.
const themeScript = `try{if(localStorage.theme==="dark")document.documentElement.classList.add("dark")}catch{}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
