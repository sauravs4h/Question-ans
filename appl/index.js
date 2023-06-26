const express=require("express");
const app=express();


const {connection}=require("./config/db");

const {userr}=require("./routes/user.routes");
const {postr}=require("./routes/post.routes");

app.use(express.json());
app.use("/user",userr);
app.use("/post",postr);

app.get("/",(req,res)=>{
    res.send({msg:"hello this base"})
})

app.listen(8080,async()=>{

    try {
        await connection
        console.log("connected with db")
        
    } catch (error) {
        
    }

    console.log("running on 8080")
})