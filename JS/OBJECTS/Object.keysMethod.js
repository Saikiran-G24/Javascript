let user={
    name:'saikiran', id:20304955,place:'hyderabad',age:25,
}
//We can acess the properties,values and both of an user by Object.keys(user)
let keys=Object.keys(user)
console.log(" Acessing PROPERTIES of an OBJECT user: ",keys)
let values=Object.values(user)
console.log("Acessing VALUES of an OBJECT user:",values)
let entries=Object.entries(user)
console.log("Acessing PROPERTIES AND VALUES of an OBJECT user:",entries)