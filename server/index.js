import { config } from 'dotenv';
import express from 'express'
import  productRouter  from './router/productRouter.js'
import connectDB from './config/configdb.js';
import cors from 'cors'
//configure env file
config();

const server = express()

//database configuration
connectDB();

//middleware
server.use(cors({
    origin : '*'
}))
server.use(express.json())
server.use('/api/v1/product', productRouter)


server.listen(process.env.PORT, ()=>{
    console.log(`server listening on port ${process.env.PORT}`)
})