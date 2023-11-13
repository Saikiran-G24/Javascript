//async function always returns a promise
async function getdata(){
    return 'aysnc function always return a Promise';//If it is does not return a promise by itself.It is returns a value or string or anything rapid inside the promise and it will returns a promise.
}
const dataPromise=getdata()
console.log(getdata)
console.log(getdata())


// In above case i return  a string and it is rapid inside the promise and return promise.  What If i return a promise from asyn function.
const pr=new Promise((resolve,reject)=>{
    resolve('async is a keyword used to ceate async function')
});
async function getdata(){
    return pr;
}
const datapromise=getdata()
console.log(datapromise)//reprasenting a promise object.


//async function

const pr1=new Promise((resolve,reject)=>{
    resolve ('async is a keyword used to ceate async function')
});
async function getdata(){
    return pr1; //It is promise, So it is not rapid inside a promise.
}
const promise=getdata()
console.log('"pr is reprasenting a promise object:" ',pr1)                            //pr is reprasenting a promise object:
console.log('"Here async function and datapromise return a promise:" ',promise)  //"Here async function and datapromise return a promise:"
pr1.then(res=>console.log('"when Data prasent inside a promise object then only this function runs:" ',res))   //when Data prasent inside a promise object then only this function runs:
