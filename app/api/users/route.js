import { connect } from "../../../dbConfig/dbConfig";
import User from "../../../models/userModel";

export async function GET() {
  try {
    await connect();
    const users = await User.find();
    return Response.json(users);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
