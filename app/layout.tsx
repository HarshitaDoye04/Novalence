import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const { version } = require("../package.json");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novalence.org"),
  title: {
    default: "Novalence — Regulatory Affairs Experts for the Pharmaceutical Industry",
    template: "%s | Novalence",
  },
  description:
    "Novalence is a Regulatory Affairs consultancy offering end-to-end compliance services for the Pharmaceutical Industry — including CTD dossier compilation, SOP drafting, regulatory strategy, and global submission support.",
  keywords: [
    "regulatory affairs",
    "pharmaceutical regulatory consultancy",
    "CTD dossier",
    "ACTD dossier",
    "regulatory compliance",
    "drug submission",
    "SOP drafting",
    "DMF documentation",
    "regulatory affairs outsourcing",
    "Novalence",
  ],
  authors: [{ name: "Novalence Regulatory Advisory" }],
  creator: "Novalence Regulatory Advisory",
  publisher: "Novalence Regulatory Advisory",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://novalence.org",
    siteName: "Novalence",
    title: "Novalence — Regulatory Affairs Experts for the Pharmaceutical Industry",
    description:
      "Regulatory Affairs experts offering a full suite of compliance services for the Pharmaceutical Industry.",
    images: [
      {
        url: "/office.jpg",
        width: 1200,
        height: 630,
        alt: "Novalence — Regulatory Affairs Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novalence — Regulatory Affairs Experts for the Pharmaceutical Industry",
    description:
      "Regulatory Affairs experts offering a full suite of compliance services for the Pharmaceutical Industry.",
    images: ["/office.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (!window.__appVersionLogged) { console.log("Novalence v${version}"); window.__appVersionLogged = true; }`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
