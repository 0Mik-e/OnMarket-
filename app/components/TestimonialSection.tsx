"use client";

import Image from "next/image";
import styles from "./TestimonialSection.module.css";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  product: string;
  avatar: string;
  verified: boolean;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Jakarta",
    rating: 5,
    comment:
      "Barangnya sesuai gambar, kualitas bagus dan pengiriman cepat. Seller responsif juga. Recommended!",
    product: "Sepatu Sneakers Nike",
    avatar: "BS",
    verified: true,
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    location: "Bandung",
    rating: 5,
    comment:
      "Dress yang saya beli sangat nyaman dipakai, bahannya lembut dan ukurannya pas. Packaging juga rapi sekali!",
    product: "Dress Wanita Casual",
    avatar: "SN",
    verified: true,
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    location: "Surabaya",
    rating: 5,
    comment:
      "Laptop ASUS yang saya beli performanya kencang banget. Cocok untuk kerja dan gaming. Puas dengan pembelian ini!",
    product: "Laptop ASUS",
    avatar: "AR",
    verified: true,
  },
  {
    id: 4,
    name: "Dewi Lestari",
    location: "Yogyakarta",
    rating: 5,
    comment:
      "Tas tote bag-nya sangat elegan dan berkualitas. Banyak kompartemennya juga, sangat praktis untuk dipakai ke kantor.",
    product: "Tas Tote Bag Wanita",
    avatar: "DL",
    verified: true,
  },
  {
    id: 5,
    name: "Rudi Hartono",
    location: "Medan",
    rating: 5,
    comment:
      "Kemeja formalnya rapi dan nyaman. Bahan cotton premium memang beda, tidak mudah kusut. Worth it!",
    product: "Kemeja Pria Formal",
    avatar: "RH",
    verified: true,
  },
  {
    id: 6,
    name: "Maya Sari",
    location: "Semarang",
    rating: 5,
    comment:
      "Headphone wireless-nya suaranya jernih banget dan noise cancelling-nya mantap. Baterainya juga awet sampai 30 jam.",
    product: "Headphone Wireless",
    avatar: "MS",
    verified: true,
  },
];

export default function TestimonialSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Testimoni Pelanggan</h2>
          <p className={styles.subtitle}>
            Ulasan jujur dari pelanggan yang sudah berbelanja di OnMarket
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>
                  <span>{testimonial.avatar}</span>
                  {testimonial.verified && (
                    <span className={styles.verifiedBadge}>✓</span>
                  )}
                </div>
                <div className={styles.userInfo}>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <p className={styles.location}>{testimonial.location}</p>
                </div>
              </div>

              <div className={styles.rating}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.star} ${
                      i < testimonial.rating ? styles.starFilled : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className={styles.comment}>{testimonial.comment}</p>

              <div className={styles.productInfo}>
                <span className={styles.productLabel}>Produk:</span>
                <span className={styles.productName}>{testimonial.product}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}