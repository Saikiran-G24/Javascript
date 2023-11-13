//Call Back function in js
setTimeout(function(){
    console.log('timer')
},5000)   //setTimeout(asynchronous)
function a(y){
    console.log('x')
    y();
}
a(function y(){
    console.log('y')
})
