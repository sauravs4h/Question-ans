// // import React,{useEffect} from "react";


// // const mycomponent = ()=>{

// //    const handleResize=()=>{

// //     }

// //     useEffect(()=>{

// //         window.addEventListener("resize",handleResize);

// //         return ()=>{
// //             window.removeEventListener("resize",handleResize)
// //         };
// //     },[])
// // }






// import React,{useEffect} from "react";

// function mycomponent(){

//     const handleResize=()=>{

//     };


//     useEffect(()=>{

//         window.addEventListener("resize",handleResize);


//         return ()=>{
    
//             window.removeEventListener("resize",handleResize);
//         }

//     },[])
   
    
// }






// let obj={
//     name:"saurav",
//     age:25
// }

// Object.freeze(obj);

// obj.age=26





let obj={
    name:"saurav",
    greet:function(greeting,age){
        console.log(greeting,this.name,"age is",age)
    }
}

let anotherperson={
    name:"mohan"
}

//obj.greet.call(anotherperson,"hellooooo")

// const greetsaurav=obj.greet.bind({name:"kamal"},"hello");
// greetsaurav();

obj.greet.apply(anotherperson,["hello",26])