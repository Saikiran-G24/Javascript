//promise creation and promise chain.
const cart=['bat','shirt','hockey']
createOrder(cart)
.catch(function(err){
    console.log(err.message)
})
.then(function(orderId){
     console.log(orderId)
     proceedTopayment(orderId)
})
.then(function(paymentInfo){
 showOrdersummary(paymentInfo)
 })
 .then(function(fname){
    updateWalletbalance(fname)
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
         return setTimeout(function (){resolve(orderId)//Making a fake delay 
             },5000);                                                      //Async operation
 //whatever resolved by the   (createOrder(cart)) .The "orderId" it is just get over callback function in line no 7.
}
    })
        console.log('hello',pr)
        return pr;
    function validatecart(cart){
        return true;
    }
}
function proceedTopayment(orderId){
    const prm=new Promise(function(resolve,reject){
        const paymentInfo='Payment Done sucessfully'
    if(paymentInfo){
        return console.log(paymentInfo);
    }
        // return console.log('payment sucessful')
        
    })
}
function showOrdersummary(paymentInfo){
    return console.log('showing Order Summary')
    }
    function updateWalletbalance(fname){
    console.log('updated Wallet balance')
    }