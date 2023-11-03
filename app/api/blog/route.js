import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Blog from "@/models/blog";

export async function POST(request) {
  const {
    imageUrl,
    title,
    description,
    textEditor,
    catagoriesData,
    writer,
    seoTitle,
    metaDescription,
    blogDate,
    authorId,
  } = await request.json();

  await connectMongoDB();

  await Blog.create({
    imageUrl,
    title,
    description,
    textEditor,
    catagoriesData,
    writer,
    seoTitle,
    metaDescription,
    blogDate,
    authorId,
  });

  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog  Deleted" }, { status: 200 });
}
