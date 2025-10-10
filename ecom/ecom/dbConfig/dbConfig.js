import mongoose from "mongoose";
 
// Fix the error by returning a promise
export async function connect() {

        try {
            mongoose.connect(process.env.MONGO_URI);

            const connection = mongoose.connection;

            connection.on("connected", () => {
                console.log("Mongoose is connected");
            })

            connection.on("error", (err) =>{
                console.log("Connection error with Mongoose: ",err);
                process.exit();

            })



        } catch (error) {
            console.log("connection error with Mongoose: ",error);
        }
}
