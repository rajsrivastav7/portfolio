import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Raj Srivastav",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      
      {/* 1. Global background color is set here */}
      <body className="antialiased bg-background text-[#1D1D1F] min-h-screen">
        <Navbar />
        
        {/* 2. REMOVED the 'pt-24' div wrapper. 
            Now 'children' (the pages) touch the very top, giving us full control. */}
        {children}
        
      </body>
    </html>
  );
}