import mongoose from 'mongoose';


const connectDB = ()=>{
    mongoose.connect(process.env.DATA)
.then(()=>console.log('database connection establised'))
.catch((err)=>console.log(err))

}


export default connectDB