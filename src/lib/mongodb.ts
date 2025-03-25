import mongoose from "mongoose";

if(!process.env.DB_URL) {
    throw new Error('Database connection string was not provided');
}

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`)
        console.log('MongoDB database connected successfully');
    } catch (error) {
        console.error(error);
        console.log('MongoDB database failed to connect');
        process.exit(1);
    }
}

export default connectDB;