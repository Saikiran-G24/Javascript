 //Examples
 
 function a()
{
    var x=0;//when runs pgm allocate memory for x,after execution it is unused so it is freezeup the memory by garbage collector 
    function b()
    {
        console.log(a)
    }
}
a()

 //Examples
 
 function a()
{
    var x=0;//when runs pgm allocate memory for x, It is used so it is can't be freezeup the memory by garbage collector.
    return function b()
    {
        console.log(x)
    }
}
var y=a()
//...
y()           // 'x' Memory can't be freeze because we can use later somewhere wright



//garbage collector

function a()
{
var x=0,z=10;                      //Here 'z' is the garbage collector.
 return function b()
{
    console.log(x)
}
}
var y=a()
//......
y()    // 'x' Memory can't be freeze because we can use later somewhere wright
