import { connectMongoDB } from "@/libs/mongodb";
import Categories from "@/models/categories";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { category } = await request.json();
  await connectMongoDB();
  await Categories.create({ category });
  return NextResponse.json({ message: "Categories Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const categories = await Categories.find();
  return NextResponse.json({ categories });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await Categories.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category  Deleted" }, { status: 200 });
}
