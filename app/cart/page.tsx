"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const router = useRouter();
  const { items, totalItems, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    const token = typeof window !== "undefined"
      ? window.localStorage.getItem("token")
      : null;

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Keranjang Belanja</h1>
        {items.length === 0 ? (
          <p className={styles.empty}>Keranjang kamu masih kosong.</p>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={72}
                      height={72}
                    />
                  </div>
                  <div className={styles.info}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.price}>
                      {item.quantity} x {formatPrice(item.price)}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.summary}>
              <div>
                <p className={styles.summaryLabel}>Total item</p>
                <p className={styles.summaryValue}>{totalItems}</p>
              </div>
              <div>
                <p className={styles.summaryLabel}>Total harga</p>
                <p className={styles.summaryValue}>
                  {formatPrice(totalPrice)}
                </p>
              </div>
              <button
                type="button"
                className={styles.clear}
                onClick={clearCart}
              >
                Kosongkan keranjang
              </button>
              <button
                type="button"
                className={styles.checkout}
                onClick={() => router.push("/checkout")}
              >
                Lanjut ke pembayaran
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}