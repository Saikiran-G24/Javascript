//using async an await, how to handle promise.
const pr=new Promise((resolve,reject)=>{setTimeout(()=>{resolve('resolved promise value')},5000)
    })
    async function handlepromise(){
        console.log('hello world')
        //js engine was waiting for promise to be resolved.
        //not js engine we can call it as funtion call will be suspended for a while means until promise fetch() the data from server(In this case it will take 5 sec).Then promise get resolved.
        const val=await pr;
        console.log("namaste javascript")
        console.log(val)
    }
    handlepromise();
    //prints the "hello world"
    //afer 5 sec
    //namste javascript
    //resolved promise value
