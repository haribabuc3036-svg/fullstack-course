// console.log("hey")

//  javascript data types are divided into two categories
// primitives -> immutable values, simple
// non-primitives ->mutable objects , complex

// primitive types
// number, string, boolean, null, undefined, symbol, bigint

let age=25;
let name="hari"
let isAdmin=false;
let nothing=null;
let notDefined
let sym=Symbol("id")
let big= 900000n
console.log(typeof age)
console.log(typeof name, typeof isAdmin, typeof nothing, typeof notDefined, typeof sym, typeof big)

// Non-primitives store collections or complex data

// objects {key:value},array -> [1,2,3], function -> function(){}

let user={name:"hari",age:25}
let colors=["red","green","blue"]
let greetfn=function(){
    return "hi"
}

console.log(typeof user)
console.log(typeof colors)
console.log(Array.isArray(colors))
console.log(typeof greetfn)


// primitives -> immutable

let str="hello"
str="hey"
str[0]="H"
console.log(str)

// non-primitives are mutable

user.gender="male"
console.log(user)
colors[0]="hey"
console.log(colors)

// comparsion exmaple

let p1=42;
let p2=42;

console.log(p1===p2)

let obj1={name:"harsha"}
let obj2={name:"harsha"}

let arr1=[1,2]
let arr2=[1,2]

let obj3=obj1

console.log(obj3)

console.log(obj1===obj2, arr1===arr2, obj3===obj1)
// -> abcde 
// -> abcdf
// -> abcde



// let x=[1,2,3,4]

// let y=x.fill(1)

// console.log(x,y)

// let z=x.slice(2)

// console.log(x,z)

//  Reference vs value

// let a=10;
// let b=a;
// b=20;
// a=20

// console.log(b,a)

// let a="hi"
// let b=a
// b="hey"
// console.log(b,a)

// let a={name:"hari"}
// let b=a

// // a.age=20

// b.gender="male"

// console.log(b,a)

// a -> 12345
// b -> 12346


// let c=[1,2,3]

// let d=c
// d.unshift(10)

// console.log(d,c)



// function updateValue(x){
//     x=x+4
//     console.log("inside the funciton",x)
// }

// let num=10;
// // address 
// // number -primitive
// // pass by value
// updateValue(num)

// // num=30
// console.log(num)


// function updateObject(x){

//     // abc
//     x.push(4)
//     console.log(x)
// }

// let person=[1,2,3,4]
// // address -> abc
// let person2=[5,6,7,8,9]
// // address -> abcd


// // object - nonpirmitive
// // pass by reference
// updateObject(person)

// console.log(person)


let x={name:"bat",price:1000} 

// x-> 1234 -> {name:"bat",price:1000}

let y=x
//  y -> 1234 -> {name:"bat",price:1000}
y.name="ball"

//  1234 -> {name:"ball",price:1000}

console.log(x)
console.log(y)

function updateObject(x) {
    x.price=500
    // x -> 5678 -> 
    console.log(x)
    
}

let fruits={name:"apple",price:400}
// fruits -> 5678 -> {name:"apple",price:500}
updateObject(fruits)

console.log(fruits)









