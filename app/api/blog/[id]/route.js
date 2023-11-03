import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Blog from "@/models/blog";

export async function PUT(request, { params }) {
  const { id } = params;

  const {
    imageUrl,
    newTitle: title,
    newDescription: description,
    newTextEditor: textEditor,
    newCatagoriesData: catagoriesData,
    newSeoTitle: seoTitle,
    newMetaDescription: metaDescription,
  } = await request.json();
  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, {
    imageUrl,
    title,
    description,
    textEditor,
    catagoriesData,
    seoTitle,
    metaDescription,
  });

  return NextResponse.json({ message: "Category Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blogs = await Blog.findById(id);
  return NextResponse.json({ blogs }, { status: 200 });
}
