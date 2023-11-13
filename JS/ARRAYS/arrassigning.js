let arr=[3,5,6,8,9]
let [a,b,c,d,e]=arr;
console.log(c)

//array destructuring in js
let arr1='my name is saikiran is felling better now'.split(' ')
console.log(arr1)
let [f,g,h,...i]=arr1
console.log(typeof i,i)
console.log(typeof f,f)

//we can vlaue, index, arryname as arguments to the forEach function
let arr2=[23,44,56,8,98,99]
arr2.forEach((num,i,arr2)=>{
    console.log(num,i,arr2)
})

//when we use for of loop and forEach() method
let arr3=[23,344,15,4,95]
for(let num of arr3)
{
    console.log("In for of loop we get only acess to array element means values of an array itself",num)
}
arr3.forEach((num,i,arr3)=>{
        console.log('forEach Method  used to declare the value,property and delcare arrayname as arguments:',num,i)
})

