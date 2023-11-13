//First Class Functions
var b= function (param1){
    console.log('function act as an argument',param1)
}
b(function ()    //function act as an argument to another function.
{})

// Function assigned to an variable.
var b=function (param1){
    console.log('Function assigned to an variable',param1)
}
function xyz(){
    
}
b(xyz)

//Reurning a Annonymous Functions
var b=function(){
    console.log('reurning a annonymous function')

return function(){
    
}
}
console.log(b())     //Returning function from another function

//Reurning a Named Function
var b=function(){
    console.log('Returning a named function')

return function xyz(){
    
}
}
console.log(b())