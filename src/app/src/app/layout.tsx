import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Perfect Art Match Zürich | Where Artists and Art Lovers Connect",
  description:
    "We're the match-makers of the Art World! Discover contemporary artworks from featured artists in our infinite gallery. Based in Zürich, Switzerland."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
