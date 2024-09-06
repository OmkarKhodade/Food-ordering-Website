import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://omkardada:omk12345@cluster0.eei2uzn.mongodb.net/food-delivery').then(()=>{
        console.log("DB connected")
    })
}


// mongodb+srv://<username>:<1CR0L47R2Xwd9T9Q>@cluster0.jsan3.mongodb.net/

// 1CR0L47R2Xwd9T9Q
// mongodb+srv://haramistrange55:<password>@cluster0.a859u.mongodb.net/  






// mongodb+srv://omkardada:omk12345@cluster0.eei2uzn.mongodb.net/?  