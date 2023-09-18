import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

export default mongoose.model("Users", UserSchema)