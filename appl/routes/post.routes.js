const express=require("express");
const { Postmodel } = require("../models/post.model");

const postr=express.Router();

postr.post("/postpost",async(req,res)=>{

    let {title,text}=req.body;

    try {

        let post=new Postmodel({title,text});
        await post.save()
        res.send({})
        
    } catch (error) {
        
    }
})

postr.post("addcomment",async(req,res)=>{
    let {userid,comment}=req.body;
    

    try {

        await Postmodel.findByIdandupdate({_id:userid},{$push:{comment:comment}});
        res.send({msg:"comment added"})
        
        
    } catch (error) {
        
    }
})


module.exports={postr}