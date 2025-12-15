const express = require('express')
const PORT =4444;
const path =require('path')
const app=express()

app.use(express.static(path.join(__dirname,'')))
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
})