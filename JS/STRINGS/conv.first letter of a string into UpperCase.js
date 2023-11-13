//convert first letter of string into uppercase
let s=prompt("enter a string")
let res;
function dis()
{
   res=s.charAt(0).toUpperCase()+s.substr(1)||s.slice(1)||s.substring(1)
   console.log(res)
}
dis()