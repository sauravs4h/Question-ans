
function demo(callback){

    setTimeout(()=>{

        let data="saurav";

        callback(data);
    },2000)
}

function cb(data){
    console.log("data id",data)
}

demo(cb);

useEffect(()=>{


    return ()=>{

    }

},[])