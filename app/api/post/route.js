import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Post from "@/models/post";

export async function POST(request) {
  const {
    title,
    description,
    textEditor,
    imageUrl,
    publicId,
    metaTitle,
    metaDescription,
    categoryId,
    authorId,
  } = await request.json();

  await connectMongoDB();

  await Post.create({
    title,
    description,
    textEditor,
    imageUrl,
    publicId,
    metaTitle,
    metaDescription,
    categoryId,
    authorId,
  });

  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const posts = await Post.find()
    .populate("authorId")
    .populate("categoryId")
    .sort({ createdAt: -1 });
  return NextResponse.json({ posts });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  const post = await Post.findByIdAndDelete(id);
  return NextResponse.json(post);
}
