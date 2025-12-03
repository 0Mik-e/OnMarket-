"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./RecommendedProducts.module.css";

const allProducts = [
  {
    id: 1,
    name: "Kemeja Pria Formal",
    category: "Pakaian",
    specs: "Size M-XXL | Cotton Premium",
    price: "Rp 299.000",
    image: "/gallery/logo/polo.png",
    color: "Putih & Biru",
  },
  {
    id: 2,
    name: "Dress Wanita Casual",
    category: "Pakaian",
    specs: "Size S-L | Bahan Katun",
    price: "Rp 399.000",
    image: "/gallery/logo/nike.png",
    color: "Pink & Navy",
  },
  {
    id: 3,
    name: "Jaket Denim Unisex",
    category: "Pakaian",
    specs: "Size M-XXL | Denim Original",
    price: "Rp 599.000",
    image: "/gallery/logo/adidas.png",
    color: "Blue & Black",
  },
  {
    id: 4,
    name: "Celana Chino Pria",
    category: "Pakaian",
    specs: "Size 28-36 | Slim Fit",
    price: "Rp 349.000",
    image: "/gallery/logo/polo.png",
    color: "Khaki & Navy",
  },
  {
    id: 15,
    name: "Baju Kaos Pria Basic",
    category: "Pakaian",
    specs: "Size S-XXL | Cotton 100%",
    price: "Rp 149.000",
    image: "/gallery/logo/nike.png",
    color: "Hitam & Putih",
  },
  {
    id: 16,
    name: "Blouse Wanita Elegan",
    category: "Pakaian",
    specs: "Size S-L | Satin Premium",
    price: "Rp 449.000",
    image: "/gallery/logo/polo.png",
    color: "Cream & Navy",
  },
  {
    id: 17,
    name: "Kemeja Flanel Pria",
    category: "Pakaian",
    specs: "Size M-XXL | Flanel Tebal",
    price: "Rp 279.000",
    image: "/gallery/logo/adidas.png",
    color: "Merah & Biru",
  },
  {
    id: 18,
    name: "Kaos Kaki Premium",
    category: "Pakaian",
    specs: "One Size | Cotton Blend",
    price: "Rp 49.000",
    image: "/gallery/logo/nike.png",
    color: "Putih & Hitam",
  },
  {
    id: 19,
    name: "Hoodie Unisex",
    category: "Pakaian",
    specs: "Size M-XXL | Fleece",
    price: "Rp 499.000",
    image: "/gallery/logo/polo.png",
    color: "Abu-abu & Hitam",
  },
  {
    id: 20,
    name: "Baju Batik Pria",
    category: "Pakaian",
    specs: "Size M-XXL | Katun Batik",
    price: "Rp 379.000",
    image: "/gallery/logo/adidas.png",
    color: "Coklat & Emas",
  },
  {
    id: 5,
    name: "Sepatu Sneakers Nike",
    category: "Sepatu",
    specs: "Size 38-44 | Sporty",
    price: "Rp 799.000",
    image: "/gallery/logo/nike.png",
    color: "White & Black",
  },
  {
    id: 6,
    name: "Sepatu Running Adidas",
    category: "Sepatu",
    specs: "Size 39-43 | Running",
    price: "Rp 899.000",
    image: "/gallery/logo/adidas.png",
    color: "Black & White",
  },
  {
    id: 7,
    name: "Sepatu Casual Pria",
    category: "Sepatu",
    specs: "Size 40-44 | Casual",
    price: "Rp 499.000",
    image: "/gallery/logo/polo.png",
    color: "Brown & Black",
  },
  {
    id: 8,
    name: "Sepatu Wanita Heels",
    category: "Sepatu",
    specs: "Size 36-40 | Heels",
    price: "Rp 599.000",
    image: "/gallery/logo/nike.png",
    color: "Black & Red",
  },
  {
    id: 9,
    name: "Tas Ransel Fashion",
    category: "Aksesoris",
    specs: "Waterproof | Multi Pocket",
    price: "Rp 449.000",
    image: "/gallery/logo/adidas.png",
    color: "Black & Grey",
  },
  {
    id: 10,
    name: "Baju Kemeja Flanel",
    category: "Pakaian",
    specs: "Size M-XXL | Flanel",
    price: "Rp 279.000",
    image: "/gallery/logo/polo.png",
    color: "Red & Blue",
  },
  {
    id: 11,
    name: "Kaos Pria Basic",
    category: "Pakaian",
    specs: "Size S-XXL | Cotton",
    price: "Rp 149.000",
    image: "/gallery/logo/nike.png",
    color: "White & Black",
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch",
    category: "Elektronik",
    specs: "44mm | Bluetooth",
    price: "Rp 3.999.000",
    image: "/gallery/logo/samsung.png",
    color: "Mineral Blue",
  },
  {
    id: 13,
    name: "iPhone 15 Pro",
    category: "Elektronik",
    specs: "256GB | 5G",
    price: "Rp 18.999.000",
    image: "/gallery/logo/apple.png",
    color: "Titanium",
  },
  {
    id: 14,
    name: "Laptop ASUS",
    category: "Elektronik",
    specs: "Intel i7 | 16GB RAM",
    price: "Rp 12.999.000",
    image: "/gallery/logo/asus.png",
    color: "Silver",
  },
  {
    id: 21,
    name: "Sepatu Sport Nike Air",
    category: "Sepatu",
    specs: "Size 38-44 | Air Cushion",
    price: "Rp 1.299.000",
    image: "/gallery/logo/nike.png",
    color: "White & Blue",
  },
  {
    id: 22,
    name: "Sepatu Boots Pria",
    category: "Sepatu",
    specs: "Size 40-44 | Leather",
    price: "Rp 899.000",
    image: "/gallery/logo/adidas.png",
    color: "Black & Brown",
  },
  {
    id: 23,
    name: "Kemeja Oxford Pria",
    category: "Pakaian",
    specs: "Size M-XXL | Oxford Cotton",
    price: "Rp 329.000",
    image: "/gallery/logo/polo.png",
    color: "Navy & White",
  },
  {
    id: 24,
    name: "Celana Jeans Slim Fit",
    category: "Pakaian",
    specs: "Size 28-36 | Denim Premium",
    price: "Rp 549.000",
    image: "/gallery/logo/nike.png",
    color: "Blue & Black",
  },
  {
    id: 25,
    name: "Tas Tote Bag Wanita",
    category: "Aksesoris",
    specs: "Leather | Multi Compartment",
    price: "Rp 699.000",
    image: "/gallery/logo/adidas.png",
    color: "Beige & Brown",
  },
  {
    id: 26,
    name: "Jam Tangan Smartwatch",
    category: "Elektronik",
    specs: "42mm | Fitness Tracker",
    price: "Rp 2.499.000",
    image: "/gallery/logo/apple.png",
    color: "Black & Silver",
  },
  {
    id: 27,
    name: "Headphone Wireless",
    category: "Elektronik",
    specs: "Noise Cancelling | 30h Battery",
    price: "Rp 1.799.000",
    image: "/gallery/logo/sony.png",
    color: "Black & Blue",
  },
  {
    id: 28,
    name: "Sepatu Sandal Sport",
    category: "Sepatu",
    specs: "Size 38-44 | Waterproof",
    price: "Rp 249.000",
    image: "/gallery/logo/adidas.png",
    color: "Black & Grey",
  },
  {
    id: 29,
    name: "Kaos Polo Pria",
    category: "Pakaian",
    specs: "Size M-XXL | Pique Cotton",
    price: "Rp 199.000",
    image: "/gallery/logo/polo.png",
    color: "White & Navy",
  },
  {
    id: 30,
    name: "Dress Midi Wanita",
    category: "Pakaian",
    specs: "Size S-L | Chiffon",
    price: "Rp 549.000",
    image: "/gallery/logo/nike.png",
    color: "Pink & White",
  },
];

export default function RecommendedProducts() {
  // Always show recommended products (first 12 products)
  const recommendedProducts = allProducts.slice(0, 12);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 240; // Width of card + gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>PRODUK REKOMENDASI</h2>
        <div ref={scrollContainerRef} className={styles.productGrid}>
          {recommendedProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={180}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <p className={styles.category}>{product.category}</p>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.specs}>{product.specs}</p>
                <p className={styles.color}>{product.color}</p>
                <p className={styles.price}>{product.price}</p>
                <button className={styles.viewButton}>Lihat Detail</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navigation}>
          <button onClick={scrollRight} className={styles.navArrow}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}

