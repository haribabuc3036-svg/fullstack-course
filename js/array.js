console.log("arrays")

//What is Array?
// An array it is lika a special variable that can hold multiple values in a single variable.
// it is storing list of items and for string []

let fruit1="orange";
let fruit2="apple";
let fruit3="jack fruit";
let fruit4="grapes"

// let fruits="orange","apple","jackfruit","grapes"
// let names="sai","harsha","gayaz","vishnu"
let name1="pavan";
let name2="harsha";
let name3="gayaz"
let name4="vishnu"

// let ages=10,15,16,28

/*let fruits=["orange","jack fruit","apple","grapes"]
//            0         1         2           3
console.log(fruits)
let names=["sai","harsha","gayaz","vishnu"]
//           0       1       2       3

console.log(names)

// we use index numbers(starting at 0) to get the values

// console.log(fruit1,fruits[0])
console.log(fruits[2])
console.log(fruits[10]) //accessing a non-existing index gives undefined

// chaging items in an array

names[0]="pavan"
names[2]="ram"
// names[4]="sai"
names[5]="hari"

console.log(names)
console.log(names[4])
*/

// Array length
//length - used to get the number of items in the array
let names=["sai","harsha","gayaz","vishnu","pavan"]
console.log(names)
console.log(names.length)
console.log(names[names.length - 1])
console.log(names[2*2/2+2-2+1])

// 
// names[names.length]="hari"
// console.log(names)

// adding at the using .push at the ending

names.push("hari")
console.log(names)

names.push("ram","hey");
// console.log(lengthofnames)
console.log(names)

// adding an element at the starting using unshift

names.unshift("harish","lsjdlkfjd")
console.log(names)
// names.unshift("bharath");
console.log(names)
// names.splice(1,2,"hi")
console.log(names)
console.log(names)


let fruits=["apple","mango","orange"]

// for removing element at the last
console.log(fruits)
fruits.pop()
console.log(fruits)
// console.log(removedItem)

// for removing element at the starting
fruits.shift();
console.log(fruits)




