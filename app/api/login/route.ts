import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user)
      return NextResponse.json({ error: "Email not found" }, { status: 400 });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return NextResponse.json({ error: "Wrong password" }, { status: 400 });

    return NextResponse.json({ success: true, user });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
