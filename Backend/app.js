const express = require('express')
const PORT =4444;
const path =require('path')
const app=express()
const {v4:uuid}=require('uuid');
const dotenv=require('dotenv')
dotenv.config()
const Blog = require('./models/Blog.model');
const User = require('./models/User.model')
const connectMongo = require('./database/db');
// const blogRouter = require('./routes/blog.routes')
const blogRouter = require('./routes/blog.routes');
const userRouter = require('./routes/user.routes')
const cors = require("cors");

// app.use(express.static(path.join(__dirname,'')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
  origin: [process.env.allowed_origin],
  credentials: true
}));


// let blog=[
//     /*
//         BlogId(PK)
//         Title(String)
//         Body(String)
//         Post_Date(Date) 
//     */
// ]

connectMongo().then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    })
})
.catch(err=>{
    throw new Error(err)
})

// const blogRouter = require('./routes/blog.routes')

// APIs
app.use('/blog',blogRouter)
app.use('/user',userRouter)
