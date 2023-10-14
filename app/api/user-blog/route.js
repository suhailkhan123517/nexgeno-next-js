import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(request) {
  const authorId = request.nextUrl.searchParams.get("authorId");
  const blogs = await Blog.find({ authorId });
  return NextResponse.json({ blogs });
}
