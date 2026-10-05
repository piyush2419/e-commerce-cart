import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, {minimize: false}) // This minimize keeps the empty objects stored in the database instead of being removed(remove id default that is basically removed).

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;