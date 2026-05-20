// console.log("math")
// Math Object

// This Math object provides built-in functions for 
// numbers,
// rounding,
// trignonomertry
// random numbers
// constants like PI

// Math constants

console.log(Math.PI)
console.log(Math.E)
console.log(Math.SQRT2)

// Rounding Methods

console.log(Math.round(4.1))
console.log(Math.round(4.5))
console.log(Math.round(4.6))
console.log(Math.round(4.3))
console.log(Math.floor(4.1))
console.log(Math.floor(4.5))
console.log(Math.floor(4.999))

console.log(Math.ceil(4.1))
console.log(Math.ceil(4.2))

console.log(Math.trunc(10.0191))

// math.random()

console.log(Math.random()) // 0.xxxxxxxxx

// 
const rand1to10=Math.floor(Math.random()*6+1)
console.log(rand1to10)


// Math.floor(Math.random() * (max - min + 1)) + min;
const rand10to20=Math.floor(Math.random()*(20-10+1)+10)

console.log(rand10to20)


// Math.min() and Math.max()

console.log(Math.min(3,2,4,5))
console.log(Math.max(3,1,9,-2))

let arr=[3,9,6,5,9,10,-1]

console.log(Math.max(...arr))

// abs

console.log(Math.abs(-100))




// sign

console.log(Math.sign(529749327)) //1
console.log(Math.sign(-10192083)) // -1
// let x=-123
// if(Math.sign(x)===1){
//     console.log("positive number")
// }else{s
//     console.log("negative")
// }
console.log(Math.sign(0)) //0


// trigonometric methods

console.log(Math.sin(Math.PI*2))
console.log(1/Math.tan(0))
console.log(Math.cos(0))

// logarithminc methods

console.log(Math.log(10))


let a=-10
let b=-20

console.log(Math.abs(b)-Math.abs(a))


// pow




// sqrt, cbrt

console.log(Math.sqrt(16))
console.log(Math.cbrt(8))

// console.log(Math.pow(64,1/3))


// console.log(64**(1/3))

