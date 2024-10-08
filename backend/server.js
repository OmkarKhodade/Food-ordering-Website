import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config

const app = express()
const port = 4000

// middleware

app.use(express.json())       //to parse frontend request in json
app.use(cors())          //accesss backend from any frontend

// db connection

connectDB();

// api endpoint

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


app.get("/",(req,res)=> {
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


//  'mongodb+srv://omkarkhodadeit:NnbhQU0ozdU4CNN7@cluster0.vti9s.mongodb.net/food-delivery'