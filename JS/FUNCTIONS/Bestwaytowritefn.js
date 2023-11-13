//Best way to write and use functions modularity,reuseability,and logical thinking

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
area=function(input,logic){
    let output=[]
    for(i=0;i<arr.length;i++)
    {
      output.push(logic(input[i]))
    }
    return output;
}
console.log(area(arr,logic))
 console.log(area(arr,circomference))
console.log(area(arr,diameter))
console.log(arr.map(logic))





