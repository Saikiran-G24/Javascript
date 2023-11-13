//constructor function with new object
function Person(first,car,flower,bike)
{this.firstName=first;
this.carname=car;
this.flowername=flower;
this.bikemodel=bike;
this.college="govt";
}

//creating New object to constructor function
const assing=new Person("john","Audi","yellow","1000cc")
const assinged=new Person("john","rolls royies","yellow","1000cc")

console.log(assinged.college)