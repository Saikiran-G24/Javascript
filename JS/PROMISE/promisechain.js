//promise creation and promise chain.
const cart=['bat','shirt','hockey']
createOrder(cart)
.catch(function(err){
    console.log(err.message)
})
.then(function(orderId){                 //callback function
    // console.log(orderId)
     proceedTopayment(orderId)           //returns promise
})
.then(function(paymentInfo){                //callback function
 showOrdersummary(paymentInfo)              //returns promise
 })
 .then(function(fname){
    updateWalletbalance(fname)
 })
 .catch(function(err){
    console.log(err.message)
})

.then(function(orderId){  
    console.log('No matter what happens,I will definately be called')
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
         // setTimeout(function (){resolve(orderId)//Making a fake delay 
            // },5000);                                                      //Async operation
resolve(orderId) //whatever resolved by the   (createOrder(cart)) .The "orderId" it is just get over callback function in line no 7.
}
    })
        return pr;
    // console.log(pr)
    function validatecart(cart){
        return false;              //write true it is resolve and gives orderId
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
    return new Promise(function(resolve,reject){
        console.log('showing Order Summary')           //(0r)       resolve (console.log('showing Order Summary'));
 })
    }
    function updateWalletbalance(fname){
    console.log('updated Wallet balance')
    }