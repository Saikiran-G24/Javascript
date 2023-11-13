let arr=[5,7,9,11,15,17,21]
function dis()
{
    for(i=0;i<arr.length-1;i++)
    {let curr=arr[i]
    let next=arr[i]+2
        if(arr[i+1]!==next)
        {
             console.log('arr is: '+arr[i])
            console.log(next)
        }
         
    }
}
dis()