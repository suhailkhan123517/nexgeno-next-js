import mongoose, { Schema, models } from "mongoose";

const blogSchema = new Schema(
  {
    image: {
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
    catagories: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Blog = models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
