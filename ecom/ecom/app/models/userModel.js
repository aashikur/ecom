import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: [true, "Please add a username"],
        unique: true
    },
    email: {
        type: string,
        required: [true, "Please add a email"],
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: string,
    forgotPasswordTokenExpiry: Date,
    verifyToken: string,
    verifyTokenExpiry: Date,

})


const User = mongoose.models.users ||  mongoose.model("users", userSchema);

export default User;