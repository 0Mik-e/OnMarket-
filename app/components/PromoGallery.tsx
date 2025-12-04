"use client";

import styles from "./PromoGallery.module.css";
import { useRouter } from "next/navigation";

const promos = [
  {
    id: 1,
    title: "Galeri promo spesial",
    subtitle: "AirPods Pro 3",
    description: "Kini dengan Sensor Detak Jantung & peredam bising generasi baru.",
    highlight: "Cicilan 0% mulai Rp187.458/bulan*",
    fineprint: "Syarat & ketentuan berlaku. Stok terbatas.",
    brand: "OnMarket x Apple",
    verified: "Official Reseller",
    variant: "cardBlue",
    large: true,
  },
  {
    id: 2,
    title: "Watch Series",
    subtitle: "Pantau kesehatan Anda",
    description: "Ringkas setiap notifikasi kesehatan & aktivitas harian.",
    highlight: "Gratis cicilan hingga 24 bulan",
    fineprint: "Khusus kartu kredit bank pilihan.",
    brand: "OnMarket Gadget",
    verified: "Smartwatch Deals",
    variant: "cardPurple",
  },
  {
    id: 3,
    title: "Promo Kartu Kredit",
    subtitle: "Welcome bonus hingga",
    description: "Daftar kartu kredit partner & nikmati cashback instan.",
    highlight: "650 rb",
    fineprint: "Minimal transaksi & S&K berlaku.",
    brand: "OnMarket Pay",
    verified: "Kerja sama bank",
    variant: "cardBlue",
  },
  {
    id: 4,
    title: "Day2Day Market",
    subtitle: "Belanja kebutuhan harian",
    description: "Sayur, buah, sampai daging segar langsung diantar.",
    highlight: "Diskon s.d. 50%",
    fineprint: "Tambahan ekstra diskon 5% dengan voucher.",
    brand: "Farmers Market",
    verified: "Fresh Everyday",
    variant: "cardGreen",
  },
  {
    id: 5,
    title: "Travel & Hiburan",
    subtitle: "Explore more deals",
    description: "Tiket, hotel, & aktivitas seru setiap hari.",
    highlight: "Setiap hari ada harga spesial",
    fineprint: "Khusus pemesanan via OnMarket Partner.",
    brand: "OnMarket Travel",
    verified: "Best Deal",
    variant: "cardOrange",
  },
];

export default function PromoGallery() {
  const router = useRouter();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <h2 className={styles.title}>Galeri promo spesial</h2>
            <p className={styles.subtitle}>
              Kumpulan penawaran pilihan dari bank, brand resmi, dan partner travel.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {promos.map((promo) => (
            <article
              key={promo.id}
              className={`${styles.card} ${styles[promo.variant]} ${
                promo.large ? styles.cardLarge : ""
              }`}
            >
              <div>
                <div className={styles.badgeRow}>
                  <span className={styles.brand}>{promo.brand}</span>
                  <span className={styles.verified}>{promo.verified}</span>
                </div>
                <h3 className={styles.headline}>{promo.subtitle}</h3>
                <p className={styles.description}>{promo.description}</p>
                <p className={styles.highlight}>{promo.highlight}</p>
              </div>

              <div className={styles.bottomRow}>
                <div>
                  <p className={styles.fineprint}>{promo.fineprint}</p>
                  <span className={styles.tag}>Lihat detail promo</span>
                </div>
                <button
                  className={styles.ctaButton}
                  type="button"
                  onClick={() =>
                    router.push(
                      `/search?q=${encodeURIComponent(promo.subtitle)}`
                    )
                  }
                >
                  Cek promo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}