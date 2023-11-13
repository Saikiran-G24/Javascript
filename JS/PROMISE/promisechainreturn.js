//'return' Remember in promise chain.
const cart=['bat','shirt','hockey']
createOrder(cart)
.catch(function(err){
     console.log(err.message)
})
.then(function(orderId){
    console.log(orderId)
    return orderId;
})
.then(function(){
         return proceedTopayment()          // (or)Also we can write like proceedTopayment()
})
.then(function(){
 return showOrdersummary()    // (or)Also we can write like showOrdersummary()
 })
 .then(function(){
   return updateWalletbalance()
 })
 .catch(function(err){
    console.log(err.message)
})
function createOrder(cart){
    //create a promise constructor
    const pr=new Promise(function(resolve,reject){
         if(!validatecart(cart))
    {
        const err=new Error('cart is Not Valid')
        reject(err)
    }
    const orderId='123455'
    if(orderId){
resolve(orderId) 
}
    })
        return pr;
    // console.log(pr)
    function validatecart(cart){
        return true;
    }
}
function proceedTopayment(){
    const prm=new Promise(function(resolve,reject){
        const paymentInfo='Payment Done sucessfully'
    if(paymentInfo){
        return console.log(paymentInfo);
    }
        // return console.log('payment sucessful')
        
    })
}
function showOrdersummary(){
    return console.log('showing Order Summary')
    }
    function updateWalletbalance(){
    console.log('updated Wallet balance')
    }