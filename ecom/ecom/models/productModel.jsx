import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID is required"],
    },
    name: {
      type: String,
      required: [true, "Please add a product name"],
    },
    description: {
      type: String,
      required: [true, "Please add a product description"],
    },
    price: {
      type: Number,
      required: [true, "Please add a product price"],
    },
    offerPrice: {
      type: Number,
      required: false,
    },
    image: {
      type: [String], // Changed to array of strings for multiple images
      required: false,
    },
    category: {
      type: String,
      required: [true, "Please add a product category"],
    },
    date: {
      type: Number,
      default: Date.now,
    }
  },
  { timestamps: true }
);

// Prevent model overwrite in Next.js hot reload
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
