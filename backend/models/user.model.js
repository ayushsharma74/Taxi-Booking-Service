import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
    },
    socketId: {
        type: String
    }
    
});

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.static.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

export const User = mongoose.model("User", userSchema);