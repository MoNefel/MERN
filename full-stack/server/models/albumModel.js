import { Schema, model } from "mongoose";

const albumSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [3, "Title must be at least 3 characters"],
      maxLength: [50, "Title must be at most 50 characters"]
    },
    artist: {
      type: String,
      required: [true, "Artist is required"],
      minLength: [3, "Artist must be at least 3 characters"],
      maxLength: [50, "Artist must be at most 50 characters"]
    },
    year: {
      type: Number,
      required: [true, "Year is required"],
      min: [1920, "Year must be at least 3 characters"],
      max: [2025, "Year must be at most 50 characters"]
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      minLength: [3, "Genre must be at least 3 characters"],
      maxLength: [50, "Genre must be at most 50 characters"]
    },
    isExplicit: {
      type: Boolean,
      required: [true, "isExplicit is required"]
    }
  },
  { timestamps: true }
);

//timestamps is to add created at and updated at in each documents

const Album = model("Album", albumSchema);
export default Album;
