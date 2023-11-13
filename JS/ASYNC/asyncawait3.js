//using async an await, how to handle promise.
const pr1=new Promise((resolve,reject)=>
{setTimeout(()=>{
    resolve('resolved promise value1');
    
},5000);
    });
    const pr2=new Promise((resolve,reject)=>
    {setTimeout(()=>
    {resolve('resolved promise value2');
     },10000);
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
    //hello world
    //At pr1 handlepromise suspended for 5 sec after that prints whatever in console.
    //namaste javascript
    //resolved promise value
    //At pr2,Actually handlepromise suspended for 10 sec but it is already waited for 5 sec when pr1 execution time.Now it is remaining 5 sec after that prints whatever in console.
    
    //summary

//As soon as this handlepromise() function is call and it is sees that there two promises needs to be resolved. And these async promises are taking their own time in resolution. 
//javascript does not wait for anything. And these handlepromise() function when it sees await over their execution is suspend until promise get the data. and it will move out of callstack and it will not block the main thread.
//After promise pr1 resolved.Then only handlepromise() function move ahead.After 5 sec handlepromise() fucntion again come inside the callstack. And it is again start exection where it is left. 
//when it is come to await p2 it sees p2 is RESOLVED (or) NOT.p2 is not yet resolved because it has just been 5 sec.p2 is resolved after 10 sec. So handlepromise() function will again suspend and move outof callstack.callstack become empty.
// Once the p2 is resolved after 10 sec, Now handlepromise() function  again comeback to the callstack. And it is start execution from where it is left. And prints the whatever in console.

//Promise resolved value
//namste javascript
//After 10 sec(but it has been alredy 5 sec)
// Again it sees await pr2 now it has been 5 sec and checkes whether pr2 is RESOLVED(or)NOT. pr2 takes 10 sec to resolve. So the handlepromise() function Again suspend until pr2 get the data and resolved. After pr2 resolved handlepromise() function come inside the callstack and starts execution from where it is left. And prints whatever in console.
//Promise resolved value
//namste javascript
//After 5 sec 
//After pr1 resolved. Again handlepromise() function come inside the callstack and starts execution where it is left. And prints whatever in console move to the next line.
//handlepromise() sees await pr1 suspend the handlepromise() function execution until pr1 get the data and resolved.
//hello world
//handlepromise()
//Intially Empty
    //Callstack