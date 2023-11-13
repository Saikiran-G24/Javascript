//creating a promise and before using async/await how to handle promises;
const pr=new Promise((resolve,reject)=>{setTimeout(()=>{resolve('resolved promise value')},5000)
    })
function getData(){
    //Js engine will not wait for promise to be resolved. 
    pr.then((res)=>console.log(res))   //most of them think programe will wait in this line until promise resolve (it is wrong). when function runs it is register this promise, And takes the callback function keep it seperately. and executes the next line.after 10 sec result of promise will be displayed by console.[Most of the people think js waits for until promise resolve. after resolve Then only it is gothe next line(it is wrong)]
    console.log('namaste javascript')
}
getData()