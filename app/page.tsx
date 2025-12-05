"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import CategoryGrid from "./components/CategoryGrid";
import BannerCarousel from "./components/BannerCarousel";
import PromoGallery from "./components/PromoGallery";
import RecommendedProducts from "./components/RecommendedProducts";
import FlashSale from "./components/FlashSale";
import BrandShowcase from "./components/BrandShowcase";
import TestimonialSection from "./components/TestimonialSection";
import NewsletterSection from "./components/NewsletterSection";


export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Clear search after redirect
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.banner}>
          <div className={styles.bannerOverlay}>
            <h1>Selamat Datang di OnMarket</h1>
            <p>Temukan produk fashion, elektronik, hingga hobi hanya dalam sekali cari.</p>
            <form onSubmit={handleSearch} className={styles.searchRow}>
              <input
                className={styles.searchInput}
                placeholder="Cari produk... (contoh: sepatu, baju, elektronik)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className={styles.searchBtn}>Cari</button>
            </form>
            <div className={styles.chipRow}>
              <button onClick={() => router.push("/search?q=sepatu")}>Sepatu</button>
              <button onClick={() => router.push("/search?q=baju")}>Baju</button>
              <button onClick={() => router.push("/search?q=elektronik")}>Elektronik</button>
              <button onClick={() => router.push("/search?q=gadget")}>Gadget</button>
              <button onClick={() => router.push("/search?q=aksesoris")}>Aksesoris</button>
            </div>
          </div>
        </div>
      </section>

      <BannerCarousel />
      <CategoryGrid />
      <RecommendedProducts />
      <FlashSale />
      <BrandShowcase />
      <NewsletterSection />
      <PromoGallery />
      <TestimonialSection />
    </div>
  );
}
