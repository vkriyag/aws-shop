
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    title :{
        type : String,
        required : [true, 'title is required']
    },
    price :{
        type : Number,
        required : [true, 'price is required']
    },
    description :{
        type : String,
        required : [true, 'desc. is required']
    },
    category :{
        type : String,
        required : [true, 'category is required']
    },
    image :{
        type : String,
        required : [true, 'image is required']
    },
    rating :{
        type : String,
        default : 0
    }
})

export default model('product', productSchema)