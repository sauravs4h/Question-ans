var jwt = require('jsonwebtoken');
const auth=(req,res,next)=>{

    let token=req.headers.authorization?.split(" ")[1];

    if(token){
        jwt.verify(token, 'shhhhh', function(err, decoded) {
            if(err){
                res.send({})
            }

            user
            next()
          });


    }else{
        res.send({"msg":"not"})
    }
}