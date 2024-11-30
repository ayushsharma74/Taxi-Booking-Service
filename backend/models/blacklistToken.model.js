import mongoose, { Schema } from "mongoose";

const blacklistTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 3600
    }
})

export const BlacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);
