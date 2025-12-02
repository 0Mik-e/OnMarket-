"use client";

import Link from "next/link";

export default function CollectionsPage() {
  return (
    <section className="auth-wrapper">
      <div className="auth-card" style={{ maxWidth: 640, textAlign: "left" }}>
        <header className="auth-header">
          <h1>Manajemen Koleksi</h1>
          <p>
            Di sini nantinya kamu bisa mengatur koleksi produk, misalnya Fashion,
            Elektronik, Beauty, dan kategori lain seperti di marketplace besar.
          </p>
        </header>

        <p>
          Untuk saat ini halaman ini masih bersifat tampilan demo. Kamu sudah
          berhasil melewati cek login karena tombol <strong>Tambah Koleksi</strong>{" "}
          hanya membawa user yang sudah login ke halaman ini.
        </p>

        <p style={{ marginTop: 16 }}>
          <Link href="/" className="secondary-link">
            Kembali ke beranda
          </Link>
        </p>
      </div>
    </section>
  );
}

