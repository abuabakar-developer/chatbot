import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata"; // ✅ Import server metadata
import { Metadata } from "next";
import ClientWrapper from "./components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Re-export metadata for Next.js app
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
        <ClientWrapper />
        
      </body>
    </html>
  );
}
