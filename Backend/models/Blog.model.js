const  mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:String,
    body:String,
    post_date:Date
})

const Blog = mongoose.model('Blog', BlogSchema)
module.exports=Blog