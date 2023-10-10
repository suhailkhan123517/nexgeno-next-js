import { connectMongoDB } from "@/libs/mongodb";
import Categories from "@/models/categories";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newCategory: category, newDescription: description } =
    await request.json();
  await connectMongoDB();
  await Categories.findByIdAndUpdate(id, {
    category,
    description,
  });
  return NextResponse.json({ message: "Category Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const categories = await Categories.findOne({ _id: id });
  return NextResponse.json({ categories }, { status: 200 });
}
