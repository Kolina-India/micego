import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://micego.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MiceGo™ | Corporate Experiences, Simplified.",
    template: "%s | MiceGo™",
  },
  description:
    "Thoughtfully designed corporate incentives, conferences, leadership meets, employee engagement and business experiences—coordinated from brief to delivery.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MiceGo",
    title: "MiceGo™ — Corporate Experiences, Simplified.",
    description:
      "A more considered way to design, coordinate and deliver corporate experiences.",
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
