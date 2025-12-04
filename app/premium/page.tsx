"use client";

import { useState } from "react";
import styles from "./premium.module.css";

export default function PremiumPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* Tombol Back */}
        <button
          className={styles.backBtn}
          onClick={() => window.history.back()}
        >
          ← Back
        </button>

        <h1 className={styles.title}>OnMarket Premium</h1>
        <p className={styles.subtitle}>
          Gabung ke premium dan dapatkan berbagai benefit!
        </p>

        <ul className={styles.benefits}>
          <li>- Voucher potongan belanja s/d. 50% setiap hari</li>
          <li>- Gratis ongkir seluruh Indonesia</li>
          <li>- Akses Customer Service Prioritas</li>
          <li>*Syarat dan ketentuan berlaku</li>
        </ul>

        <button className={styles.buyBtn} onClick={() => setOpen(true)}>
          Mulai dari Rp. 12.999,-
        </button>
      </div>

      {open && (
        <div className={styles.popupOverlay} onClick={() => setOpen(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h2>Pilih metode pembayaran...</h2>

            <div className={styles.paymentList}>
              <button>QRIS</button>
              <button>OVO</button>
              <button>DANA</button>
              <button>VA Bank</button>
            </div>

            <button className={styles.closeBtn} onClick={() => setOpen(false)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
