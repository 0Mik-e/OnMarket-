import Image from "next/image";
import styles from "./BannerCarousel.module.css";

const banners = [
  {
    id: 1,
    title: "Flash Sale",
    subtitle: "Diskon hingga 70%",
    description: "Berlaku hari ini saja!",
    image: "/gallery/logo/nike.png",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
  },
  {
    id: 2,
    title: "New Arrival",
    subtitle: "Koleksi Terbaru",
    description: "Produk fashion & elektronik terbaru",
    image: "/gallery/logo/adidas.png",
    gradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
  },
  {
    id: 3,
    title: "Best Seller",
    subtitle: "Produk Paling Laris",
    description: "Pilihan terbaik untuk Anda",
    image: "/gallery/logo/apple.png",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
];

export default function BannerCarousel() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.carousel}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={styles.bannerCard}
              style={{ background: banner.gradient }}
            >
              <div className={styles.bannerContent}>
                <div className={styles.textContent}>
                  <h3 className={styles.title}>{banner.title}</h3>
                  <p className={styles.subtitle}>{banner.subtitle}</p>
                  <p className={styles.description}>{banner.description}</p>
                  <button className={styles.ctaButton}>Lihat Sekarang</button>
                </div>
                <div className={styles.imageContent}>
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    width={120}
                    height={120}
                    className={styles.bannerImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

