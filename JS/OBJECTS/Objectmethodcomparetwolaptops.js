//Object method compare two laptops

// function getFastLaptop(laptop1,laptop2)
// {
//     if(laptop1.cpu>laptop2.cpu)
//     console.log(laptop1)
//     else
//     console.log(laptop2)
// }
// let laptop1={
//     cpu:"i5",
//     ram:64,
//     brand:"apple"
// }
// let laptop2={
//     cpu:"i7",
//     ram:64,
//     brand:"Dell"
// }
// getFastLaptop(laptop1,laptop2)
// console.log(laptop1.cpu)

//comparing two laptops by object method

let laptop1={
    cpu:"i6",
    ram:64,
    brand:"apple",
    compare:function(other)
    {
      if(this.cpu>other.cpu)
    console.log(laptop1)
    else
    console.log(laptop2)
    }
}
let laptop2={
    cpu:"i7",
    ram:64,
    brand:"Dell"
}
laptop1.compare(laptop2)

