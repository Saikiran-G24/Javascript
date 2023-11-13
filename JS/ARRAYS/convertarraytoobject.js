//Using spread operator
const array=['callback','javascript','Promises','Document object model','prototype']
const obj ={...array}
console.log(obj)
//using Object.fromEntries() method convert array of key-value pairs into Object
const array1=[['name','saikiran'],['age',25],['place','hyderabad']]
const obj1=Object.fromEntries(array1)
console.log(obj1)
//using Object.assign() method creates new object and merging the properties of an array2 into empty object
const array2=['A','B','C','D','E']
const obj2=Object.assign({},array2)
console.log(obj2)
//Using for loop
const array3=['A','B','C','D','E']
const obj3={}
const arraytoobject=(array3)=>{
    for(i=0;i<array3.length;i++){
    obj3[i]=array3[i]
    }

}
console.log(arraytoobject(array3))

//using array.forEach(function(currentvalue,inex,array){})
const array5=['A','B','C','D','E']
    const obj5={}
    array.forEach((currentvalue, i,array5 )=>{
        obj[i]=currentvalue
        console.log(obj,i)
    })
// console.log(obj,i,array5)