// logic for wishlist
// import wishlist from model
const wishlists = require('../models/wishlistSchema');
const wishlist=require('../models/wishlistSchema')

// logic for add wishlist
exports.addToWishlist=async(req,res)=>{
    // get product detail
    // req.body={
    //     id:9890,
    //     title:'err',
    //     price:'658'
    // }
    
    // destructing
    const {id,title,price,image}=req.body;

    // logic
    try{
        // check if product is already available in wishlists
    const item=await wishlists.findOne({id})
    if(item){
        res.status(403).json("product is already available in the wishlist")
    }
    else{
        const newProduct=new wishlists({id, title, price, image})
        // to store new product in the wishlists
        await newProduct.save()
        // send response back to the client
        res.status(200).json("Product added successfully")

    }
    }
    catch(error){
        res.status(401).json(error)

    }
}