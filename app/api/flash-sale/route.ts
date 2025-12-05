import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { category: { contains: "baju" } },
          { category: { contains: "pakaian" } },
          { category: { contains: "sepatu" } },
          { category: { contains: "tas" } },
          { category: { contains: "aksesoris" } },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 12,
    });

    // Tambahkan info diskon & harga flash sale secara dinamis
    const flashSale = products.map((product, index) => {
      const baseDiscount = 30;
      const extra = (index * 7) % 35;
      const discount = baseDiscount + extra; // 30–64%

      const flashPrice = Math.max(
        1000,
        Math.round(product.price * ((100 - discount) / 100))
      );

      return {
        ...product,
        discount,
        flashPrice,
      };
    });

    return NextResponse.json({ items: flashSale });
  } catch (error) {
    console.error("[FLASH_SALE_GET]", error);
    return NextResponse.json(
      { message: "Gagal memuat data flash sale" },
      { status: 500 }
    );
  }
}
