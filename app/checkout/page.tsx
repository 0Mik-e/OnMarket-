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
  const { items, totalItems, clearCart } = useCart();
  const [method, setMethod] = React.useState<PaymentMethod | null>(null);
  const [bank, setBank] = React.useState<string>("");
  const [ewallet, setEwallet] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [showModal, setShowModal] = React.useState(false);
  const [virtualAccount, setVirtualAccount] = React.useState<string | null>(
    null
  );
  const [secondsLeft, setSecondsLeft] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!showModal || secondsLeft === null) return;

    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev !== null ? Math.max(prev - 1, 0) : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [showModal, secondsLeft]);

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

  const handlePay = () => {
    // Validasi: metode & detail pembayaran harus dipilih
    if (!method) {
      setError("Silakan pilih metode pembayaran terlebih dahulu.");
      return;
    }
    if (method === "ewallet" && !ewallet) {
      setError("Pilih e-wallet yang ingin digunakan.");
      return;
    }
    if (method === "credit" && !bank) {
      setError("Pilih bank kartu kredit terlebih dahulu.");
      return;
    }
    if (!location.trim()) {
      setError("Isi lokasi pengiriman terlebih dahulu.");
      return;
    }

    setError(null);

    // Generate nomor VA acak
    const prefix =
      method === "ewallet"
        ? "88"
        : method === "credit"
        ? "55"
        : "99"; // COD bisa dianggap kode referensi
    const randomDigits = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 10).toString()
    ).join("");

    setVirtualAccount(prefix + randomDigits);
    setSecondsLeft(10);
    setShowModal(true);
  };

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
              className={styles.secondaryButton}
              onClick={() => {
                setMethod("ewallet");
                setError(null);
              }}
            >
              E-Wallet
            </button>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => {
                setMethod("cod");
                setError(null);
              }}
            >
              COD
            </button>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => {
                setMethod("credit");
                setError(null);
              }}
            >
              Kartu Kredit
            </button>
          </div>

          {method === "credit" && (
            <div className={styles.fieldGroup}>
              <p className={styles.summaryLabel}>Pilih bank</p>
              <select
                className={styles.select}
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              >
                <option value="BCA">BCA</option>
                <option value="BNI">BNI</option>
                <option value="BRI">BRI</option>
                <option value="Mandiri">Mandiri</option>
              </select>
            </div>
          )}

          {method === "ewallet" && (
            <div className={styles.fieldGroup}>
              <p className={styles.summaryLabel}>Pilih E-Wallet</p>
              <select
                className={styles.select}
                value={ewallet}
                onChange={(e) => setEwallet(e.target.value)}
              >
                <option value="Gopay">GoPay</option>
                <option value="OVO">OVO</option>
                <option value="Dana">Dana</option>
                <option value="ShopeePay">ShopeePay</option>
              </select>
            </div>
          )}

          <div className={styles.fieldGroup}>
            <p className={styles.summaryLabel}>Lokasi pengiriman</p>
            <input
              className={styles.input}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Kota / Kecamatan"
            />
          </div>

          {error && <p className={styles.errorText}>{error}</p>}

          <button
            type="button"
            className={styles.primaryButton}
            onClick={handlePay}
          >
            Bayar sekarang
          </button>
        </div>
      </div>

      {showModal && virtualAccount && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            {secondsLeft && secondsLeft > 0 ? (
              <>
                <span className={styles.badge}>Menunggu pembayaran</span>
                <h2 className={styles.modalTitle}>Selesaikan pembayaran</h2>
                <p className={styles.modalText}>
                  Gunakan nomor VA / kode berikut sebelum waktu habis.
                </p>
                <p className={styles.vaLabel}>Nomor VA / Kode Bayar</p>
                <p className={styles.vaValue}>{virtualAccount}</p>
                <p className={styles.timerText}>
                  Otomatis terkonfirmasi dalam {secondsLeft} detik...
                </p>
              </>
            ) : (
              <>
                <span className={styles.badge}>Pembayaran sukses</span>
                <h2 className={styles.modalTitle}>Terima kasih!</h2>
                <p className={styles.modalText}>
                  Pesanan kamu sedang diproses dan akan dikirim ke {location}.
                </p>
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => {
                    setShowModal(false);
                    clearCart();
                    router.push("/");
                  }}
                >
                  Kembali ke beranda
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}