//Function constructor in javascript
function Counter(){
    var count=0;
    this.incrementcount=function ()
    {
        count++;
        console.log(count)
    }
    this.decrementcount=function()
    {
        count--;
        console.log(count)
    }
    }
    
    var counter1=new Counter()
    counter1.incrementcount()
    counter1.incrementcount()
    counter1.decrementcount()