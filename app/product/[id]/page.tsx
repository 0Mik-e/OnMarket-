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
    id: 1,
    name: "Kemeja Pria Formal",
    category: "Pakaian",
    image: "/gallery/product/kemejapria.png",
    price: 299000,
    description:
      "Kemeja formal pria berbahan cotton premium yang nyaman dipakai seharian.",
    features: ["Bahan cotton premium", "Potongan slim fit", "Size M–XXL"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 2,
    name: "Dress Wanita Casual",
    category: "Pakaian",
    image: "/gallery/product/dresswanita.png",
    price: 399000,
    description:
      "Dress wanita casual dengan bahan katun lembut, cocok untuk aktivitas harian.",
    features: ["Bahan katun lembut", "Nyaman dipakai", "Size S–L"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 3,
    name: "Jaket Denim Unisex",
    category: "Pakaian",
    image: "/gallery/product/denimunisex.png",
    price: 599000,
    description:
      "Jaket denim klasik yang bisa dipakai pria maupun wanita dengan gaya santai.",
    features: ["Denim original", "Unisex", "Size M–XXL"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 4,
    name: "Celana Chino Pria",
    category: "Pakaian",
    image: "/gallery/product/chinopria.png",
    price: 349000,
    description:
      "Celana chino pria slim fit yang rapi namun tetap nyaman dipakai harian.",
    features: ["Slim fit", "Size 28–36", "Bahan halus dan lentur"],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 5,
    name: "Sepatu Sneakers Nike",
    category: "Sepatu",
    image: "/gallery/product/sneakernike.png",
    price: 799000,
    description:
      "Sepatu sneakers sporty dengan desain modern, cocok untuk aktivitas sehari-hari.",
    features: ["Ringan", "Nyaman untuk jalan jauh", "Size 38–44"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 6,
    name: "Sepatu Running Adidas",
    category: "Sepatu",
    image: "/gallery/product/runningaddidas.png",
    price: 899000,
    description:
      "Sepatu lari Adidas dengan bantalan empuk untuk performa maksimal.",
    features: ["Bantalan empuk", "Grip kuat", "Size 39–43"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 7,
    name: "Sepatu Casual Pria",
    category: "Sepatu",
    image: "/gallery/product/sepatucasual.png",
    price: 499000,
    description: "Sepatu casual pria yang cocok untuk hangout maupun ke kantor.",
    features: ["Desain casual", "Nyaman dipakai lama"],
    payments: ["Transfer Bank", "E-Wallet"],
  },
  {
    id: 8,
    name: "Sepatu Wanita Heels",
    category: "Sepatu",
    image: "/gallery/product/heels.png",
    price: 599000,
    description:
      "Heels elegan untuk menunjang penampilan formal maupun semi-formal.",
    features: ["Tinggi hak ideal", "Nyaman untuk acara panjang"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 9,
    name: "Tas Ransel Fashion",
    category: "Aksesoris",
    image: "/gallery/product/ransel.png",
    price: 449000,
    description:
      "Tas ransel fashion dengan banyak kompartemen, cocok untuk kuliah atau kerja.",
    features: ["Waterproof", "Multi pocket"],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 10,
    name: "Baju Kemeja Flanel",
    category: "Pakaian",
    image: "/gallery/product/flanelpria.png",
    price: 279000,
    description:
      "Kemeja flanel hangat dengan motif kotak, pas untuk tampilan santai.",
    features: ["Flanel tebal", "Motif kotak"],
    payments: ["Transfer Bank", "E-Wallet"],
  },
  {
    id: 11,
    name: "Kaos Pria Basic",
    category: "Pakaian",
    image: "/gallery/product/kaospria.png",
    price: 149000,
    description:
      "Kaos basic pria dengan bahan cotton lembut, mudah dipadupadankan.",
    features: ["Cotton lembut", "Nyaman dipakai harian"],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch",
    category: "Elektronik",
    image: "/gallery/product/samsungwatch.png",
    price: 3999000,
    description:
      "Smartwatch Samsung dengan fitur kesehatan lengkap dan desain stylish.",
    features: ["Monitoring kesehatan", "Konektivitas Bluetooth"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 13,
    name: "iPhone 15 Pro",
    category: "Elektronik",
    image: "/gallery/product/appleiphone.png",
    price: 18999000,
    description:
      "iPhone 15 Pro dengan kamera mutakhir dan performa super cepat.",
    features: ["Kamera Pro", "Layar tajam", "Dukungan 5G"],
    payments: ["Kartu Kredit", "Transfer Bank"],
  },
  {
    id: 14,
    name: "Laptop ASUS",
    category: "Elektronik",
    image: "/gallery/product/laptopasus.png",
    price: 12999000,
    description:
      "Laptop ASUS dengan prosesor kencang dan RAM besar untuk kerja dan hiburan.",
    features: ["Intel i7", "16GB RAM"],
    payments: ["Kartu Kredit", "Transfer Bank"],
  },
  {
    id: 15,
    name: "Baju Kaos Pria Basic",
    category: "Pakaian",
    image: "/gallery/product/kaospria.png",
    price: 149000,
    description:
      "Kaos basic pria varian lain dengan pilihan warna menarik.",
    features: ["Cotton 100%", "Pilihan warna beragam"],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 16,
    name: "Blouse Wanita Elegan",
    category: "Pakaian",
    image: "/gallery/product/blushwanita.png",
    price: 449000,
    description:
      "Blouse wanita dengan potongan elegan, cocok untuk kerja maupun acara semi formal.",
    features: ["Satin premium", "Desain elegan"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 17,
    name: "Kemeja Flanel Pria",
    category: "Pakaian",
    image: "/gallery/product/flanelpria.png",
    price: 279000,
    description:
      "Kemeja flanel pria tebal, pas untuk udara dingin dan tampilan kasual.",
    features: ["Flanel tebal", "Nyaman dipakai"],
    payments: ["Transfer Bank", "E-Wallet"],
  },
  {
    id: 18,
    name: "Kaos Kaki Premium",
    category: "Pakaian",
    image: "/gallery/product/kaoskakipremium.png",
    price: 49000,
    description:
      "Kaos kaki premium dengan bahan lembut dan nyaman untuk aktivitas sehari-hari.",
    features: ["One size", "Cotton blend"],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 19,
    name: "Hoodie Unisex",
    category: "Pakaian",
    image: "/gallery/product/hoodieunisex.png",
    price: 499000,
    description:
      "Hoodie unisex hangat dan lembut, cocok untuk dipakai di dalam maupun luar ruangan.",
    features: ["Bahan fleece", "Unisex"],
    payments: ["Transfer Bank", "E-Wallet"],
  },
  {
    id: 20,
    name: "Baju Batik Pria",
    category: "Pakaian",
    image: "/gallery/product/batikpria.png",
    price: 379000,
    description:
      "Baju batik pria modern dengan motif elegan untuk acara formal.",
    features: ["Katun batik", "Motif elegan"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 21,
    name: "Sepatu Sport Nike Air",
    category: "Sepatu",
    image: "/gallery/product/sportnike.png",
    price: 1299000,
    description:
      "Sepatu sport Nike Air dengan bantalan udara yang empuk untuk olahraga.",
    features: ["Air cushion", "Size 38–44"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 22,
    name: "Sepatu Boots Pria",
    category: "Sepatu",
    image: "/gallery/product/bootspria.png",
    price: 899000,
    description:
      "Sepatu boots kulit pria yang tangguh untuk aktivitas outdoor.",
    features: ["Kulit berkualitas", "Sol kuat"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 23,
    name: "Kemeja Oxford Pria",
    category: "Pakaian",
    image: "/gallery/product/kemejaoxfordpria.png",
    price: 329000,
    description:
      "Kemeja oxford pria dengan bahan tebal namun tetap nyaman untuk kerja.",
    features: ["Oxford cotton", "Potongan rapi"],
    payments: ["Transfer Bank", "E-Wallet"],
  },
  {
    id: 24,
    name: "Celana Jeans Slim Fit",
    category: "Pakaian",
    image: "/gallery/product/jeansslimfit.png",
    price: 549000,
    description:
      "Celana jeans slim fit dengan bahan denim premium yang awet.",
    features: ["Denim premium", "Slim fit"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 25,
    name: "Tas Tote Bag Wanita",
    category: "Aksesoris",
    image: "/gallery/product/totebagwanita.png",
    price: 699000,
    description:
      "Tas tote wanita dengan material kulit sintetis berkualitas dan banyak kompartemen.",
    features: ["Leather look", "Multi compartment"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 26,
    name: "Jam Tangan Smartwatch",
    category: "Elektronik",
    image: "/gallery/product/smartwatch.png",
    price: 2499000,
    description:
      "Smartwatch dengan fitur fitness tracker dan notifikasi pintar.",
    features: ["Fitness tracker", "Notifikasi pintar"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 27,
    name: "Headphone Wireless",
    category: "Elektronik",
    image: "/gallery/product/headphonewireless.png",
    price: 1799000,
    description:
      "Headphone wireless dengan fitur noise cancelling dan baterai tahan lama.",
    features: ["Noise cancelling", "Baterai hingga 30 jam"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
  {
    id: 28,
    name: "Sepatu Sandal Sport",
    category: "Sepatu",
    image: "/gallery/product/sepatusandalsport.png",
    price: 249000,
    description:
      "Sandal sport yang ringan dan tahan air, cocok untuk aktivitas outdoor.",
    features: ["Waterproof", "Ringan"],
    payments: ["Transfer Bank", "E-Wallet", "COD"],
  },
  {
    id: 29,
    name: "Kaos Polo Pria",
    category: "Pakaian",
    image: "/gallery/product/polopria.png",
    price: 199000,
    description:
      "Kaos polo pria dengan bahan pique cotton yang adem dan rapi.",
    features: ["Pique cotton", "Kerak rapi"],
    payments: ["Transfer Bank", "E-Wallet"],
  },
  {
    id: 30,
    name: "Dress Midi Wanita",
    category: "Pakaian",
    image: "/gallery/product/dressmidi.png",
    price: 549000,
    description:
      "Dress midi wanita dengan bahan chiffon lembut dan warna feminim.",
    features: ["Chiffon lembut", "Siluet midi"],
    payments: ["Kartu Kredit", "Transfer Bank", "E-Wallet"],
  },
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
    const token =
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : null;

    if (!token) {
      router.push("/login");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
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