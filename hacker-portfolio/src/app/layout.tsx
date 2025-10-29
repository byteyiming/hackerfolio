import type { Metadata, Viewport } from "next";
import type { MetadataRoute } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScanLines from "./_components/background/ScanLines";
import MatrixRainClient from "./_components/background/MatrixRainClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  // Read site info from root JSON (server-side only)
  const site = (await import("../../portfolio-data.json")).default?.site ?? {};
  const title: string = site.siteTitle ?? "Yiming Gao - Software Engineer & AI Developer";
  const description: string = site.description ?? "Portfolio of Yiming Gao - Software Engineer & AI Developer.";
  const url: string = site.url ?? "https://example.com";
  const ogImage: string = site.ogImage ?? "/og-image.png";
  const themeColor: string = site.themeColor ?? "#00ff00";

  return {
    title,
    description,
    metadataBase: new URL(url),
    keywords: Array.isArray(site.keywords) ? (site.keywords as string[]) : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [{ url: ogImage }],
    },
    other: site.author ? { author: site.author as string } : undefined,
  };
}

export async function generateViewport(): Promise<Viewport> {
  const site = (await import("../../portfolio-data.json")).default?.site ?? {};
  return {
    themeColor: site.themeColor ?? "#00ff00",
    colorScheme: (site.colorScheme as Viewport["colorScheme"]) ?? "dark",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MatrixRainClient />
        <main style={{ position: "relative", zIndex: 2 }}>{children}</main>
        <ScanLines />
      </body>
    </html>
  );
}
