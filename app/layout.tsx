import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://www.lesfreres-taloches.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Les Frères Taloches | Artisan BTP — Rénovation La Capelle (02)",
    template: "%s | Les Frères Taloches",
  },
  description:
    "Artisan BTP certifié RGE à La Capelle (Aisne). Maçonnerie, gros œuvre, second œuvre, carrelage, peinture, plomberie, électricité. Interventions à Hirson, Fourmies, Avesnes-sur-Helpe et environs.",
  keywords: [
    "artisan BTP La Capelle",
    "rénovation intérieure Aisne",
    "maçonnerie La Capelle",
    "second œuvre 02",
    "entreprise rénovation Hirson",
    "ravalement façade Aisne",
    "carrelage Fourmies",
    "peinture Avesnes-sur-Helpe",
    "artisan certifié RGE",
    "travaux rénovation Thiérache",
  ],
  authors: [{ name: "Les Frères Taloches" }],
  creator: "Les Frères Taloches",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Les Frères Taloches",
    title: "Les Frères Taloches | Artisan BTP — Rénovation en Thiérache",
    description:
      "Maçonnerie, gros œuvre, second œuvre et rénovation complète autour de La Capelle. Certifié RGE.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Les Frères Taloches",
  description:
    "Artisan BTP certifié RGE : maçonnerie, gros œuvre, second œuvre, carrelage, peinture, plomberie, électricité. Interventions en Thiérache (02).",
  url: siteUrl,
  telephone: "+33 3 23 00 00 00",
  email: "contact@lesfreres-taloches.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "La Capelle",
    postalCode: "02260",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "La Capelle" },
    { "@type": "City", name: "Hirson" },
    { "@type": "City", name: "Fourmies" },
    { "@type": "City", name: "Avesnes-sur-Helpe" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Reconnu Garant de l'Environnement (RGE)",
    },
  ],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="h-full"
    >
      <head>
        {/* Google Fonts — Playfair Display + Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
