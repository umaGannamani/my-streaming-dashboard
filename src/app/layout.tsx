// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

// ✅ Proper Next.js metadata typing for SEO
export const metadata: Metadata = {
  title: "My Streaming Dashboard",
  description:
    "A simplified streaming dashboard built with Next.js 14, TypeScript, Tailwind, and the OMDb API.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen flex flex-col">
        {/* Global Header */}
        <Header />

        {/* Main content area */}
        <main className="flex-1 pt-20 px-4 md:px-8">{children}</main>

        {/* Optional footer could go here later */}
      </body>
    </html>
  );
}
