 //promises
// const cart=["shoes","pants","kurtas"]


// //promise
// const promise=createorder(cart)   //orderId 
// promise.then(function(orderId){
//   return  proceedTopayment(orderId)  //In promise chain best way to remember "return" for pipe the promise chain
// });
// .then(function(paymentInfo){
//    return  showOrdersummary(paymentInfo)
// });
// .then(function(paymentInfo){
//  return  UpdatedWalletBalance(paymentInfo)
// });

//promises

// const cart=["shoes","pants","kurtas"]


// createorder(cart)   // createOrder returns "promise" 
// .then(function(orderId){
//   return  proceedTopayment(orderId)  //In promise chain best way to remember "return" for pipe the chain
// });
// .then(function(paymentInfo){
//    return  showOrdersummary(paymentInfo)
// });
// .then(function(paymentInfo){
//  return  UpdatedWalletBalance(paymentInfo)
// });




//promises with arrow functions

// const cart=["shoes","pants","kurtas"]


// createorder(cart)   //orderId returns createOrder and it is stored in promise object
// .then((orderId)=>
//   proceedTopayment(orderId)  //In promise chain best way to remember "return" for pipe the chain
// );
// .then((paymentInfo)=>
//  showOrdersummary(paymentInfo)
// );
// .then((paymentInfo)=>
//    UpdatedWalletBalance(paymentInfo)
// );