
// Array of objects 
var objArr = [ 
    { 
        name: 'john', 
        age: 12, 
        gender: 'male'
    }, 
    { 
        name: 'jane', 
        age: 15, 
        gender: 'female'
    }, 
    { 
        name: 'julie', 
        age: 20, 
        gender: 'trans'
    } 
]; 
console.log(objArr[0].age)
console.log(objArr[1])



// Array of objects 
var objArr = [ 
    { 
        name: 'john', 
        age: 12, 
        gender: 'male'
    }, 
    { 
        name: 'jane', 
        age: 15, 
        gender: 'female'
    }, 
    { 
        name: 'julie', 
        age: 20, 
        gender: 'trans'
    } 
]; 
console.log(objArr[0].age)
function dis(){
    for(let i in objArr){
        console.log(objArr[i])
    }
}dis()

//we can use this method also
    objArr.forEach((item)=>{
        console.log(item)
    })
//we can use this method also
objArr.map((i)=>console.log(i))
