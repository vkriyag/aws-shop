import Product from '../model/productSchema.js';


//to create the product

export const createProduct = async(req, res)=>{
    const { title, price, description, category, image, rating } = req.body
    try {
        const product = await Product.create({
            title: title,
            price : price,
            description : description,
            category : category,
            image : image,
            rating : rating
        })
        res.status(201).json({
            success : true,
            message : 'product crated successfully',
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'error in creating product',
            
        })
    }
}

//to get the product

export const getAllProduct = async(req, res)=>{
    try {
        const product = await Product.find()
        res.status(200).json({
            success : true,
            message : "getting all products successfully",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'error in product fetching',
            error
        })
    }
}
//to get single the product

export const getProduct = async(req, res)=>{
    try {
        const id = req.params.id
        const product = await Product.findOne({_id : id})
        res.status(200).json({
            success : true,
            message : "getting single products successfully",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'error in fetching single product',
            error
        })
    }
}
//to update the product

export const updateProduct = async(req, res)=>{
    const { title, price, description, category, image, rating } = req.body
    try {
        const id = req.params.id
        const product = await Product.findByIdAndUpdate(
            {_id : id},
            {
                title: title,
                price : price,
                description : description,
                category : category,
                image : image,
                rating : rating
            },
            {new : true}
            )
            res.status(201).json({
                success: true,
                message: 'product updated successfully',
                product
            })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'error in updating product',
            error
        })
    }
}
//to delete the product

export const deleteProduct = async(req, res)=>{
    const id = req.params.id
    try {
        const product = await Product.findByIdAndDelete({_id : id})
        res.status(200).json({
            success : true,
            message : "product deleted successfully",
            product
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'error in deleting product',
            error
        })
    }
}