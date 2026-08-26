import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Archivo({ subsets: ["latin", "latin-ext"], variable: "--font-display" });
const body = IBM_Plex_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "BEZAN | Stavební práce ve Frýdku-Místku", template: "%s | BEZAN" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: "BEZAN | Práce, na kterou je vidět", description: site.description, url: "/", siteName: "BEZAN", locale: "cs_CZ", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BEZAN stavební firma" }] },
  twitter: { card: "summary_large_image", title: "BEZAN | Práce, na kterou je vidět", description: site.description, images: ["/opengraph-image"] }
};

export const viewport: Viewport = { themeColor: "#e54016", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "ConstructionCompany", name: site.legalName, url: site.url, email: site.email, telephone: site.phone, address: { "@type": "PostalAddress", streetAddress: "Dlouhá 491", postalCode: "738 01", addressLocality: "Frýdek-Místek", addressCountry: "CZ" }, openingHours: "Mo-Fr 06:30-15:00", taxID: site.dic };
  return <html lang="cs"><body className={`${display.variable} ${body.variable}`}><Header />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
