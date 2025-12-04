"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import styles from "./page.module.css";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

type PaymentMethod = "ewallet" | "cod" | "credit";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalItems } = useCart();
  const [method, setMethod] = React.useState<PaymentMethod>("ewallet");

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Checkout</h1>
          <p className={styles.empty}>Keranjang kamu masih kosong.</p>
          <button
            type="button"
            className={styles.checkout}
            onClick={() => router.push("/")}
          >
            Cari produk dulu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Pembayaran</h1>
        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
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
            </div>
          ))}
        </div>
        <div className={styles.summary}>
          <div>
            <p className={styles.summaryLabel}>Total item</p>
            <p className={styles.summaryValue}>{totalItems}</p>
          </div>
          <div>
            <p className={styles.summaryLabel}>Total yang dibayar</p>
            <p className={styles.summaryValue}>{formatPrice(totalPrice)}</p>
          </div>
          <p className={styles.summaryLabel}>Pilih metode pembayaran</p>
          <div className={styles.paymentChips}>
            <button
              type="button"
              className={styles.checkout}
              onClick={() => setMethod("ewallet")}
            >
              E-Wallet
            </button>
            <button
              type="button"
              className={styles.checkout}
              onClick={() => setMethod("cod")}
            >
              COD
            </button>
            <button
              type="button"
              className={styles.checkout}
              onClick={() => setMethod("credit")}
            >
              Kartu Kredit
            </button>
          </div>
          <button
            type="button"
            className={styles.checkout}
            onClick={() => router.push(`/payment/success?m=${method})`)}
          >
            Bayar sekarang
          </button>
        </div>
      </div>
    </div>
  );
}