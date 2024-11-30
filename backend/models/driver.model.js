import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const driverSchema = new Schema({
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
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    },
    rating: {
        type: Number,
        default: 0
    },
    vehicleType: {
        type: String,
        enum: ["auto", "car", "motorcycle"],
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    vehicleImage: {
        type: String,
    },
    status: {
        type: String,
        enum: ["inactive", "active"],
        default: "inactive"
    }
});

driverSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
    next();
})
driverSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: "24h"});
    return token;
}

driverSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export const Driver = mongoose.model("Driver", driverSchema);