"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const collections = [
  { title: "Fashion & Lifestyle", products: "1.240 produk", accent: "#fef3c7" },
  { title: "Elektronik Rumah", products: "980 produk", accent: "#dbeafe" },
  { title: "Beauty & Care", products: "860 produk", accent: "#fce7f3" },
  { title: "Gaming & Gadget", products: "540 produk", accent: "#ede9fe" },
];

const categories = [
  "Beauty",
  "Pakaian",
  "Sepatu",
  "Elektronik",
  "Home Living",
  "Gadget",
  "Olahraga",
  "Aksesoris",
];

export default function HomePage() {
  const router = useRouter();

  const handleAddCollection = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      router.push("/login");
      return;
    }
    // nanti bisa diarahkan ke halaman manajemen koleksi
    router.push("/collections");
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.banner}>
          <div className={styles.bannerOverlay}>
            <h1>Change your wardrobe. Find exciting goods.</h1>
            <p>Temukan produk fashion, beauty, hingga hobi hanya dalam sekali cari.</p>
            <div className={styles.searchRow}>
              <input
                className={styles.searchInput}
                placeholder="What are you looking for?"
              />
              <button className={styles.searchBtn}>Cari</button>
            </div>
            <div className={styles.chipRow}>
              <button>Women&apos;s clothes</button>
              <button>Beauty</button>
              <button>Men&apos;s clothes</button>
              <button>Kids clothes</button>
              <button>Hobbies</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.catalog}>
        <header className={styles.catalogHeader}>
          <div>
            <p className={styles.tagline}>Kurasi Terbaru</p>
            <h2>Koleksi pilihan untuk meningkatkan penjualan.</h2>
          </div>
          <button type="button" onClick={handleAddCollection} className="secondary-link">
            Tambah Koleksi
          </button>
        </header>

        <div className={styles.catalogGrid}>
          {collections.map((collection) => (
            <div
              key={collection.title}
              className={styles.collectionCard}
              style={{ background: collection.accent }}
            >
              <h3>{collection.title}</h3>
              <p>{collection.products}</p>
              <button>Lihat detail</button>
            </div>
          ))}
        </div>

        <div className={styles.categoryRow}>
          {categories.map((cat) => (
            <button key={cat} className={styles.categoryPill}>
              {cat}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
