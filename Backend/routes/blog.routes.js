const express=require('express')
const Blog =require('../models/Blog.model')
const router=express.Router()

router.post('/add',async(req,res)=>{
   try {
        const {title , body}=req.body
    
        let newBlog = await Blog.create({
            title:title,
            body:body
        })
        if(newBlog)
        {
            return res.status(200).json({
                success:true,
                msg:'Blog Post Done Successfully',
                data:newBlog
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                msg:'Not able to Create blog',
            })
        }
    } catch (error) {
            return res.status(500).json({
                success:false,
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
        if(fetchData)
        {
            res.status(200).json({
                success:true,
                msg:'Blog Fetch done successfully',
                // title:fetchData.title,
                // body:fetchData.body
                data:fetchData
            })
        }
        else
        {
            res.status(400).json({
                success:false,
                msg:'Blog not found for this id',
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
        if(fetchAllData)
        {
            res.status(200).json({
                success:true,
                msg:'Fetch all the blogs successfully',
                total:fetchAllData.length,
                data:fetchAllData
            })
        }
        else
        {
            res.status(400).json({
                success:false,
                msg:'Blog not found',
            })
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            msg:'Not able to fetch all blogs',
            error:error.message
        })
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const {id} =req.params
    
        let fetchData =await Blog.findByIdAndDelete(id)
        if(fetchData)
            {
                res.status(200).json({
                    success:true,
                    msg:'Blog Deleted successfully',
                    // title:fetchData.title,
                    // body:fetchData.body
                    data:fetchData
                })
            }
            else
            {
                res.status(400).json({
                    success:false,
                    msg:'Blog not found for this id',
                })
            }
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:'Not able to delete blog',
            error:error.message
        })
    }
})

router.put('/update',async(req,res)=>{
    try {
        // const {id}=req.params
        const {id}=req.body
    
        let updateBlog = await Blog.findOne({
            _id:id
        })
        updateBlog.title=req.body.title,
        updateBlog.body=req.body.body

        updateBlog.save()
        if(updateBlog)
        {
            res.status(200).json({
                success:true,
                msg:'Blog Updated successfully',
                // title:fetchData.title,
                // body:fetchData.body
                data:updateBlog
            })
        }
        else
        {
            res.status(400).json({
                success:false,
                msg:'Blog not found for this id',
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:'Not able to Update blog',
            error:error.message
        })
    }

})

module.exports=router