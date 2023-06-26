const mongoose=require("mongoose");

const postSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    
    title:String,
    text:String,

    like:Number,
    Comment:[]

});

const Postmodel=mongoose.model("post",postSchema);

module.exports={Postmodel}