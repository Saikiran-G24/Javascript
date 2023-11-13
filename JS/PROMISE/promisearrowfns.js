//promises with arrow functions

const cart=["shoes","pants","kurtas"]


createorder(cart)   //orderId returns createOrder and it is stored in promise object
.then((orderId)=>
  proceedTopayment(orderId)  
)
.then((paymentInfo)=>
 showOrdersummary(paymentInfo)
)
.then((paymentInfo)=>
   UpdatedWalletBalance(paymentInfo)
);