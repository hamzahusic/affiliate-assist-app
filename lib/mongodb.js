import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongodb database")
    } catch (error) {
        console.log("An error accrued while connecting to database",error);
    }
}