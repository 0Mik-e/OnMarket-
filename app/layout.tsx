import React from "react";
import Navbar from "./components/Navbar";
import PromoTicker from "./components/PromoTicker";
import Footer from "./components/Footer";
import { Providers}from "./Providers";
import "./globals.css";

export const metadata = {
  title: "OnMarket",
  description: "Modern Blue Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <PromoTicker />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}