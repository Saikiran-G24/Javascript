// //map()
// let a=[1,2,3,4,5,9];
// function mul(x){
//     return x*3;
// }
// const output=a.map(mul)
// console.log(output)//[3,6,9,12,15,27]

// //filter()
// let a=[1,2,3,4,5,9];
// function odd(x){
//     return (x%2==1);
// }
// const output=a.filter(odd)
// console.log(output)

// //reduce()
// let a=[1,2,3,4,5,9];
// let acc=0;
// const output=a.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// })
// console.log(output)



// //map() filter() reduce()

// let a=[{
//     firstName:"kudurupaka",LastName:"saikiran",place:"nalgonda",age:53
// },{
//     firstName:"kudurupaka",LastName:"mangamma",place:"nalgonda",age:53
// },{
//     firstName:"kudurupaka",LastName:"shiva krishna",place:"nalgonda",age:28
// },{
//     firstName:"kudurupaka",LastName:"somaiah",place:"nalgonda",age:92
// },{
//     firstName:"kudurupaka",LastName:"mamatha",place:"nalgonda",age:28
// },{
//     firstName:"kudurupaka",LastName:"mangamma",place:"nalgonda",age:53
// }]
// let res=a.reduce(function(acc,curr){if(acc[curr.age]){
//     acc[curr.age]+= 1;
//     }
//     else{
//         acc[curr.age]=1
//     }
//     return acc;
// }
// ,{})
// console.log(res)


// //reduce()

// let users=[
//     {firstName:"saikiran",lastName:"kudurupaka",age:25},
// {firstName:"mangamma",lastName:"kudurupaka",age:53},
// {firstName:"somaiah",lastName:"kudurupaka",age:56},
// {firstName:"shiva krishna",lastName:"kudurupaka",age:27},
// {firstName:"sai",lastName:"kudurupaka",age:25},{firstName:"sai",lastName:"kudurupaka",age:25}]
// //finding different ages
// //{25:2,53:1,56:1,27:1}
// const output=users.reduce(
//     function(acc,curr)
// {
    
//                 console.log("before",acc)

//     if(acc[curr.age])
//     {acc[curr.age]+=1}
//     else {
//         acc[curr.age]=1
//     }
//                 console.log(acc)
//     return acc;
// },{})

// //map()filter()reduce() methods on array
// let arr=[1,2,3,4,5,6,8]
// let res=arr.filter(num=>num%2==0).map(num=>num)
// .reduce((acc,curr)=> {
//     console.log('"before" acc value:',acc)
//   acc=acc+curr;
//       console.log('After acc value:',acc)
//   return acc;
// },0)
// console.log(res)


