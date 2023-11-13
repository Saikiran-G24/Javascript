
//However In general we don't keep our methods inside the objects. If you want reuse(reuseable)them, Just keep it somewhere outside.

let obj={name:'Panday',
type:'Good Boy', fullName:function(hometown,state){
   console.log(this.name+' is a '+this.type+' and '+hometown+state)
}
};

obj.fullName.call(obj,'and insperded by themself.',' telangana');
let obj1={name:'javascript',
type:'synchronous single threaded language'}
//function borrowing
obj.fullName.call(obj1,'And loosely typed language',' founded by american')
//apply method
obj.fullName.apply(obj1,['And loosely typed language',' founded by american'])
//bind method
 let printMyname=obj.fullName.bind(obj,'and insperded by themself',' telangana');
 console.log(printMyname)
printMyname()




//However In general we don't keep our methods inside the objects like this.



//  let obj={name:'Panday',
// type:'Good Boy'
//  };
//  let fullName=function(hometown,state){
//      console.log(this.name+' is a '+this.type+' and '+hometown+state)
//  }
//  fullName.call(obj,'and insperded by themself.',' telangana');
//  ------------------------------------------------------------------------------
//  let obj1={name:'javascript', 
// type:'synchronous single threaded language'}
// // fullname:function(hometown,state){                                            //Here call() method scenario comes
// //     console.log(this.name+' is a '+this.type+' and '+hometown+ state)      // Instead of 39 to 43 lines we can write like this    fullName.call(obj1,'And loosely typed language',' founded by american')
// // }
// // }
// // obj1.fullname('HYD',' and  Telangana')


// //function borrowing
//  fullName.call(obj1,'And loosely typed language',' founded by american')
// //apply method
//  fullName.apply(obj1,['And loosely typed language',' founded by american'])
// //bind method
//  let printMyname=fullName.bind(obj,'and insperded by themself.',' telangana');
// console.log(printMyname)
//  printMyname()



