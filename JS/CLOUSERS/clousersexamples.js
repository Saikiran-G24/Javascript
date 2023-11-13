
//clousers examples
function outer(b)
{
    var a=7;
    function inner()
    {
        console.log(a,b);
    }
    return inner;
}
var res=outer('helloworld');
res()

//relation of scope chai and clouser

function outest(c)
{
function outer(b)
{
    var a=7;
    function inner()
    {
        console.log(a,b,c);
    }
    return inner;
}
return outer;
}
var res=outest('world')('hello');
var z=outest('sai')
console.log(z)

//conflicting name global variable
function outest(c)
{
    var c=10;
    function outer(b)
    {
        var a=7;
        function inner()
        {
            console.log(a,b,c)
        }
        return inner
    }
    return outer;
}
let res=outest()('helloworld')
res()

//Data hiding and encapusulation
function counter(){
    var count=0;
    return function incrementcount()
    {
        count++;
        console.log(count)
    }
    }
    var counter1=counter()
    counter1();
    counter1();//If you call agin it will incremented
    var counter2=counter()//It again forms clouser with function counter
    counter2()


    //Function constructor in javascript
function Counter(){
    var count=0;
    this.incrementcount=function ()
    {
        count++;
        console.log(count)
    }
    this.decrementcount=function()
    {
        count--;
        console.log(count)
    }
    }
    
    var counter1=new Counter()
    counter1.incrementcount()
    counter1.incrementcount()
    counter1.decrementcount()