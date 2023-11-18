import mongoose, { Schema, models } from "mongoose";
import Categories from "@/models/categories"; // Adjust the path accordingly

const blogSchema = new Schema(
  {
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
    imageUrl: {
      type: String,
    },
    publicId: {
      type: String,
    },
    metaTitle: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

const Post = models.Post || mongoose.model("Post", blogSchema);

export default Post;
