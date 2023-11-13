 
 // clousers in var case
 
 function x()
{
    for( i=1;i<=5;i++)  // OR we can use instead   for(var i=1;i<=5;i++)

    setTimeout(function(){
        console.log(i);
    },i*1000)
}
x();                 //output: 6 6 6 6 6

 // clousers in let(Block-scope) case


 function x()
 {
     for(let i=1;i<=5;i++)
     setTimeout(function(){
         console.log(i);
     },i*1000)
 }
 x();                 // Output: 1 2 3 4 5 

//Example

 function x()
{
    for(var i=1;i<=5;i++){
    function z(i){
    setTimeout(function(){
        console.log(i);
    },i*1000)
    }
    z(i)
    }
}
x();                      // Output: 1 2 3 4 5 