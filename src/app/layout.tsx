import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

import { PageTransition } from "@/components/PageTransition";
// import { StairTransition } from "@/components/StairTransition";
// Proper call with correct options
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono", // use kebab-case for CSS variable
});


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head />
      <body className="text-white bg-gradient-to-r from-purple-500 via-pink-500  to-blue-500  animate-gradient bg-[length:200%_200%]">

       
        <Header />
        {/* <StairTransition/> */}
          <PageTransition>
          {children}
          </PageTransition>
          
      </body>
    </html>
  );
}
