// console.log("array methods")

// array is a list ike object used to store multiple values in single variable


// let fruits=["apple","banana","orange"];

// length - property 
// console.log(fruits.length)
// // [index] - to access an element
// console.log(fruits[fruits.length-1],fruits[10])

// // at(index)

// let nums=[10,20,30,40]

// console.log(nums.at(1))
// console.log(nums.at(-2))
// console.log(nums.at(8))

// // concat 
// let a=[1,2];
// let b=[3,4];
// let c=[8,9]
// let merged=a.concat(b,[5,6],[6,7],c)

// console.log(merged)

// copyWithin(target, start, end)->copy part within array

// let arr=[1,2,3,4,5,6,7,8]
//       0 1 2 3 4 5 6 7
//      [1,2,,,,,7,8]
//      [1,2,,,5,6,7,8]
//      [1,2,3,,,,7,8]
//      [1,2,3,5,6,7,7,8]
//      [1,2,5,6,5,6,7,8]
//      [1,2,5,6,5,6,7,8]
//      [1,2,5,6,7,8,7,8]
//      [1,2,4,5,6,7,8,8]


// arr.copyWithin(4)
// arr.copyWithin(2,4,8)

// console.log(arr)

// fill(value,start, end) -> fill with static value
// let arr=[0,1,2,3,4]

// arr.fill(2)
// arr.fill("hi",3)
// arr.fill("hi",2,5)


// console.log(arr)

// let nested=[1,[2,[3,[4,[5,9]]]],[2,3]]

// console.log(nested)
// console.log(nested.flat(Infinity))


// includes(value,fromIndex)
let fruits=["mango","apple","banana","orange","cherry","mango"]

console.log(fruits.includes("mango",3))

// indexOf(value,fromIndex)

console.log(fruits.indexOf("banana"))
console.log(fruits.indexOf("mango",1))

// lastIndexOf(value)

console.log(fruits.lastIndexOf("mango"))


// // join()
// let letters=["a","b","c"]

// console.log(letters.join())
// console.log(letters.join(""))
// console.log(letters.join("*"))

// // reverse()
// let str="abcd"

// let rev=["a","b","c","d"]

// console.log(rev.reverse())

// console.log(str.split("").reverse().join(""))

// slice(start,end) (based on index)

let numbers=[0,1,2,3,4]
let x=numbers.slice(3)

console.log(x)
console.log(numbers)
// console.log(numbers.slice(1,3))
// console.log(numbers.slice(2,3))
// console.log(numbers.slice(-1))
// console.log(numbers.slice(-2,4))

// splice (start,deleteCount,...items)

// let numbers=[0,1,2,3,4]
// numbers.splice(2)
// numbers.splice(1,2)
// numbers.splice(1,2,"hi")
// numbers.splice(3,0,5,6,"sljdfl")
// let removedElements=numbers.splice(1,2)
// console.log(removedElements)



// console.log(numbers)

















