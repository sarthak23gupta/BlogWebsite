const express=require('express')
const Blog =require('../models/Blog.model')
const router=express.Router()

router.post('/add',async(req,res)=>{
   try {
     const {title , body}=req.body
 
     await Blog.create({
         title:title,
         body:body
     })
     res.status(200).json({
         msg:'Blog Post Done Successfully',
         title
     })
     res.status(404).json({
        success:false,
        msg:'not able to fetch blog',
     })
   } catch (error) {
        res.status(500).json({
            msg:'not able to post the blog',
            error:error.message
        })
   }
})
                    
router.get('/get/:id',async(req,res)=>{
    try {
        const {id}=req.params
        // const {title , id}=req.params
        let fetchData=await Blog.findOne({
            _id:id
        })
        // console.log(fetchData.id);
        res.status(200).json({
            success:true,
            msg:'Blog Fetch done successfully',
            title:fetchData.title,
            body:fetchData.body
        })
        if(!fetchData){
            res.status(404).json({
                success:false,
                msg:'not able to fetch blog',
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:'not able to fetch blog',
            error:error.message
        })
    }
})

router.get('/get',async(req,res)=>{
    try {
        let fetchAllData = await Blog.find();
        res.status(200).json({
            success:true,
            msg:'Fetch all the blogs successfully',
            total:fetchAllData.length,
            data:fetchAllData
        })
        res.status(404).json({
            success:false,
            msg:'not able to fetch blog',
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            msg:'not able to fetch all blogs',
            error:error.message
        })
    }
})

module.exports=router