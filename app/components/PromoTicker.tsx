import Image from "next/image";
import styles from "./PromoTicker.module.css";

const promos = [
  {
    brand: "Nike Air Zoom 2025",
    tag: "Sport Lifestyle",
    copy: "Diskon 35% + bebas ongkir nasional",
    image: "/gallery/logo/nike.png",
  },
  {
    brand: "Adidas Ultraboost",
    tag: "Running Gear",
    copy: "Kolaborasi eksklusif, stok terbatas!",
    image: "/gallery/logo/adidas.png",
  },
  {
    brand: "Apple Watch X",
    tag: "Smart Gadget",
    copy: "Pantau kesehatan dengan layar fleksibel.",
    image: "/gallery/logo/apple.png",
  },
  {
    brand: "Sony WH-1000XM6",
    tag: "Audio Premier",
    copy: "Noise cancelling generasi baru, bundling Spotify.",
    image: "/gallery/logo/sony.png",
  },
  {
    brand: "IKEA Smart Home",
    tag: "Home Living",
    copy: "Paketan lampu & sensor otomatis, mulai 499rb.",
    image: "/gallery/logo/lg.png",
  },
];

export default function PromoTicker() {
  const duplicated = [...promos, ...promos];

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {duplicated.map((promo, index) => (
          <article className={styles.card} key={`${promo.brand}-${index}`}>
            <div className={styles.media}>
              <div className={styles.imageWrap}>
                <Image
                  src={promo.image}
                  alt={promo.brand}
                  fill
                  sizes="120px"
                />
              </div>
              <div>
                <p className={styles.tag}>{promo.tag}</p>
                <h3>{promo.brand}</h3>
                <p className={styles.copy}>{promo.copy}</p>
              </div>
            </div>
            <span className={styles.cta}>Lihat detail →</span>
          </article>
        ))}
      </div>
    </div>
  );
}

