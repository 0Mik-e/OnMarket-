import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const SECRET = process.env.JWT_SECRET || "devsecret";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return NextResponse.json({ error: "Email tidak ditemukan" }, { status: 400 });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return NextResponse.json({ error: "Password salah" }, { status: 400 });

  const token = jwt.sign(
    { name: user.name, email: user.email },
    SECRET,
    { expiresIn: "1d" }
  );

  return NextResponse.json({ token });
}
