import mongoose, { Schema } from "mongoose";

const categoriesSchema = new Schema(
  {
    category: String,
    description: String,
    categoryDate: String,
  },
  {
    timestamps: true,
  }
);

const Categories =
  mongoose.models.Categories || mongoose.model("Categories", categoriesSchema);

export default Categories;
