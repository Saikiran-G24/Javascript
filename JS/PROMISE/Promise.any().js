

//Promise.any()

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('promise 1 sucess'),3000)
            // setTimeout(()=>reject('promise 1 fails'),1000)

})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('promise 2 sucess'),3000)
        // setTimeout(()=>reject('promise 2 fails'),1000)
})
const p3=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('promise 3 sucess'),2000)
            setTimeout(()=>reject('promise 3 fails'),1000)
})
const p4=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('promise 4 sucess'),2000)
            // setTimeout(()=>reject('promise 3 fails'),000)
})
Promise.any([p1,p2,p3,p4]).then(res=>console.log(res))
.catch((err)=>console.error(err));       //(or) we can wright console.log(err)

//Promise.any()
//In case all Promises  failure-Aggregate ERROR.

const p5=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('promise 1 sucess'),3000)
            setTimeout(()=>reject('promise 1 fails'),4000)

})
const p6=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('promise 2 sucess'),3000)
         setTimeout(()=>reject('promise 2 fails'),5000)
})
const p7=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('promise 3 sucess'),2000)
             setTimeout(()=>reject('promise 3 fails'),1000)
})
const p8=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('promise 4 sucess'),1000)
             setTimeout(()=>reject('promise 3 fails'),2000)
})
Promise.any([p5,p6,p7,p8]).then(res=>console.log(res))
.catch((err)=>{console.error(err)
    console.log(err.errors);
});       //(or) we can wright console.log(err)



//OUTPUT RESPONSE:

//ERROR!
// [AggregateError: All promises were rejected] {
//     [errors]: [
//       'promise 1 fails',
//       'promise 2 fails',
//       'promise 3 fails',
//       'promise 3 fails'
//     ]
//   }


//How to handle aggregate errors in catch statemente we should write console.log(err.errors)