console.log("conversion")

// Type conversion (Manual) - means i am chaging data type manually
// Type coercion (automatic) - js converts data types automatically when needed.


// type conversion

let num=100
let str=String(num)

console.log(num, str)

console.log(typeof str)

let score="75"
let converted=Number(score)

console.log(converted)
console.log(typeof converted)

let empty=""
let boolValue=Boolean(empty)
console.log(boolValue)

let str2="75hari"
console.log(Number(str2))


// Type coercion (automatic)

console.log("5"+"2"+5+"hari"+"babu") //("52"+5)
console.log("5"+2)
console.log("5"-"2")
console.log(52+"3"-"3") //("523"-"3")

console.log("10"/3)

console.log(5+2+"2") //(7+"2")
console.log(5+2+"3"+3-3) //(7 +"3"+3) ("73"+3)("733"-3)

console.log(5+2+"3"+(5+2)) //(5+2+"3"+7) (7+"3"+7)("73"+7)("737")

console.log("10"-true)
console.log("10"- false)
console.log("10"-null)
console.log("10"-undefined)

console.log("10"-"a") //(10 - a)

console.log(Number("a"))
console.log(Number(undefined))
console.log(Number("10"))
console.log(Number(true))
console.log(String(5))

console.log(-"123")
console.log(-"ab123")
console.log(-(Number("ab123")))
console.log(-(Number("123")))



