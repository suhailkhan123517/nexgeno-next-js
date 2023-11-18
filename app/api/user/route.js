import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");
  const user = await User.find({ _id: id });
  return NextResponse.json({ user });
}
