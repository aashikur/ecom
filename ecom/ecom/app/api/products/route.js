// app/api/products/route.js
import { connect } from '../../../dbConfig/dbConfig';
import Product from '../../../models/productModel';

export async function POST(req) {
  try {
    await connect(); // Connect to DB

    const body = await req.json();

    if (!body.name || !body.category || !body.description || !body.price) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      });
    }

    const product = await Product.create(body);

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function GET() {
  try {
    await connect();
    const products = await Product.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
