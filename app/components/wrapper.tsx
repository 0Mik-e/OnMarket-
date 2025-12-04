"use client";

import { usePathname } from "next/navigation";
import PromoTicker from "./PromoTicker";

export default function PromoWrapper() {
  const pathname = usePathname();

  const hidePromo =
    pathname === "/premium" ||
    pathname === "/help-center";

  if (hidePromo) return null;

  return <PromoTicker />;
}