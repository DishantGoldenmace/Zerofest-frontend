import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroFest — Live Waste Collection Monitoring",
  description:
    "Real-time waste detection monitoring for the ZeroFest event. Track plastic, paper, aluminum, and other waste collections live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
