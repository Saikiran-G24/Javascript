//colsers and functional behaviour

//closure defination
function x()
{
    var a=7;
        console.log(a)
  return  function y()
    {
        console.log(a)
    }
}
var z=x();
console.log('output is: ',x()) //         7       this line  executes ( fn call   + And display the which value stored in it )        
                                 //    output is:  [Function: y]


//function behaviour

function x()
{
    var a=7;
    function y()
    {
        console.log(a)
    }
return y;        // y is fn name it stores y= {console.log(a)}
}
var z=x();       //z=[function:y]
z()              //returns 7

//function behaviour

function x()
{
    var a=7;
    function y()
    {
        console.log(a)
    }
return y();        // y is fn name, it contain {console.log(a)}
}
var z=x();         //output is 7;

//function behaviour

function x()
{
    var a=7;
    function y()
    {
        return a
    }
return y;           // y is fn name it stores {console.log(a)}
}
var z=x();
console.log(z())     // returns 7;

//function behaviour

function x()
{
    var a=7;
    function y()
    {
        return a
    }
    return y;
}
x();
console.log(x()())          //returns 7;

//function behaviour

function x()
{
    var a=7;
    function y()
    {
        console.log(a) ;
    }
    return y();
}
x()                          //returns 7;

//function behaviour

function x()
{
    var a=7;
    function y()
    {
        return (a) ;
    }
    return y();
}
x()
console.log(x())               //returns 7;

//function behaviour

function x()
{
    let a=  function y()
    {
        return (a);
    };
  return a();
}
x()
 console.log(x())             //[function:y]

//function behaviour

 function x()
{
    let a=  function y()
    {
        return (a);
    };
  return console.log(a())           //[function:y]          
}
x()

//function behaviour

function x()
{
    let a=  function y()
    {
        return (a);
    };
  console.log(a())                    //[function:y] 
}
x()
