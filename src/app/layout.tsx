import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  variable: "--font-jetbrains-mono",
});


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
  openGraph: {
    title: "My Portfolio",
    description: "Frontend Developer Portfolio built with Next.js and TailwindCSS.",
    url: "https://portfolio.vipul.com",
    siteName: "My Portfolio",
    images: [
      {
        url: "https://portfolio.vipul.com/assets/vipul_photo/Vipul_Img.png",
        width: 1200,
        height: 630,
        alt: "Vipul Portfolio Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "Frontend Developer Portfolio built with Next.js and TailwindCSS.",
    images: ["https://portfolio.vipul.com/assets/vipul_photo/Vipul_Img.png"],
    creator: "@vipulhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={`text-white text-shadow: 0 0 5px rgba(0,0,0,0.5)
          bg-gradient-to-r
          from-[#442960]
          via-[#2F0743]
          to-[#41295a]
          animate-gradient
          bg-[length:200%_200%]
        `}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
