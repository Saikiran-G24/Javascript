
//fucnction behavior
function x(){
    console.log('x is called')
}
function y(){
    return x;
}
var a=y()
a()


//fucnction behavior
function x(){
    console.log('x is called')
}
function y(){
    x();
}
y()


//fucnction behavior
function x(){
    console.log('x is callback function')
}
function y(){
    return x
}
var a=y()
console.log(a)
a()