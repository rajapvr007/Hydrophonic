import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import connection from './DB/connection.js'
import CustomerRoute from './Routes/Auth.route.js'
import ProductRoute from './Routes/Product.route.js'
import CartRoute from './Routes/Cart.route.js'
import OrderRoute from './Routes/Order.route.js'

dotenv.config()

await connection()

const app=express()

app.use(cors({
   origin: 'http://localhost:5173',
   credentials: true
 }));
 app.use(cookieparser())
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))


 app.use("/api/v1/user",CustomerRoute)
 app.use("/api/v1/product",ProductRoute)
 app.use("/api/v1/cart",CartRoute)
 app.use("/api/v1/order",OrderRoute)

 app.listen(process.env.PORT,()=>{
    console.log("App is running on port",process.env.PORT)
 })