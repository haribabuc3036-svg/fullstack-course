// console.log("test")

// Ternary operator is a shortcut of if...else statement

// syntax:
// condtion ? expressionistrue : expressionis false


// javascript statements vs expression

// expression
// express is any valid unit of code that produces a value

// let a = 5 + 10;
// let b = a * 2

// console.log(a + b, 5, "hello", "true", true, a > 10, "js" + "rocks")


// statement 
//  a statement is a piece of code that performs an action
console.log()

// variable declarations
// conditions 
// loops
// function declartions

let x = 5 + 10

if ("") {

} else {

}

// console.log(if(""){

// }else {

// })

let lang = "javascript"

let y = `I like coding ${lang}`

console.log(4 + 10)

// ternary operators
// its a shortcut of if else statement
// condition ? execute if true : execute if false


let age = 16

// let rightToVote= age >=18 ?"allowed":"not allowed"

let rightToVote;

// if(age>=18){
//     rightToVote="allowed"
// }else{
//     rightToVote="not allowed"
// }

rightToVote = age >= 18 ? "allowed" : "not allowed"


let sentence = `hari is ${age >= 18 ? "allowed" : "not allowed"} to vote`

console.log("hari is not allowed to votes")




console.log(rightToVote)
console.log(sentence)


let marks = 50;

let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 60 ? "C" : "F"

console.log(grade)

let isLoggedIn = true

let message = isLoggedIn ? "welcome user" : "please login again"

console.log(message)

let a = 25;
let b = 20;
let c = 15

let j = (a > b)? (a > c ? a : c) : (b > c ? b : c)
let h;
if(a>b){

    if(a>c){
        h=a

    }else{
        h=c
    }

}else{
    if(b>c){
        h=b
    }else{
        h=c
    }

}

console.log(j,h)

// functions, array and object and loops