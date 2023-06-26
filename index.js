import React,{useEffect} from "react";


const mycomponent = ()=>{

   const handleResize=()=>{

    }

    useEffect(()=>{

        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener("resize",handleResize)
        };
    },[])
}



















import React,{useEffect} from "react";

function mycomponent(){

    const handleResize=()=>{

    };


    useEffect(()=>{

        window.addEventListener("resize",handleResize);


        return ()=>{
    
            window.removeEventListener("resize",handleResize);
        }

    },[])
   
    
}






let obj={
    name:"saurav",
    age:25
}

Object.freeze(obj);

obj.age=26




