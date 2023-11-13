//callback hell,Inversion of control,pyramid of doom(horizental) 

const cart=["shoes","pants","kurtas"]
createOrder(cart,function(orderId){
    proceedtopayment(orderId,function(){
    showsummary(paymentInfo,function(){
    walletBallence(paymentInfo)
});
});
});
