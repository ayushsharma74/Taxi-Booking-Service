import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInfo = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✨ Connected to MongoDB at port ${connectionInfo.connection.port}`);
    } catch (error) {
        console.log(error);
    }
}