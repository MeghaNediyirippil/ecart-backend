// To define routes for client requests

// 1 Import express
const express=require('express')

// 4 Import product controller
const ProductController=require('../controllers/productController')
const wishlistController=require('../controllers/wishlistController')
const cartController=require('../controllers/cartController')

// 2.using express create object for router class inorder to setup path
const router=new express.Router()

// 3. Use router object to resolve client request

    // get all products api request
router.get('/products/all-products',ProductController.getAllProducts)

// get a particular product details
router.get('/products/view-product/:id',ProductController.viewProduct)

// add new product to the wishlist
router.post('/wishlists/add-to-wishlist',wishlistController.addToWishlist)

// add to cart
router.post('/carts/add-to-cart',cartController.addToCart)

// get cart
router.get('/carts/get-cart',cartController.getCart)

// delete cart
router.delete('/carts/delete-product/:id',cartController.deleteCartProduct)

// increment cart quantity
router.get('/carts/increment-product/:id',cartController.incrementProductCount)


// decrement cart quantity
router.get('/carts/decrement-product/:id',cartController.decrementProductCount)


// 5 export routes
module.exports=router