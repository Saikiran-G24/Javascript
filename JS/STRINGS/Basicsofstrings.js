let str='  javascript is a synchronous single thresded language  '
let str1='Javascript is loosly typed language'
let res=str.indexOf('s')
let res1=str.indexOf('s',10)
let res2=str.lastIndexOf('s')
let res3=str.search('s')
let res4=str.slice(-50,-1)
let res5=str.slice(0,52)
let res6=str.substring(0,52)//'same as slice but not taking the -ve values'


let res7=str.substr(10,30)//(start index,length of the char to extract)
let res8=str.replace('javascript','Typescript')
let res9=str.toUpperCase()
let res10=str.toLowerCase()
let res11=str.concat( ' '+str1)
let res12=str.trim('')              //To remove leading and tailing spaces.
let res13=str.charAt(9)
let res14=str.charCodeAt(9)





console.log(res14)