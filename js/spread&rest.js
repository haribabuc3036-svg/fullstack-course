// spread operator it is used to exapnd iterable values (arrays, strings, objects) into individual elements

// let arrA=[1,2]
// let arrB=[3,4]
// let arrc=[5,6]

// console.log(...arrA)

// console.log([...arrB,...arrA])
// console.log([1,2])
// console.log(3,4)


// let user=[{name:"hari"},{name:"harsha"}]
// let user2=[{name:"sai"},{name:"vishnu"}]

// console.log([...user,...user2])
// let name="hari"
// console.log(...name,"h","a","r","i",name,[...name])

// let user={name:"vishnu",age:20}
// console.log(user)
// let extraDetails={city:"kurnool",gender:"male"}
// let entireDetails={...user,...extraDetails,height:170}
// console.log(entireDetails)


// destructuring arrays and objects
let arr=["hari","vishnu","harsha"]
let name1=arr[0]
let name2=arr[2]

console.log(name1,name2)

// destructuring
// let fruits=["apple","orange","berry","banana"]
// // let fruit1=fruits[1]
// let [a,b="hi",,d="abc",e="dce"]=fruits

// console.log(a,b,d,e)

// // object destructuring
// let userDetails={
//     gender:"male",
//     name:"vishnu",
//     age:20,    
//     city:"kurnool"
// }

// // let userName=userDetails.name
// // let userAge=userDetails.age
// // console.log(userName,userAge)

// let {name:userName,age:userAge}=userDetails

// console.log(userName,userAge)

// nested arrays

// let arr1=["a","b",["c",["d","f","hey"]],"e"]
// let [a,b,[c,[d,f,g="g"]],e]=arr1
// console.log(a,b,c,d,e,f,g)

// // nested objects

// let userObject={
//     name:"vishnu",
//     details:{
//         age:{
//             age1:20,
//             age2:30
//         },
//         gender:"male"
//     }
// }

// let {name:userName,details:{age:{age1:userAge},gender}}=userObject
// console.log(userName,gender,userAge)


let x=[1,2,3,4,5]

let [a,rest,...i]=x
let y=[10,20,30,...x]
console.log(a,rest,i)

let z=["hari","vishnu","sai","gayaz","pavan"]
let [c,b,...rest2]=z

console.log(c,b,rest2)


let func=(a,...b)=>{
    console.log(a)
    console.log(b)
}

func(1,2,3,4,5,6)






