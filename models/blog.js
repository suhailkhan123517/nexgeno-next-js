import mongoose, { Schema, models } from "mongoose";

const blogSchema = new Schema(
  {
    image: String,
    title: String,
    description: String,
    textEditor: String,
    catagoriesData: String,
    writer: String,
    seoTitle: String,
    metaDescription: String,
    blogDate: String,
  },

  { timestamps: true }
);

const Blog = models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
