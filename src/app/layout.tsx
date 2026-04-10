import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Freelance Portfolio | Modern Web & AI Solutions",
  description: "I build modern business websites, AI automation tools, and scalable web apps using Next.js and Python. Solving complex problems with clean code and stunning design.",
  keywords: ["Freelance Developer", "Kochi Developer", "Next.js Expert", "Python AI Automation", "Kochi Freelance Web Designer"],
  authors: [{ name: "Aswanth PV" }],
  openGraph: {
    title: "Premium Freelance Portfolio | Modern Web & AI Solutions",
    description: "I build modern business websites, AI automation tools, and scalable web apps using Next.js and Python.",
    url: "https://yourportfolio.com",
    siteName: "DevPortfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevPortfolio - Modern Web & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Freelance Portfolio | Modern Web & AI Solutions",
    description: "I build modern business websites, AI automation tools, and scalable web apps.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://yourportfolio.com"),
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aswanth PV",
  "url": "https://yourportfolio.com",
  "jobTitle": "Full Stack Developer & AI Specialist",
  "description": "Specializing in Next.js, Python, and AI automation tools for modern businesses.",
  "sameAs": [
    "https://github.com/rightaswanth",
    "https://www.linkedin.com/in/aswanthpv",
    "https://www.instagram.com/aswanthp.v/"
  ]
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>

  );
}
