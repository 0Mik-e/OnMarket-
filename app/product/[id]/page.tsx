"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import styles from "./page.module.css";

type DetailProduct = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
  features: string[];
  payments: string[];
};

const products: DetailProduct[] = [
  {
    id: 101,
    name: "Sneakers Run Prime",
    category: "Sepatu",
    image: "/gallery/product/runningaddidas.png",
    price: 899000,
    description:
      "Sneakers ringan dengan bantalan empuk, cocok untuk lari maupun dipakai harian.",
    features: [
      "Upper breathable knit",
      "Sol anti-slip",
      "Tersedia ukuran 38–44",
    ],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 102,
    name: "Boots Kulit Explorer",
    category: "Sepatu",
    image: "/gallery/product/bootspria.png",
    price: 920000,
    description: "Boots kulit premium untuk tampilan maskulin dan tahan cuaca.",
    features: ["Bahan kulit asli", "Sol karet tebal", "Nyaman dipakai lama"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 103,
    name: "Tas Ransel Urban",
    category: "Tas",
    image: "/gallery/product/ransel.png",
    price: 479000,
    description:
      "Tas ransel casual dengan banyak kompartemen, ideal untuk kerja dan kuliah.",
    features: [
      "Kompartemen laptop 15 inci",
      "Material anti air",
      "Tali punggung empuk",
    ],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 104,
    name: "Tas Tote Kulit Premium",
    category: "Tas",
    image: "/gallery/product/totebagwanita.png",
    price: 729000,
    description:
      "Tas tote elegan yang cocok untuk ke kantor maupun hangout santai.",
    features: ["Leather premium", "Kantong dalam ber-resleting"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 105,
    name: "Kemeja Linen Santai",
    category: "Pakaian",
    image: "/gallery/product/kemejapria.png",
    price: 329000,
    description:
      "Kemeja linen breathable yang pas untuk iklim tropis, tetap rapi dan stylish.",
    features: ["Bahan linen campuran", "Potongan regular fit"],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 106,
    name: "Dress Midi Pastel",
    category: "Pakaian",
    image: "/gallery/product/dressmidi.png",
    price: 569000,
    description:
      "Dress midi warna pastel yang lembut dengan siluet feminim dan nyaman.",
    features: ["Bahan chiffon lembut", "Tali pinggang adjustable"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 107,
    name: "Hoodie Sport Tech",
    category: "Pakaian",
    image: "/gallery/product/hoodieunisex.png",
    price: 519000,
    description:
      "Hoodie sporty dengan bahan lembut dan hangat, cocok untuk olahraga ringan.",
    features: ["Fleece lembut", "Saku kangaroo", "Hood dengan tali"],
    payments: ["Transfer Bank", "E-Wallet"],
  },
  {
    id: 108,
    name: "Sepatu Slip On Breeze",
    category: "Sepatu",
    image: "/gallery/product/sepatusandalsport.png",
    price: 289000,
    description:
      "Sepatu slip on santai dengan outsole fleksibel, nyaman untuk dipakai seharian.",
    features: ["Mudah dipakai", "Ringan dan fleksibel"],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductDetailPage() {
  const router = useRouter();
  const { addToCart } = useCart();

  const params = useParams<{ id: string }>();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
    router.push("/checkout");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.imagePanel}>
            <Image
              src={product.image}
              alt={product.name}
              width={420}
              height={420}
              className={styles.mainImage}
            />
          </div>
          <div className={styles.infoPanel}>
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>{formatPrice(product.price)}</p>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.section}>
              <h2>Keunggulan produk</h2>
              <ul>
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Metode pembayaran</h2>
              <div className={styles.paymentChips}>
                {product.payments.map((p) => (
                  <span key={p} className={styles.paymentChip}>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.addToCart}
                onClick={handleAddToCart}
              >
                Tambah ke Keranjang
              </button>
              <button
                type="button"
                className={styles.buyNow}
                onClick={handleBuyNow}
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}