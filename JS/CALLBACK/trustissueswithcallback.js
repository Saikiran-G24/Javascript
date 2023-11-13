//Trust issues with callback function in js
console.log('start')
setTimeout(function(){
    console.log('callback function')
},5000)
let startdate=new Date().getTime()
    let enddate=startdate
while(enddate<startdate+10000){
    enddate=new Date().getTime()
}
console.log('end')


//callback function
console.log('start')
setTimeout(function(){
    console.log('callback function')
},5000)
console.log('end')


//setTimeout set to 0 milli-seconds
console.log('start')
function cb(){
    console.log('callback function')
}
cb()
setTimeout(function cb(){
    console.log('hello callback function')
},0)
console.log('end')


//setTimeout set to 0 milli-seconds
console.log('start')
function cb(){
    console.log('callback function')
}
setTimeout(cb,0)
console.log('end')