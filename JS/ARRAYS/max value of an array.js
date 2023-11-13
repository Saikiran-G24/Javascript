//To find min/max value of an array by loop

const arr=[10,40,-50,99,0,2,627,-3,-89]
var min=arr[3]
function dis()
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
        min=arr[i];
        }
    }
                return min;
}
dis()
console.log(min)

//To find min/max value of an array by recurse function
const arr1=[10,40,-50,99,0,2,627,-3,-89]
var min=arr1[3]
var i=0;
function dis()
{
    console.log(i)
        if(arr1[i]<min)
        {
        min=arr1[i];
        }
        if(i == arr1.length -1)
        {
            return min;
        }
        i++;// i = i+1
        dis()
    
}
dis()
console.log(min)

