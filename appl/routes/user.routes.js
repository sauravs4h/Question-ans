const express=require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {Usermodel}=require("../models/user.model")
const userr=express.Router();

userr.post("/signup",async(req,res)=>{

    let {name,email,password}=req.body;

    let useravailable=await Usermodel.findOne({email:email});

    if(useravailable){
        res.send({msg:"alr in data please login",status:"error"});
    }else{
        try {
            bcrypt.hash(password, 5, async function(err, hash) {
               
                if(err){
                    res.send({msg:"something goes wrong",status:"error"})
                }
                
                let obj={name,email,password:hash}
    
                const forsave= new Usermodel(obj);
                await forsave.save();
                res.send({msg:"signup successfull",status:"success"});
            });
    
            
        } catch (error) {
            res.send({msg:"something goes wrong",status:"error"})
            
        }
    }

    

});

userr.post("/login",async(req,res)=>{
    let {email,password}=req.body;

    let useravailable=await Usermodel.findOne({email});
    let haspassword=useravailable?.password

    if(useravailable){
        try {


            bcrypt.compare(password, haspassword, function(err, result) {
                if(result){
                    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
                    res.send({msg:"login successfull",token:token,status:"success"})

                }else{
                    res.send({msg:"worng password"})
                }
            });
        
        } catch (error) {
            
        }
    }
    else{
        res.send({msg:"please signup first",status:"error"})
    }

    
})



module.exports={userr}