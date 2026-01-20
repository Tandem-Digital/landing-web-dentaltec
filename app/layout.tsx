import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://dentaltec.tandemdigital.net"),
  title: {
    default: "DentalTec - Sistema de Gestión Odontológica | Plataforma para Odontólogos e Instituciones",
    template: "%s | DentalTec",
  },
  description:
    "DentalTec es la plataforma líder de gestión odontológica en Argentina. Conecta odontólogos, círculos e instituciones con obras sociales. Reduce débitos 64%, automatiza facturación y auditorías en tiempo real. 2000+ profesionales activos.",
  keywords: [
    "gestión odontológica",
    "software dental",
    "sistema odontológico",
    "facturación dental",
    "obras sociales odontología",
    "historia clínica digital",
    "odontograma digital",
    "validación de prácticas",
    "auditoría odontológica",
    "liquidación odontólogos",
    "círculo odontológico",
    "OSDE",
    "Swiss Medical",
    "Jerárquicos",
    "plataforma dental Argentina",
    "software consultorio dental",
    "gestión clínica dental",
  ],
  authors: [{ name: "Tándem Digital" }],
  creator: "Tándem Digital",
  publisher: "DentalTec",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.app",
  applicationName: "DentalTec",
  referrer: "origin-when-cross-origin",
  category: "healthcare",
  classification: "Healthcare Technology",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://dentaltec.tandemdigital.net",
    siteName: "DentalTec",
    title: "DentalTec - Sistema de Gestión Odontológica | Plataforma para Odontólogos e Instituciones",
    description:
      "Plataforma líder de gestión odontológica en Argentina. Reduce débitos 64%, automatiza facturación y auditorías. 2000+ profesionales activos. Integración con OSDE, Swiss Medical, Jerárquicos y más.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DentalTec - Plataforma de Gestión Odontológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalTec - Sistema de Gestión Odontológica",
    description:
      "Plataforma líder de gestión odontológica en Argentina. Reduce débitos 64%, automatiza facturación. 2000+ profesionales activos.",
    images: ["/twitter-image.jpg"],
    creator: "@tandemdigital",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "DentalTec",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "ARS",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          ratingCount: "30",
        },
        description:
          "Plataforma de gestión odontológica que conecta odontólogos, círculos e instituciones con obras sociales en Argentina.",
      },
      {
        "@type": "Organization",
        "@id": "https://dentaltec.tandemdigital.net/#organization",
        name: "DentalTec",
        legalName: "Tándem Digital",
        url: "https://dentaltec.tandemdigital.net",
        logo: {
          "@type": "ImageObject",
          url: "https://dentaltec.tandemdigital.net/dentaltec-logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+54-264-505-6518",
          contactType: "customer service",
          email: "soporte.dentaltec@tandemdigital.net",
          areaServed: "AR",
          availableLanguage: ["Spanish"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Juan",
          addressCountry: "AR",
        },
        sameAs: [
          "https://youtube.com/playlist?list=PL4MN1RxFkCQqzCEsz2TGIlTROOwmLFdBG",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://dentaltec.tandemdigital.net/#website",
        url: "https://dentaltec.tandemdigital.net",
        name: "DentalTec",
        description:
          "Sistema de gestión odontológica para profesionales e instituciones en Argentina",
        publisher: {
          "@id": "https://dentaltec.tandemdigital.net/#organization",
        },
        inLanguage: "es-AR",
      },
      {
        "@type": "Service",
        serviceType: "Dental Practice Management Software",
        provider: {
          "@id": "https://dentaltec.tandemdigital.net/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Argentina",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios DentalTec",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gestión para Odontólogos",
                description:
                  "Sistema de carga de prácticas, validación instantánea y gestión de historia clínica digital",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gestión para Instituciones",
                description:
                  "Supervisión en tiempo real, facturación automática y liquidaciones a prestadores",
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
