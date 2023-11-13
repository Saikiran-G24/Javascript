//closure 
function x()
{
    let a=7;
    function y()
    {
        console.log(a)      // closure(x)
    }
    y()
}
x();


//closure defination
function x()
{
    var a=7;
    function y()
    {
        console.log(a)
    }
    return y;
}
var z=x();    // After execution of this line fn 'x' no longer prasent. After we can call the fn'z'(or equal to y={console.log(a)}), 
//Js synchronous single threaded language, So here closure comes into picture when executes z(). They still remembers where they actually present along with lexical environment.
console.log(z);
// Even After.......1000 lines of code also we can call z() fn (whenever you call)
z();                               // returns 7




//closure defination
function x()
{
    var a=7;
   return function y()
    {
        console.log(a)
    }
}
var z=x();
console.log(z)
z()
