import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://micego.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MICEGO™ | Corporate Experiences & Incentive Travel",
    template: "%s | MICEGO™",
  },
  description:
    "MICEGO designs and coordinates corporate incentives, meetings, conferences, dealer meets, leadership offsites, employee engagement and business events in India and internationally.",
  keywords: [
    "corporate MICE India",
    "incentive travel India",
    "corporate events",
    "dealer meets",
    "leadership offsites",
    "conference management",
    "employee engagement events",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MICEGO",
    title: "MICEGO™ — Corporate Experiences, Simplified.",
    description:
      "Where business meets experience. Corporate incentives, meetings, conferences, dealer meets and leadership programmes—coordinated from brief to delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MICEGO™ — Corporate Experiences, Simplified.",
    description:
      "Corporate incentives, meetings, conferences, dealer meets and leadership programmes—coordinated from brief to delivery.",
  },
  icons: {
    icon: "/micego-logo.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101b5a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
