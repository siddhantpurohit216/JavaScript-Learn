const p1= new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Helloo from promise 1")
        // rej("Promise 2 failed!")

    },2000)
})
const p2= new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("Helloo from promise 2")
        rej("Promise 2 failed!")
    },3000)
})
const p3= new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("Helloo from promise 3")
        rej("Promise 2 failed!")

    },4000)
})

const result= Promise.all([p1,p2,p3]);
result.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.error(err)
})