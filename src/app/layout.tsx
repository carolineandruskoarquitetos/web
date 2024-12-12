import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Caroline Andrusko | Arquitetos",
  description:
    "Em 2017, Caroline inaugurou seu novo escritório. Caroline Andrusko Arquitetos é fruto do seu crescimento profissional e da sua capacidade de compreender a identidade única de cada cliente. Cuidado com os detalhes e dedicação em busca da perfeição em cada projeto são sua maior marca.",
  keywords: [
    "caroline andrusko",
    "arquitetos",
    "curitiba",
    "arquitetura",
    "construção civil",
    "projetos arquitetônicos",
    "interiores contemporâneos",
    "projetos comerciais curitiba",
    "arquitetura moderna",
    "arquitetura sustentável",
    "acompanhamento de obra",
    "reforma de imóveis",
    "paisagismo em Curitiba",
    "projetos residenciais curitiba",
    "projetos comerciais curitiba",
    "mostras de arquitetura",
  ],
  verification: {
    google: "8fgpYBOoe9Lg_H-DUvE5rz5D_HNXFsm1gvD0EHBGX5I",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    // TODO: Update favicon
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // TODO: Add apple icons
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://carolineandrusko.com.br",
    siteName: "Caroline Andrusko | Arquitetos",
    title: "Caroline Andrusko | Arquitetos",
    description:
      "Em 2017, Caroline inaugurou seu novo escritório. Caroline Andrusko Arquitetos é fruto do seu crescimento profissional e da sua capacidade de compreender a identidade única de cada cliente.",
    images: [
      {
        url: "/logos/dark-gray.png",
        width: 1200,
        height: 630,
        alt: "Caroline Andrusko Arquitetos",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
