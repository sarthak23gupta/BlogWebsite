const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    // contact:{type:Number, match: [/^[0-9]{10}$/]}
    contact:{type:Number, minlength:10, maxlength:10}
})

const User = mongoose.model('users',userSchema)
module.exports=User