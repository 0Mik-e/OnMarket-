"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import { useCart } from "../context/CartContext";

interface UserToken extends JwtPayload {
  name: string;
  email?: string;
}

export default function Navbar() {
  const [user, setUser] = useState<{ name: string; email?: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpData, setHelpData] = useState(null);
  const [premiumData, setPremiumData] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems } = useCart();

  const fetchProtectedData = async () => {
    try {
      const res = await fetch("/api/protected", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      setHelpData(data.help);
      setPremiumData(data.premium);
    } catch (err) {
      console.error("Failed to fetch protected data", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const decodeToken = () => {
      if (!token) {
        setUser(null);
        return;
      }
      try {
        const decoded = jwtDecode<UserToken>(token);
        if (decoded?.name) {
          setUser({ name: decoded.name, email: decoded.email });
          fetchProtectedData();
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };

    setTimeout(decodeToken, 0);
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setMenuOpen(false);
    router.push("/login");
  };

  const linkClass = (href: string) =>
    `${styles.link} ${pathname === href ? styles.active : ""}`;

  const initials =
    user?.name
      ?.split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "?";

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        <div className={styles.brandMark}>
          <Image
            src="/gallery/logo.png"
            alt="OnMarket logo"
            width={24}
            height={24}
          />
        </div>
        <span>OnMarket</span>
      </Link>

      <div className={styles.rightArea}>
        <button
          type="button"
          className={styles.cartButton}
          onClick={() => router.push("/cart")}
        >
          <span className={styles.cartIcon}>🛒</span>
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </button>

        {!user ? (
          <div className={styles.links}>
            <Link href="/login" className={linkClass("/login")}>
              Login
            </Link>
            <Link href="/register" className={linkClass("/register")}>
              Sign Up
            </Link>
          </div>
        ) : (
          <div className={styles.profileWrapper}>
            <div className={styles.profileText}>
              <span className={styles.userGreeting}>Hi,</span>
              <span className={styles.userName}>{user.name}</span>
            </div>
            <button
              type="button"
              className={styles.avatar}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {initials}
            </button>
            {menuOpen && (
              <div className={styles.profileMenu}>
                <p className={styles.menuName}>{user.name}</p>
                {user.email && (
                  <p className={styles.menuEmail}>{user.email}</p>
                )}
                <button
                  type="button"
                  onClick={logout}
                  className={styles.menuLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}