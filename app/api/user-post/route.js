import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(request) {
  const authorId = request.nextUrl.searchParams.get("authorId");
  const posts = await Post.find({ authorId })
    .populate("authorId")
    .populate("categoryId")
    .sort({ createdAt: -1 });
  return NextResponse.json({ posts });
}
