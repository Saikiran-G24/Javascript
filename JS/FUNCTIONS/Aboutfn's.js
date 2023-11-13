
a();
b();
//Function Statement
function a()
{

}
//Function Expression
var b=function ()
{
    console.log('b called')
}
//The major diff b/w the fn statement & Expression is "HOISTING"

//Anonymous Function Expression
var b=function ()                 //fn expression without fn name is called "Anonymous Function Expression"
{
    console.log('b called')
}

//Named Function Expression
var b=function xyz()             //fn expression with function name is called "named function expression"
{                   
    console.log('named function expression')
}
//Function parameters and arguments
function a(parameter1,parameter2)//These are parameters of a function.
{
console.log("hello world")
}
a(1,2)               //These are fn arguments

//First class functions(or)citizens
