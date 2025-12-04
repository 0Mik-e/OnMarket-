"use client";

import { useSearchParams, useRouter } from "next/navigation";
import styles from "./page.module.css";

const methodLabel: Record<string, string> = {
  ewallet: "E-Wallet",
  cod: "Cash on Delivery (COD)",
  credit: "Kartu Kredit",
};

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const method = searchParams.get("m") ?? "ewallet";

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Pembayaran Berhasil</h1>
        <p className={styles.summaryLabel}>
          Terima kasih, pesanan kamu sedang diproses.
        </p>
        <p className={styles.summaryValue}>
          Metode pembayaran: {methodLabel[method] ?? "E-Wallet"}
        </p>
        <button
          type="button"
          className={styles.checkout}
          onClick={() => router.push("/")}
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}