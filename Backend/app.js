const express = require('express')
const PORT =4444;
const path =require('path')
const app=express()
const {v4:uuid}=require('uuid');

const Blog = require('./models/Blog.model');

app.use(express.static(path.join(__dirname,'')))
app.use(express.urlencoded())
app.use(express.json())

// let blog=[
//     /*
//         BlogId(PK)
//         Title(String)
//         Body(String)
//         Post_Date(Date) 
//     */
// ]



app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
})