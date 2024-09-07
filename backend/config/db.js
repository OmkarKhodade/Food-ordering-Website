import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('Your mongoDB url').then(()=>{
        console.log("DB connected")
    })
}


