//hello reverse using recursion
//printing hello in rerverse by recursion
let str='hello';
i=str.length-1;
function dis()
{
    if(i>=0)
    {
  console.log(str[i])
  i--;
  dis()
}
}
dis()



//printing hello in rerverse

let str1='hello';
function dis()
{
    for(i=str.length-1;i>=0;i--)
  console.log(str[i])
}
dis()