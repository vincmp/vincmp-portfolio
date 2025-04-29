import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vincmp.dev/"),
  title: "Vicente M | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Vicente Matheus, desenvolvedor Full Stack especializado em criar soluções web modernas e eficientes",
  keywords:
    "desenvolvedor full stack, programador web, nextjs, react, typescript, portfolio desenvolvedor",
  authors: [{ name: "Vicente M" }],
  creator: "Vicente M",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/assets/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/assets/favicon/favicon-16x16.png"],
    other: [
      {
        rel: "icon",
        url: "/assets/favicon/favicon-16x16.png",
      },
    ],
  },
  manifest: "/assets/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.vincmp.dev/",
    title: "Vicente M | Desenvolvedor Full Stack",
    description:
      "Portfólio profissional de Vicente Matheus, desenvolvedor Full Stack especializado em criar soluções web modernas e eficientes",
    siteName: "Portfolio Vicente M",
    images: [
      {
        url: "/assets/images/summarycard.webp",
        width: 1200,
        height: 630,
        alt: "Vicente M - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicente M | Desenvolvedor Full Stack",
    description:
      "Portfólio profissional de Vicente Matheus, desenvolvedor Full Stack especializado em criar soluções web modernas e eficientes",
    images: ["/assets/images/summarycard.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
