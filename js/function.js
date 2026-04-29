console.log("functions")

// functions are reusable block of code that excutes when you call,invoke
// let a=1;
// let b=2;

// let c=a+b

// let d=3;
// let e=4

// let f=d+e

// let g=1;
// let h=5;

// let i=g+h

// let x=2;
// let y=3;

// let z=x+y
// console.log(c,f)

// function declaration 

function add(a,b){
    // console.log(a,b)
    console.log(a+b)
}
console.log(add(5,10),"add")

// function functionName(parameters){
//  
// }

add(2,3)
add(1,2)
add(4,5)

// calling a function functionName(arguments)

function sayHello(){
    console.log("Hello!")

}

sayHello()
sayHello()
sayHello()


function greet(name){
    console.log("Hi "+name)
}

greet("hari")
greet("vishnu")
greet("gayaz")



function double(n){
    console.log(n*2)
}

double(2)
double(4)

function difference(a,b){
    return a-b
}

// return keyword is used to return a value to the location where function is called
let diff=difference(11,2)
console.log(diff)


function difference1(a,b){
    console.log(a-b)
}

let diff1=difference1(3,1)
console.log(diff1,"diff1")






function isAdult(age){
    if(age>=18){
        return "yes"
    }

    let x=22;
    return x+33
}
let hariAge=18
let harshaAge=17
let isHariAdult=isAdult(hariAge)
let isHarshaAdult=isAdult(harshaAge)

console.log(isHariAdult,isHarshaAdult)


function add2Values(a,b){
    console.log(a,b,a+b)


    return a+b
    console.log("logging after returning")
    let x=22
    let y=10
    return 22+344

    let name="hari"
}

let x=add2Values(1,2)
let y=add2Values(3,4)

// let y=3
console.log(x,y)

// function expressions (same logic, stored in a variable)


let add3Variables =  function (a,b,c){
    return a+b+c
}

let abc=add3Variables(1,2,3)
console.log(abc)

// let abcd=add4Variables(1,2,1,1)
// console.log(abcd)

// function add4Variables(a,b,c,d){
//  return a+b+c+d
// }


// arrow functions (shorter syntax)


let addition=(a,b)=>{
    return a+b
}


console.log(addition(1,2))

let triple = x => {
    return x*3
}

let subtraction= (y,z) => y-z


console.log(triple(2))

// console.log(square(2))

let squaredValue=subtraction(10,2)
console.log(squaredValue)



let compare =(a,b)=>{
    if(a>b){
        return ` ${a} is bigger`
    }else if(a<b){
        return "b is bigger"
    }else {
        return "both are equal"
    }
}

console.log(compare(4,2))


let compare2Values=(a,b)=>{
    let bigger=a>b ?"a is bigger":"b is bigger"
    return bigger
}


console.log(compare2Values(3,4))

















