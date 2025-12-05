import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./CategoryGrid.module.css";

const categories = [
  { id: 1, name: "Fashion", icon: "/gallery/logo/clothes.png", count: "1.240" },
  { id: 2, name: "Elektronik", icon: "/gallery/logo/television.png", count: "980" },
  { id: 3, name: "Beauty", icon: "/gallery/logo/lipstick.png", count: "860" },
  { id: 4, name: "Gadget", icon: "/gallery/logo/responsive.png", count: "540" },
  { id: 5, name: "Sepatu", icon: "/gallery/logo/sport-shoe.png", count: "720" },
  { id: 6, name: "Aksesoris", icon: "/gallery/logo/man.png", count: "450" },
  { id: 7, name: "Home Living", icon: "/gallery/logo/livingroom.png", count: "380" },
  { id: 8, name: "Olahraga", icon: "/gallery/logo/sports.png", count: "620" },
  { id: 9, name: "Pulsa", icon: "/gallery/logo/sim.png", count: "1.580" },
  { id: 10, name: "Onmarket Farmasi", icon: "/gallery/logo/medicine.png", count: "750" },
];

export default function CategoryGrid() {
  const router = useRouter();

  const handleClick = (name: string) => {
    // Map kategori ke kata kunci pencarian yang sesuai data search
    const lower = name.toLowerCase();
    let query = lower;

    if (lower === "fashion") {
      query = "pakaian";
    } else if (lower === "home living") {
      query = "home";
    } else if (lower === "gadget"){
      query = "elektronik";
    }
      else if (lower === "onmarket farmasi") {
      query = "obat";
    }

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kategori Populer</h2>
        <div className={styles.grid}>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={styles.categoryCard}
              onClick={() => handleClick(category.name)}
            >
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
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}