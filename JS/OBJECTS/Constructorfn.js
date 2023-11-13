function User(name,place,age,id)
{
    this.name=name;
    this.place=place;
    this.age=age;
    this.id=id;
    this.work=function()
    {
        console.log("solving errors or bugs from last 2 hours");
    }
    return this.age
}
let User1=new User('saikiran','nalgonda',25,854245425)
User1.id=20304955
let User2=new User('sai','Hyderabad',25)
console.log(User2)
User2.work()
