let txt=""
function dis()
{
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};
for (let x in person) {
  txt += person[x]+"    ";// x="fname"
}
}
dis()
console.log(txt)

//for..in loop of js object

// const person=
// {
//     name:"mangamma",age:53,eyecolor:"blue",class:7
// }
// let txt = "";
// person.age=10;
// for(let x in person)

// {
//     txt += person[x]+" ";// x="name"
// }
//     person.lan="english"
//     console.log(person)
//         console.log(txt)







