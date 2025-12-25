const express=require('express')
const User= require('../models/User.model')
const router =express.Router()

router.post('/signup',async(req,res)=>{
    try {
        const {name, username, email, password, contact} = req.body
    
        let EmailValue =await User.findOne({email:email})
        if(EmailValue)
        {
            return res.status(409).json({
                success:false,
                msg:"Email Already Exist"
            })
        }
        let UsernameValue =await User.findOne({username:username})
        if(UsernameValue)
        {
            return res.status(409).json({
                success:false,
                msg:"Username Already Exist"
            })
        }
        if(!name.trim() || !username.trim() || !email.trim() || !password.trim() || !contact.trim())
        {
            return res.status(409).json({
                success:false,
                msg:"Fill blank details "
            })
        }   
      
        let Value =await User.create({
            email:email,
            password:password,
            name:name,
            username:username,
            contact:contact
        })
        if(Value)
        {
            return res.status(200).json({
                success:true,
                msg:'SignUp Successfully',
                details:Value
            })
        }

    } catch (error) {
        return res.status(500).json({
            success:false,
            msg:'SignUp Failed',
            error:error.message
        })
    }
})

router.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        let value =await User.findOne({
                email:email,
                password:password
        })
        if(value)
        {
            return res.status(200).json({
                success:true,
                msg:'Login Successfully',
                details:value
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                msg:"Please use correct credientials"
            })
    
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            msg:'Login Failed'
        })
    }
})

module.exports=router