import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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
    category: {
      type: String,
      required: false,
    },
    stock: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite in Next.js hot reload
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
