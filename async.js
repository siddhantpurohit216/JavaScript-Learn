function fun1()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Inside Fun 1");
        },5000)
    })
    
}
function fun2()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Inside Fun 2");
        },2000)
    })
}

// async function fun() {

//     console.log("start");

//     const ans= await fun1();
//     console.log(ans);

//     const ans1=await fun2()
//     console.log(ans1);
    

//     console.log("end");
// }
// fun();

function funnn(){
    return new Promise((res,rej)=>{
        res("done")
    })
}
funnn().
then((res)=>{

    fun1(ress)})
    .then((ress)=>fun2());