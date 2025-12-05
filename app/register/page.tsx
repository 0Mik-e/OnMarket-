"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      return alert(data.error ?? "Gagal mendaftar, coba lagi.");
    }

    alert("Akun berhasil dibuat, silakan login.");
    router.push("/login");
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-layout">
        <aside className="auth-showcase">
          <p className="pill">Mulai Mencari Produk</p>
          <h2>Buat akun baru</h2>
          <p>
            Daftar sekarang dan nikmati kemudahan berbelanja di OnMarket.
          </p>
          <ul>
            <li>Pengiriman cepat</li>
            <li>Voucher & promosi terjadwal</li>
            <li>Pembayaran aman dan mudah</li>
          </ul>
        </aside>

        <form className="auth-card" onSubmit={handleRegister}>
          <div className="auth-tabs">
            <Link href="/login">Login</Link>
            <span className="active">Sign Up</span>
          </div>

          <header className="auth-header">
            <h1>Daftar akun baru</h1>
            <p>Lengkapi data untuk langsung menuju halaman login.</p>
          </header>

          <label className="input-label">
            Nama Lengkap
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="contoh: William Marcello"
            />
          </label>

          <label className="input-label">
            Email
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="contoh: kamu@email.com"
            />
          </label>

          <label className="input-label">
            Password
            <input
              required
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Minimal 6 karakter"
            />
          </label>

          <button className="primary-btn" disabled={loading}>
            {loading ? "Mendaftarkan..." : "Buat Akun"}
          </button>

          <p className="auth-switch">
            Sudah punya akun? <Link href="/login">Langsung login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
