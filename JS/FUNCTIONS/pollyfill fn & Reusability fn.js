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





