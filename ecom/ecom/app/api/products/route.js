import { connect } from "../../../dbConfig/dbConfig";
import Product from "../../../models/productModel";

export async function POST(req) {
  try {
    await connect();

    const body = await req.json();
    const { name, description, price, category, stock, image } = body;

    // Validate required fields
    if (!name || !description || !price) {
      return Response.json({ error: "Name, description, and price are required" }, { status: 400 });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      image,
    });

    return Response.json({ message: "Product added successfully ✅", product });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
