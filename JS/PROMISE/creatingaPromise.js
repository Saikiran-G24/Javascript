const cart=['shoes','pants','kurtas']
const promise=createOrder(cart)
// console.log(promise)                //createOrder(cart) takes 5 sec, when async opration runs at that time "promise shows<pending>" in this console.log
promise.then(function(orderId){
    console.log(orderId)
    // proceedTopayment(orderId)
})
.catch(function(err){
    console.log(err.message)
})
//creating a promise constructor
function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        if(!validatecart(cart)){
            const err=new Error('cart is not valid')
        reject(err)
        }
        //logic for create order is sucessful we get "orderId"
        const orderId='12345'
        if(orderId){
            // setTimeout(function (){resolve(orderId)//Making a fake delay 
            // },5000);                                                                  //Async operation
             resolve(orderId)
        }
    })
    return pr;
}
function validatecart(cart){
    //Here we can write logic for whether the cart is empty or not
    return false;  
}