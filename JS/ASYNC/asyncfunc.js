const pr=new Promise((resolve,reject)=>{
    resolve ('async is a keyword used to ceate async function')
});
async function getdata(){
    return pr; //It is promise, So it is not rapid inside a promise.
}
const datapromise=getdata()
console.log('"pr is reprasenting a promise object:" ',pr)                            //pr is reprasenting a promise object:
console.log('"Here async function and datapromise return a promise:" ',datapromise)  //"Here async function and datapromise return a promise:"
datapromise.then(res=>console.log('when Data prasent inside a promise object then only this function runs: ',res))   //when Data prasent inside a promise object then only this function runs:
//In above line Instead of datapromise we can use pr. i.e: pr.then(res=>console.log(res))