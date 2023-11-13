//callback functions
console.log('start')

setTimeout(function xyz(){
    console.log('callback')
},5000)
fetch('https://youtube.com/')
.then (function abc(){
    console.log('callback function from web API')
})
console.log('end')
