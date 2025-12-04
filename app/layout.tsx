import React from "react";
import Navbar from "./components/Navbar";
import PromoTicker from "./components/PromoTicker";
import PromoWrapper from "./components/wrapper";
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
        <Navbar />
        <PromoWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}
