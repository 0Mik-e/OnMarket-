"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      return alert(data.error ?? "Gagal login, coba lagi.");
    }

    localStorage.setItem("token", data.token);
    router.push("/");
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-layout">
        <aside className="auth-showcase">
          <p className="pill">Marketplace Premium</p>
          <h2>Kelola toko online dan pantau penjualan dari satu dashboard.</h2>
          <p>
            Login untuk memantau performa, menambah produk baru, hingga meninjau
            pesanan pelanggan secara real-time.
          </p>
          <ul>
            <li>Analitik penjualan harian</li>
            <li>Integrasi payment gateway</li>
            <li>Tim support 24/7</li>
          </ul>
        </aside>

        <form className="auth-card" onSubmit={handleLogin}>
          <div className="auth-tabs">
            <span className="active">Login</span>
            <Link href="/register">Sign Up</Link>
          </div>

          <header className="auth-header">
            <h1>Masuk ke akun Anda</h1>
            <p>Akses profil dan mulai berjualan di OnMarket.</p>
          </header>

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
              placeholder="Masukkan password"
            />
          </label>

          <button className="primary-btn" disabled={loading}>
            {loading ? "Memproses..." : "Login"}
          </button>

          <p className="auth-switch">
            Belum punya akun? <Link href="/register">Daftar sekarang</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
