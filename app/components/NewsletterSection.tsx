"use client";

import { useState } from "react";
import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }

    setIsLoading(true);
    
    // Simulasi API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
      
      // Reset setelah 3 detik
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Dapatkan Penawaran Spesial</h2>
            <p className={styles.subtitle}>
              Berlangganan newsletter kami dan dapatkan diskon eksklusif, update produk terbaru, dan penawaran spesial langsung di inbox Anda.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
                <button
                  type="submit"
                  className={styles.button}
                  disabled={isLoading}
                >
                  {isLoading ? "Mengirim..." : "Berlangganan"}
                </button>
              </div>
              <p className={styles.privacy}>
                Dengan berlangganan, Anda menyetujui{" "}
                <a href="#" className={styles.link}>
                  Kebijakan Privasi
                </a>{" "}
                kami.
              </p>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✓</span>
              <p>Terima kasih! Email Anda berhasil didaftarkan.</p>
            </div>
          )}

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}></span>
              <span>Diskon eksklusif</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}></span>
              <span>Update produk terbaru</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}></span>
              <span>Akses flash sale lebih dulu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}