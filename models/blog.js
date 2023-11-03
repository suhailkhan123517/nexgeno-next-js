import mongoose, { Schema, models } from "mongoose";

const blogSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    textEditor: {
      type: String,
      required: true,
    },
    catagoriesData: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
    seoTitle: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    blogDate: {
      type: String,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

const Blog = models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
