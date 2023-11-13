//callback function along with timer
console.log('start')
setTimeout(function(){
console.log(' setTimeout used to take callback function')
},5000)
console.log('end')

//callback function along with click event
console.log('start')
let count=1;
document.getElementById('Click').addEventListener('click',function (){   //here we can give fuction with function name(function xyz(){}),It's your wish.
    console.log('Execute callback function',count++)
})
console.log('end')