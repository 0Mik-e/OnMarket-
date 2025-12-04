"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./FlashSale.module.css";

type FlashSaleProduct = {
  id: number;
  name: string;
  category: string;
  image: string;
  basePrice: number;
  label: string;
};

type FlashSaleItem = FlashSaleProduct & {
  discount: number;
  flashPrice: number;
};

const flashSaleProducts: FlashSaleProduct[] = [
  {
    id: 101,
    name: "Sneakers Run Prime",
    category: "Sepatu",
    image: "/gallery/product/runningaddidas.png",
    basePrice: 899000,
    label: "Cepat habis",
  },
  {
    id: 102,
    name: "Boots Kulit Explorer",
    category: "Sepatu",
    image: "/gallery/product/bootspria.png",
    basePrice: 920000,
    label: "Beli sekarang",
  },
  {
    id: 103,
    name: "Tas Ransel Urban",
    category: "Tas",
    image: "/gallery/product/ransel.png",
    basePrice: 479000,
    label: "Favorit",
  },
  {
    id: 104,
    name: "Tas Tote Kulit Premium",
    category: "Tas",
    image: "/gallery/product/totebagwanita.png",
    basePrice: 729000,
    label: "Stok terbatas",
  },
  {
    id: 105,
    name: "Kemeja Linen Santai",
    category: "Pakaian",
    image: "/gallery/product/kemejapria.png",
    basePrice: 329000,
    label: "Cepat habis",
  },
  {
    id: 106,
    name: "Dress Midi Pastel",
    category: "Pakaian",
    image: "/gallery/product/dressmidi.png",
    basePrice: 569000,
    label: "Beli sekarang",
  },
  {
    id: 107,
    name: "Hoodie Sport Tech",
    category: "Pakaian",
    image: "/gallery/product/hoodieunisex.png",
    basePrice: 519000,
    label: "Stok menipis",
  },
  {
    id: 108,
    name: "Sepatu Slip On Breeze",
    category: "Sepatu",
    image: "/gallery/product/sepatusandalsport.png",
    basePrice: 289000,
    label: "Favorit",
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function FlashSale() {
  const [remainingSeconds, setRemainingSeconds] = useState(8 * 3600 + 43 * 60 + 22);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = useMemo(() => {
    const hours = String(Math.floor(remainingSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(remainingSeconds % 60).padStart(2, "0");

    return { hours, minutes, seconds };
  }, [remainingSeconds]);

  const items = useMemo<FlashSaleItem[]>(() => {
    return flashSaleProducts.map((product, index) => {
      const baseDiscount = 35;
      const extra = (index * 11) % 20;
      const discount = baseDiscount + extra; // 35-54%
      const flashPrice = Math.max(
        1000,
        Math.round(product.basePrice * ((100 - discount) / 100))
      );

      return {
        ...product,
        discount,
        flashPrice,
      };
    });
  }, []);

  return (
    <section id="flash-sale-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.leftHeader}>
            <h2 className={styles.title}>FLASH SALE</h2>
            <div className={styles.timer}>
              <span>Berakhir dalam</span>
              <span className={styles.pill}>{countdown.hours}</span>
              <span className={styles.pill}>{countdown.minutes}</span>
              <span className={styles.pill}>{countdown.seconds}</span>
            </div>
          </div>
          <button
            className={styles.seeAll}
            type="button"
            onClick={() => {
              const el = document.getElementById("flash-sale-section");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Lihat semua
          </button>
        </div>

        <div className={styles.list}>
          {items.map((item, index) => {
            const stockLeftPercent = 25 + ((index * 13) % 60); // 25–84%

            return (
              <article key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <span className={styles.badge}>-{item.discount}%</span>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={180}
                    height={140}
                  />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.name}>{item.name}</p>
                  <div className={styles.priceRow}>
                    <span className={styles.flashPrice}>
                      {formatPrice(item.flashPrice)}
                    </span>
                    <span className={styles.originalPrice}>
                      {formatPrice(item.basePrice)}
                    </span>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressInner}
                      style={{ width: stockLeftPercent + "%" }}
                    />
                  </div>
                  <p className={styles.status}>{item.label}</p>
                  <button className={styles.buyButton}>Beli sekarang</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}