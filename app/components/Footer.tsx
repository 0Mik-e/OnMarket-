import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.brandTitle}>OnMarket</h3>
            <p className={styles.brandText}>
              Marketplace modern untuk belanja fashion, elektronik, dan kebutuhan
              harian dengan pengalaman cepat, aman, dan nyaman.
            </p>
          </div>

          <div>
            <p className={styles.columnTitle}>Produk</p>
            <ul className={styles.linkList}>
              <li className={styles.link}>Flash Sale</li>
              <li className={styles.link}>Fashion</li>
              <li className={styles.link}>Elektronik</li>
              <li className={styles.link}>Aksesoris</li>
            </ul>
          </div>

          <div>
            <p className={styles.columnTitle}>Bantuan</p>
            <ul className={styles.linkList}>
              <li className={styles.link}>Pusat bantuan</li>
              <li className={styles.link}>Cara pembayaran</li>
              <li className={styles.link}>Pengembalian barang</li>
            </ul>
          </div>

          <div>
            <p className={styles.columnTitle}>Tentang</p>
            <ul className={styles.linkList}>
              <li className={styles.link}>Tentang OnMarket</li>
              <li className={styles.link}>Kebijakan privasi</li>
              <li className={styles.link}>Syarat & ketentuan</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span>© {new Date().getFullYear()} OnMarket. All rights reserved.</span>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>Secure Checkout</span>
            <span className={styles.badge}>24/7 Support</span>
            <span className={styles.badge}>Powered by Prisma & Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}