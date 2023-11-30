import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Post from "@/models/post";

export async function PUT(request, { params }) {
  const { id } = params;

  const {
    title,
    description,
    textEditor,
    imageUrl,
    publicId,
    metaTitle,
    metaDescription,
    catId,
  } = await request.json();
  await connectMongoDB();
  await Post.findByIdAndUpdate(id, {
    title,
    description,
    textEditor,
    imageUrl,
    publicId,
    metaTitle,
    metaDescription,
    catId,
  });

  return NextResponse.json({ message: "Post Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const post = await Post.findById(id)
    .populate("authorId")
    .populate("categoryId");
  return NextResponse.json({ post }, { status: 200 });
}
