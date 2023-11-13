//Before using async await how do you handle promise.
//creating a promise
const pr=new Promise((resolve,reject)=>resolve('Promise resolved value'));
// console.log(pr)
//How to handle promise 
pr.then(res=>console.log('Promise handling Before async await:',res))


//how we do handle promises using async and await
async function handlePromise(){
const value=await pr;                     //Here const value will be taken the promise resolved value.
//await is keyword and that can be used inside a async function. we can write await infront of promise and it is resolves the promise.
console.log('async function: ',value)
}
handlePromise()


