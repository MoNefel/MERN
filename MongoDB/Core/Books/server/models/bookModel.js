import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [2, "Title must be at least 2 characters"],
      maxLength: [255, "Title must be at most 255 characters"]
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      minLength: [5, "Author must be at least 5 characters"],
      maxLength: [255, "Author must be at most 255 characters"]
    },
    pages: {
      type: Number,
      required: [true, "Pages is required"],
      min: [1, "Must be at least 1 page"]
    },
    isAvailable: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

//timestamps is to add created at and updated at in each documents
const Book = model("Book", bookSchema);
export default Book;
