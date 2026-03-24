import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Undugu Triad Engineering | Modern Finishing & Engineering Solutions",
  description:
    "Undugu Triad Engineering offers engineering support, professional installation, and premium house finishing materials for residential, commercial, and industrial projects in Zimbabwe.",
  icons: {
    icon: "/Undugu%20Logo.png",
    shortcut: "/Undugu%20Logo.png",
    apple: "/Undugu%20Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
