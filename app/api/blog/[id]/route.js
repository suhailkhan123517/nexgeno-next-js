import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { connectMongoDB } from "@/libs/mongodb";
import Blog from "@/models/blog";

export async function PUT(req, { params }) {
  const { id } = params;
  try {
    const data = await req.formData();
    const file = data.get("newLatestFile");
    const title = data.get("newTitle");
    const description = data.get("newDescription");
    const textEditor = data.get("newTextEditor");
    const catagoriesData = data.get("newCatagoriesData");
    const seoTitle = data.get("newSeoTitle");
    const metaDescription = data.get("newMetaDescription");
    const image = file.name;
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);
    await connectMongoDB();
    await Blog.findByIdAndUpdate(id, {
      image,
      title,
      description,
      textEditor,
      catagoriesData,
      seoTitle,
      metaDescription,
    });
    return NextResponse.json({ message: "Blog Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error upload" }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blogs = await Blog.findById(id);
  return NextResponse.json({ blogs }, { status: 200 });
}
