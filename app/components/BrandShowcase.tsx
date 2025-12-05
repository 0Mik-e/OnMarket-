"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./BrandShowcase.module.css";

type Brand = {
  id: number;
  name: string;
  logo: string;
  category: string;
};

const brands: Brand[] = [
  { id: 1, name: "Nike", logo: "/gallery/logo/nike.png", category: "Sepatu" },
  { id: 2, name: "Adidas", logo: "/gallery/logo/adidas.png", category: "Sepatu" },
  { id: 3, name: "Apple", logo: "/gallery/logo/apple.png", category: "Elektronik" },
  { id: 4, name: "Samsung", logo: "/gallery/logo/samsung.png", category: "Elektronik" },
  { id: 5, name: "ASUS", logo: "/gallery/logo/asus.png", category: "Elektronik" },
  { id: 6, name: "Dell", logo: "/gallery/logo/dell.png", category: "Elektronik" },
  { id: 7, name: "HP", logo: "/gallery/logo/hp.png", category: "Elektronik" },
  { id: 8, name: "Lenovo", logo: "/gallery/logo/lenovo.png", category: "Elektronik" },
  { id: 9, name: "LG", logo: "/gallery/logo/lg.png", category: "Elektronik" },
  { id: 10, name: "Sony", logo: "/gallery/logo/sony.png", category: "Elektronik" },
  { id: 11, name: "Reebok", logo: "/gallery/logo/reebok.png", category: "Sepatu" },
  { id: 12, name: "Polo", logo: "/gallery/logo/polo.png", category: "Fashion" },
  { id: 13, name: "IKEA", logo: "/gallery/logo/ikea.png", category: "Home Living" },
];

export default function BrandShowcase() {
  const router = useRouter();

  const handleBrandClick = (brand: Brand) => {
    router.push(`/search?q=${encodeURIComponent(brand.name.toLowerCase())}`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Brand Terpercaya</h2>
          <p className={styles.subtitle}>
            Pilih dari brand-brand ternama yang sudah terpercaya
          </p>
        </div>

        <div className={styles.grid}>
          {brands.map((brand) => (
            <button
              key={brand.id}
              type="button"
              className={styles.brandCard}
              onClick={() => handleBrandClick(brand)}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={80}
                  className={styles.logo}
                />
              </div>
              <p className={styles.brandName}>{brand.name}</p>
              <span className={styles.category}>{brand.category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}