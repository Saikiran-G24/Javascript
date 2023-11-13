
// setTimeout+closures


function x()
{
    var i=1;
    setTimeout(function(){
        console.log(i)        //fuction creates the closures,setTimeout takes callback fn and it is stores in some where, along with timer.And js doesn't wait for any one goto the next line and executes it first.
    })
    console.log('Namaste Javascript')    // It displays the first on output
}
x();   // Output like:  Namaste Javascript and next line 1



// setTimeout+closures

function x()
{
    var i=1;
    setTimeout(function(){
        console.log(i)        //fuction creates the clouser,setTimeout takes callback fn and it is stores in some where, along with timer.And js doesn't wait for any one goto the next line and executes it first.
    },3000)
    console.log('Namaste Javascript')    // It displays the first on output
}
x();         // Output like:  Namaste Javascript and next line 1 but here after "3 milliseconds display on screen"

