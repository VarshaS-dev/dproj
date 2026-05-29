import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DriveOS Mobility — Engineering the Future of Mobility",
  description:
    "DriveOS Mobility is a leading automotive technology company specializing in Software Defined Vehicles, AI for Mobility, Embedded Systems, and EV Technologies. Driving the future of connected, intelligent transportation.",
  keywords: [
    "Software Defined Vehicles",
    "Automotive Software",
    "Embedded Systems",
    "AI Mobility",
    "EV Technology",
    "Connected Vehicles",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
