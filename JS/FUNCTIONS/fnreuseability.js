//Higher order fn's,callback functions,first class fuctions

const arr=[5,7,3,14]
const logic=function(arr){         //call back functions
    return Math.PI*arr*arr
}
const circomference=function(arr){      //call back functions
        return Math.PI*arr*2
}
const diameter=function(arr){    //call back functions
        return arr*2
}
const area=function(logic){    //higher order function
    let output=[]
    for(i=0;i<arr.length;i++)
    {
      output.push(logic(arr[i]))
    }
    return output;
}
console.log(area(logic))
console.log(area(circomference))
console.log(area(diameter))


//This is correct way use of functions.

const arr=[5,7,3,14]
const logic=function(arr){
    return Math.PI*arr*arr
}
const circomference=function(arr){
        return Math.PI*arr*2
}
const diameter=function(arr){
        return arr*2
}
const area=function(logic){
    let output=[]
    for(i=0;i<arr.length;i++)
    {
      output.push(logic(arr[i]))
    }
    return output;
}
console.log(area(logic))
console.log(area(circomference))
console.log(area(diameter))
console.log(arr.map(logic))

//Pollyfill map function in javascript

const arr=[5,7,3,14]
const logic=function(arr){
    return Math.PI*arr*arr
}
const circomference=function(arr){
        return Math.PI*arr*2
}
const diameter=function(arr){
        return arr*2
}
Array.prototype.area=function(logic){
    let output=[]
    for(i=0;i<this.length;i++)
    {
      output.push(logic(this[i]))
    }
    return output;
}
console.log(arr.area(logic))
 console.log(arr.area(circomference))
console.log(arr.area(diameter))
console.log(arr.map(logic))
if(Array.prototype.area==arr.area)
{
    console.log('prototype')         //prototype
}















