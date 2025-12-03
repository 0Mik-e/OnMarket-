import Image from "next/image";
import styles from "./CategoryGrid.module.css";

const categories = [
  { id: 1, name: "Fashion", icon: "/gallery/logo/nike.png", count: "1.240" },
  { id: 2, name: "Elektronik", icon: "/gallery/logo/samsung.png", count: "980" },
  { id: 3, name: "Beauty", icon: "/gallery/logo/apple.png", count: "860" },
  { id: 4, name: "Gadget", icon: "/gallery/logo/sony.png", count: "540" },
  { id: 5, name: "Sepatu", icon: "/gallery/logo/adidas.png", count: "720" },
  { id: 6, name: "Aksesoris", icon: "/gallery/logo/polo.png", count: "450" },
  { id: 7, name: "Home Living", icon: "/gallery/logo/lg.png", count: "380" },
  { id: 8, name: "Olahraga", icon: "/gallery/logo/nike.png", count: "620" },
  { id: 9, name: "Pakaian", icon: "/gallery/logo/polo.png", count: "1.580" },
  { id: 10, name: "Kecantikan", icon: "/gallery/logo/apple.png", count: "750" },
];

export default function CategoryGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kategori Populer</h2>
        <div className={styles.grid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div className={styles.iconWrapper}>
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={48}
                  height={48}
                  className={styles.icon}
                />
              </div>
              <div className={styles.categoryInfo}>
                <h3 className={styles.categoryName}>{category.name}</h3>
                <p className={styles.count}>{category.count} produk</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

