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
    const catagories = data.get("catagories");
    const image = file.name;
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);
    await connectMongoDB();
    await Blog.create({ image, title, description, textEditor, catagories });
    return NextResponse.json({ message: "file uploaded" }, { success: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error upload" }, { status: 500 });
  }
}
