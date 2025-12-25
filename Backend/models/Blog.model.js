const  mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    post_date:{type:Date, default:Date.now},

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
})

const Blog = mongoose.model('Blog', BlogSchema)
module.exports=Blog