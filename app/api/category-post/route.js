import { connectMongoDB } from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectMongoDB();
  const categoryId = request.nextUrl.searchParams.get("categoryId");
  const posts = await Post.find({ categoryId })
    .populate("authorId")
    .populate("categoryId")
    .sort({ createdAt: -1 });
  return NextResponse.json({ posts });
}
