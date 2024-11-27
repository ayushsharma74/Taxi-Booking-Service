import mongoose from "mongoose";

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
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    socketId: {
        type: String
    }
    
});

export const User = mongoose.model("User", userSchema);