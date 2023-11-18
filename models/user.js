import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    imageUrl: { type: String },
    publicId: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
