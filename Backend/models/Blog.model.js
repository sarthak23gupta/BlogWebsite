const  mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:String,
    body:String,
    post_date:{type:Date, default:Date.now},

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
})

const Blog = mongoose.model('Blog', BlogSchema)
module.exports=Blog