const express = require('express')
const PORT =4444;
const path =require('path')
const app=express()
const {v4:uuid}=require('uuid');
const dotenv=require('dotenv')
dotenv.config()
const Blog = require('./models/Blog.model');
const connectMongo = require('./database/db');
// const blogRouter = require('./routes/blog.routes')
const blogRouter = require('./routes/blog.routes')

// app.use(express.static(path.join(__dirname,'')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

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
