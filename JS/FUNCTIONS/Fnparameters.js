function par(a,b = 0)
{
   // console.log(a,b)
console.log("parameters arguments",a+b)
}

var k = 2,m = 4;
par(5,8);
//par(k,m); // par(2,4)
par(5);
//console.log(k+m,k*m,k/m,)
setTimeout(function() {
    par(3,43)
}, 2000)