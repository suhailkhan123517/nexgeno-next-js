import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { connectMongoDB } from "@/libs/mongodb";
import Blog from "@/models/blog";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");
    const title = data.get("title");
    const description = data.get("description");
    const textEditor = data.get("textEditor");
    const catagoriesData = data.get("catagoriesData");
    const writer = data.get("writer");
    const seoTitle = data.get("seoTitle");
    const metaDescription = data.get("metaDescription");
    const blogDate = data.get("blogDate");
    const authorId = data.get("authorId");
    const image = file.name;
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);
    await connectMongoDB();
    await Blog.create({
      image,
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
    return NextResponse.json({ message: "blog uploaded" }, { success: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error upload" }, { status: 500 });
  }
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
