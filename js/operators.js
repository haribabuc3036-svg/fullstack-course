console.log("operators")

// arithmetic operators

let num1=10;
let num2=3;

// addition +
let sum =num1 + num2
console.log(sum)
// subtraction -
let difference= num2 - num1
console.log(difference)

// multiplication *
let product=num1*num2
console.log(10*3, 2*3)
console.log(product)

// division /

let quotient =num1/num2
console.log(quotient, 6/2,10/5)

// modulus (reminder) %
let remainder =num1 % num2
console.log(remainder, 9 % 3,4%3,5%3,6%3, 10%2, 11%2, 18%6,15%6)

// power (exponentiation) **

let power=2**3
console.log(power,3**3,3**2)

// increment and decrement
// let x=10

// x++ it increments the value by 1
// x++
// console.log(x)

// x=x+1
// console.log(x)

// let y=10
// y--
// console.log(y)
// y--
// console.log(y)

// Assignment operators =

let x = 5 // = assigns 5 to x
// combined assignment operators
let y = 5 //5
y+=1 //6
console.log(y,"logging here")
y-=2//4
console.log(y, "logging after sub")
y*=2 //8
y/=2
y %=3
y **=2
// y=y+3
// y=y-2
// y=y*2
console.log(y)

let z=10
z=z-2 //8
z-=2 //6


console.log(z)

// z = z-2 , z=10-2

let name="hari"
name="hari babu"
name="c hari babu"


console.log(name)

// comparison operators

// These return true or false (if and loops)

let m=5;
let n="5"
let a=5;
let b=6

console.log(m === a,5===5)
console.log(5 === 5)
console.log(5 !== 5)

// === it checks both the type and value -strict equality

// == checks or compares only value - loose equaity

console.log(5 == 5)
console.log(5=="5") //this checks only value
console.log(5==="5")// this checks both type and value\
console.log(5 != "6")
console.log(5 !== "5")


console.log(5>7)
console.log(5<7)
console.log(5>=6) //greater than or equal to
console.log(6>=6) 
console.log(5<=4) //lesser than or equal to


// logical operators

let isAdult=false
let ableToSwim=true

// AND -> true only if both are true &&

console.log(isAdult && ableToSwim)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// or operator || atleast one is true

console.log( ableToSwim || isAdult)

console.log(true || false)
console.log(false || true)
console.log(true || true)
console.log(false || false)

// not operator

console.log(!true)
console.log(!false)
console.log(!isAdult)

console.log(5+3*6/(3*2) -6) //

// string operators

let firstName="Hari ";
let lastname="Babu"

let fullName=firstName +lastname

console.log(fullName,"Harsha"+" vardhan"+" is a boy")

let greeting ="Hello "
greeting +="world"
console.log(greeting)

// unary operator

let value=42;

console.log(typeof value)