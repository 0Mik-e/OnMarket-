import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET || "secret_key");

    return NextResponse.json({
      premium: {
        status: "inactive",
        price: 35000,
        features: [
          "Akses fitur eksklusif",
          "Support prioritas",
          "Tanpa iklan",
          "Akses early features",
        ],
      },
    });
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
