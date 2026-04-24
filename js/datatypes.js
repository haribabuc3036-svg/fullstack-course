console.log("data types")

// string - any text it can be number letter symbol like character

let userName='hari'
userName=25;
userName=true
// console.log("jsldfjlsjdf")
console.log(typeof "hari")
// console.log(typeof userName)
console.log(userName)

// number - all number like integers decimals floating point number
let age =25;
let temperature=36.67
console.log(typeof age)
console.log(typeof temperature)

// boolean - true or false - used for taking decisions

let isStudent= true
let hasGraduated=false

console.log(typeof true, typeof false)


// undefined- variable is declared but no value is assigned.

// let address;
// console.log(address)
// console.log(typeof address)
// address="tirupati"

// console.log(address)

// null - manually set to represent "no value"

let address = null;
console.log(address)
console.log(typeof address)
address="tirupati"

// why does typeof null return this object?

// considered as a bug 

console.log(address)


// bigint - for very large numbers
let bigNumber=12341283918237981238971293791791723928739472937489237482349249n;
console.log(typeof bigNumber)

// symbol is like a unique and immutable identfier
let uniqueId=Symbol("idlksjldfj")
console.log(typeof uniqueId)

// javascript is dynamic typed: do not have to manually define the data type of the value stored in a variable . insead data types are determined automatically
