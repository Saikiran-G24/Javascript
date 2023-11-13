

//Promise.all()


const p1=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('promise 1 sucess'),3000)
            setTimeout(()=>reject('promise 1 fails'),1000)

})
const p2=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('promise 2 sucess'),1000)
        setTimeout(()=>reject('promise 2 fails'),1000)
})
const p3=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('promise 3 sucess'),2000)
            setTimeout(()=>reject('promise 3 fails'),1000)
})
Promise.all([p1,p2,p3]).then(res=>console.log(res))
.catch((err)=>console.error(err));       //(or) we can wright console.log(err)