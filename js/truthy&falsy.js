// console.log("test")

// Truthy and falsy values
// in javascript, every value has an inherent "truthiness" or "falsiness"

// There are only 6 values for falsy
// false, 0,"",null, undefined, NaN

console.log(Boolean(false))
console.log(Boolean(0),Boolean(-0))
console.log(Boolean(""))
console.log(Boolean(null));
console.log(Boolean(undefined))
console.log(Boolean(NaN))


console.log(Boolean("0"))

let userName="";

if("" || null){
    console.log("username is valid")
}else{
    console.log("username is invalid")
}

// if(""){
//     console.log(true)
// }else{
//     console.log(false)
// }



