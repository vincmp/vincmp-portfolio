import "./globals.css";
import { ThemeProvider } from "@/Components/ThemeChanger/ThemeProvider";
import type { Metadata } from "next";
import { SidebarProvider } from "@/Components/PageLayout/NavigationLayout/SidebarContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vincmp.dev/"),
  title: "Vicente M | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Vicente Matheus, desenvolvedor Full Stack com experiência em React, Next.js, TypeScript e Node.js. Especializado em criar aplicações web modernas, performáticas e escaláveis.",
  keywords:
    "desenvolvedor full stack, programador web, desenvolvedor frontend, backend, javascript, reactjs, typescript, nodejs, portfólio dev, aplicações web, Vicente Matheus, Vincmp",
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
      "Portfólio profissional de Vicente Matheus, desenvolvedor Full Stack com experiência em React, Next.js, TypeScript e Node.js. Especializado em criar aplicações web modernas, performáticas e escaláveis.",
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
      "Portfólio profissional de Vicente Matheus, desenvolvedor Full Stack com experiência em React, Next.js, TypeScript e Node.js. Especializado em criar aplicações web modernas, performáticas e escaláveis.",
    images: ["/assets/images/summarycard.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vicente Matheus",
              jobTitle: "Full Stack Developer",
              url: "https://www.vincmp.dev/",
              sameAs: [
                "https://github.com/vincmp",
                "https://www.linkedin.com/in/vincmpimenta/",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
