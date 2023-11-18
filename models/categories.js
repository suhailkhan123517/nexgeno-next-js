import mongoose, { Schema, models } from "mongoose";

const categorySchema = new Schema(
  {
    category: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Categories =
  models.Categories || mongoose.model("Categories", categorySchema);

export default Categories;
