//checking promise state(pending,fullfilled,rejected) and promise result(initially "undefined",after completion "Response")
let Github="https://api.github.com/users/akshaymarch7"
let user=fetch(Github)
console.log(user)