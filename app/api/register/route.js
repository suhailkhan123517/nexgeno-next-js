import { connectMongoDB } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { name, email, password: pass, role } = await req.json();
    const hashedPassword = await bcrypt.hash(pass, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const { password, ...user } = newUser._doc;
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const user = await User.find();
  return NextResponse.json({ user });
}
