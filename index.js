//Automatically load .env file in to the application
require('dotenv').config()

//2 import express
const express= require('express')
// import cors
const cors=require('cors')

// import connection.js
require('./connection.js')

// import router
const router=require('./routes/router')

//3 Create an application using the express
const server=express()

// 4 Define the port number
const PORT = 5000

// 7.Use cors in server app
server.use(cors())
server.use(express.json())
server.use(router)


//5.Run the application
server.listen(PORT,()=>{
    console.log('listen on port '+PORT);
})

// 8 Define Routes
server.get('/',(req,res)=>{
    res.status(200).json('Ecommerce service started');
})