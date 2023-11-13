const arr=['jhon','doe','peter','random']
let mystring=JSON.stringify(arr)
console.log(mystring)


const person={name:'jhon',age:30,city:'goa'}
const res=Object.values(person)
console.log(res)
const Arrayobj=JSON.stringify(person)
console.log(Arrayobj)
console.log(typeof Arrayobj)


const person1={name:'jhon',age:function(){return 30;},city:'goa'}
function dis(){
if(person1.age=person1.age.toString()){
console.log(person1.age)
}
}
dis()
let arrobj=JSON.stringify(person1)
console.log(arrobj)
