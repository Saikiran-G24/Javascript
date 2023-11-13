
//Real world example of async/await function.

const API_URL="https://github.com/Saikiran-G24/Saikiran-HTML.git"
async function handlepromise(){
const data=await fetch(API_URL)//Here handlepromise() function sees await and suspend the handlepromise() fn execution untill fetch() function tooks time to get the data. After getting data promise could be resolved.Then handlepromise() function come inside a callstack and starts execution from where it is left the program.
//Response of fetch() function converted into json().    i.e.   "Response.json()"     and it is again a promise so we can write await before promise:   i.e. "await data.json()" Here  handlepromise() fn sees await and again it will be suspended from callstack until promise i.e "data.json()" will took the time to get the data and  promise resolved. 
//After promise resolved, handlepromise() function return into the callstack and starts execution from where it is left the code. And it is displays the response i.e. "jsonvalue" on console. 

const jsonvalue= await data.json()

//fetch()=>response.json()=>jsonvalue.
//fetch().then(res=>res.json().then(jsonvalue=>console.log(jsonvalue)))
//we can also convert response into a string, text,and also a json.

console.log(jsonvalue)

}
handlepromise();