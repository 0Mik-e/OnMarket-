"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import RecommendedProducts from "./components/RecommendedProducts";
import CategoryGrid from "./components/CategoryGrid";
import BannerCarousel from "./components/BannerCarousel";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("search_history");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const saveHistory = (query: string) => {
    let newHistory = [query, ...history.filter((h) => h !== query)];
    newHistory = newHistory.slice(0, 5);
    setHistory(newHistory);
    localStorage.setItem("search_history", JSON.stringify(newHistory));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const q = searchQuery.trim();
      router.push(`/search?q=${encodeURIComponent(q)}`);
      saveHistory(q);
      setSearchQuery("");
    }
  };

  const handleHistoryClick = (q: string) => {
    router.push(`/search?q=${encodeURIComponent(q)}`);
    saveHistory(q);
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

            {history.length > 0 && (
              <div className={styles.historyRow}>
                <span>Histori Pencarian:</span>
                {history.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleHistoryClick(item)}
                    className={styles.historyChip}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

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
    </div>
  );
}
