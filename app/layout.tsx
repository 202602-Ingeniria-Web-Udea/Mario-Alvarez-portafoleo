import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import { dictionaries } from "@/lib/i18n";

// Root layout: page shell, metadata, and base background.
// Metadata uses the default language (Spanish); the client-side
// LanguageProvider takes over for in-page strings.
export const metadata: Metadata = {
  title: `${profile.name} — ${dictionaries.es.role}`,
  description: dictionaries.es.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
