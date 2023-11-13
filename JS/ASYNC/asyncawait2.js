//using async an await, how to handle promise.
const pr1=new Promise((resolve,reject)=>
{setTimeout(()=>{
    resolve('resolved promise value1');
    
},20000);
    });
    const pr2=new Promise((resolve,reject)=>
    {setTimeout(()=>
    {resolve('resolved promise value2');
     },40000);
     });
    async function handlepromise(){
        console.log('hello world')
        //virtually we can call js engine was waiting for promise to be resolved.
        //Actually it is not js engine we can call it as funtion call will be suspended for a while means until promise fetch() the data from server(In this case it will take 5 sec).Then promise get resolved.
        
        const val1=await pr1;
        console.log("namaste javascript")
        console.log(val1)
        
        const val2=await pr2;
        console.log('namaste javascript2')
        console.log(val2)
    }
    handlepromise();
    //prints the "hello world"
    //At pr1 function execution is suspended for 10 sec. After 10 sec both promises displayed on console. Because At pr2 this promise get resolve in 5 sec but still this lines had to wait for 10 sec to resolve.
    //namste javascript
    //resolved promise value
     //namste javascript2
    //resolved promise value
    //In this case same promise assigned to different variable name.
    //If both promises have same time,After that time both promises are displayed at atime.


//SUMMARY

//Promise resolved value
//namste javascript
//Promise resolved value
//namste javascript
////After 10 sec It is qickly prints
// when it moves to await pr2, By that time it is alredy resolved.
//After pr1 resolved. Again handlepromise() function come inside the callstack and starts execution from where it is left. And prints whatever inside console move to the next line.
//handlepromise() sees await pr1 suspend the handlepromise() function execution until pr1 get the data and resolved.
//hello world
//handlepromise()
//Intially Empty
    //Callstack
