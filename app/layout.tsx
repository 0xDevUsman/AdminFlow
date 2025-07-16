import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import icon from "@/public/favicon.ico";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdminPro Dashboard",
  description:
    "Professional admin dashboard with analytics and management tools",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={icon.src} />
      </head>
      <body
        className={`${inter.className} bg-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
