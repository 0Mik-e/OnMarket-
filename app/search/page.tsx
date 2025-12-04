"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";
import styles from "./page.module.css";

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
    image: "/gallery/product/denimunisex.png",
    color: "Blue & Black",
  },
  {
    id: 4,
    name: "Celana Chino Pria",
    category: "Pakaian",
    specs: "Size 28-36 | Slim Fit",
    price: "Rp 349.000",
    image: "/gallery/product/chinopria.png",
    color: "Khaki & Navy",
  },
  {
    id: 5,
    name: "Sepatu Sneakers Nike",
    category: "Sepatu",
    specs: "Size 38-44 | Sporty",
    price: "Rp 799.000",
    image: "/gallery/product/sneakernike.png",
    color: "White & Black",
  },
  {
    id: 6,
    name: "Sepatu Running Adidas",
    category: "Sepatu",
    specs: "Size 39-43 | Running",
    price: "Rp 899.000",
    image: "/gallery/product/runningaddidas.png",
    color: "Black & White",
  },
  {
    id: 7,
    name: "Sepatu Casual Pria",
    category: "Sepatu",
    specs: "Size 40-44 | Casual",
    price: "Rp 499.000",
    image: "/gallery/product/sepatucasual.png",
    color: "Brown & Black",
  },
  {
    id: 8,
    name: "Sepatu Wanita Heels",
    category: "Sepatu",
    specs: "Size 36-40 | Heels",
    price: "Rp 599.000",
    image: "/gallery/product/heels.png",
    color: "Black & Red",
  },
  {
    id: 9,
    name: "Tas Ransel Fashion",
    category: "Aksesoris",
    specs: "Waterproof | Multi Pocket",
    price: "Rp 449.000",
    image: "/gallery/product/ransel.png",
    color: "Black & Grey",
  },
  {
    id: 10,
    name: "Baju Kemeja Flanel",
    category: "Pakaian",
    specs: "Size M-XXL | Flanel",
    price: "Rp 279.000",
    image: "/gallery/product/flanelpria.png",
    color: "Red & Blue",
  },
  {
    id: 11,
    name: "Kaos Pria Basic",
    category: "Pakaian",
    specs: "Size S-XXL | Cotton",
    price: "Rp 149.000",
    image: "/gallery/product/kaospria.png",
    color: "White & Black",
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch",
    category: "Elektronik",
    specs: "44mm | Bluetooth",
    price: "Rp 3.999.000",
    image: "/gallery/product/samsungwatch.png",
    color: "Mineral Blue",
  },
  {
    id: 13,
    name: "iPhone 15 Pro",
    category: "Elektronik",
    specs: "256GB | 5G",
    price: "Rp 18.999.000",
    image: "/gallery/product/appleiphone.png",
    color: "Titanium",
  },
  {
    id: 14,
    name: "Laptop ASUS",
    category: "Elektronik",
    specs: "Intel i7 | 16GB RAM",
    price: "Rp 12.999.000",
    image: "/gallery/product/laptopasus.png",
    color: "Silver",
  },
  {
    id: 15,
    name: "Baju Kaos Pria Basic",
    category: "Pakaian",
    specs: "Size S-XXL | Cotton 100%",
    price: "Rp 149.000",
    image: "/gallery/product/kaospria.png",
    color: "Hitam & Putih",
  },
  {
    id: 16,
    name: "Blouse Wanita Elegan",
    category: "Pakaian",
    specs: "Size S-L | Satin Premium",
    price: "Rp 449.000",
    image: "/gallery/product/blushwanita.png",
    color: "Cream & Navy",
  },
  {
    id: 17,
    name: "Kemeja Flanel Pria",
    category: "Pakaian",
    specs: "Size M-XXL | Flanel Tebal",
    price: "Rp 279.000",
    image: "/gallery/product/flanelpria.png",
    color: "Merah & Biru",
  },
  {
    id: 18,
    name: "Kaos Kaki Premium",
    category: "Pakaian",
    specs: "One Size | Cotton Blend",
    price: "Rp 49.000",
    image: "/gallery/product/kaoskakipremium.png",
    color: "Putih & Hitam",
  },
  {
    id: 19,
    name: "Hoodie Unisex",
    category: "Pakaian",
    specs: "Size M-XXL | Fleece",
    price: "Rp 499.000",
    image: "/gallery/product/hoodieunisex.png",
    color: "Abu-abu & Hitam",
  },
  {
    id: 20,
    name: "Baju Batik Pria",
    category: "Pakaian",
    specs: "Size M-XXL | Katun Batik",
    price: "Rp 379.000",
    image: "/gallery/product/batikpria.png",
    color: "Coklat & Emas",
  },
  {
    id: 21,
    name: "Sepatu Sport Nike Air",
    category: "Sepatu",
    specs: "Size 38-44 | Air Cushion",
    price: "Rp 1.299.000",
    image: "/gallery/product/sportnike.png",
    color: "White & Blue",
  },
  {
    id: 22,
    name: "Sepatu Boots Pria",
    category: "Sepatu",
    specs: "Size 40-44 | Leather",
    price: "Rp 899.000",
    image: "/gallery/product/bootspria.png",
    color: "Black & Brown",
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const filteredProducts = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const searchQuery = query.toLowerCase().trim();
    // Map "baju" to "pakaian" for better search results
    const normalizedQuery = searchQuery === "baju" ? "pakaian" : searchQuery;
    
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(normalizedQuery) ||
        product.specs.toLowerCase().includes(searchQuery) ||
        product.color.toLowerCase().includes(searchQuery)
    );
  }, [query]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Hasil Pencarian: &quot;{query}&quot;
          </h1>
          <p className={styles.count}>
            Ditemukan {filteredProducts.length} produk
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>
              Tidak ada produk yang ditemukan untuk &quot;{query}&quot;
            </p>
            <p className={styles.emptySubtext}>
              Coba cari dengan kata kunci lain
            </p>
            <button
              onClick={() => router.push("/")}
              className={styles.backButton}
            >
              Kembali ke Beranda
            </button>
          </div>
        ) : (
          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
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
        )}
      </div>
    </div>
  );
}

