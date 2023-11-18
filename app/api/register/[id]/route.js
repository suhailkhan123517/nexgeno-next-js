import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import User from "@/models/user";

export async function PUT(request, { params }) {
  const { id } = params;
  const { imageUrl, publicId, name, title, role } = await request.json();

  await connectMongoDB();
  await User.findByIdAndUpdate(id, {
    imageUrl,
    publicId,
    name,
    title,
    role,
  });

  return NextResponse.json({ message: "Updated User" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findById(id);
  return NextResponse.json({ user }, { status: 200 });
}
