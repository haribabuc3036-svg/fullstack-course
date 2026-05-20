// console.log("array methods");
// find


// nums.forEach((number)=>{
//     console.log(number)
// })


// find
// let result=nums.find((num)=>{
//     // console.log(num)

//     let isGreaterThan3=num==="hari"
//     // console.log(isGreaterThan3)
//     return isGreaterThan3
// })

// console.log(result)

// let result2=nums.findLast((num)=>{
//     return num<6
// })
// console.log(result2)

// for (let i=nums.length-1;i>0;i--){
//     if(nums[i]<6){
//         console.log(nums[i])
//         break

//     }

// }


// let nums=[1,11,3,"hari",5,6,7,8,9,10,"vishnu"]

// let result=nums.filter((value)=>{
//     return typeof(value)==="number"
// })


// console.log(result)

// let result2=[]

// for(let i=0;i<nums.length;i++){
//     if(nums[i]>5){
//         result2.push(nums[i])
//     }
// }

// console.log(result2)
    // Q

// let nums=[1,2,3,4,5,6]

// // map

// let result=nums.map((num)=>{
//     let tripleNum=num*3
//     return tripleNum
// })

// // let x=[2,4,6,8,10,12]
// console.log(result)

// let nums=[1,2,3,4,5,6,-1]

// // some

// let result=nums.some((value)=>{
//     return value>6
// })

// // console.log(result)
// let result2=nums.every((value)=>{
//     return value>0
// })

// console.log(result2)


let nums=[{name:"bat",price:1000,discount:10,category:"cricket"},{name:"ball",price:500,discount:10,category:"cricket"},{name:"gloves",price:800,discount:10,category:"cricket"},{name:"badmintion racket",price:2500,discount:100,category:"badminton"}]

let result=nums.reduce((acc,curr)=>{
    return acc+curr.price-curr.discount
},0)

console.log(nums.filter((e)=>{
    return e.category==="cricket" && e.price <900
}))


// 0 + 1000 =1000 
// 1000 + 500 =1500]
// 1500 +800=2300

//  x + a ="xa"
// "xa"+"b"="xab"
// "xab"+"c"="xabc"

// 10 - 1= 9
// 9-2=7
// 7-3=4

// 10 +1=11
// 11 + 2=13
// 13 + 3 =16



// 0 + 1=1
// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15
// 15 +6 =21

console.log("cart price",result)


let userDetails=[{name:"hari",age:25,gender:"male",address:"jlsjflj",category:"cricket"},{name:"harsha",age:25,gender:"male"},{name:"hari",age:25,gender:"male",address:"jlsjflj"}]

console.log(userDetails.find((e)=>{
    return e.name==="hari"
}))


let numbers=[1,2,3,4,5]
// let callbackFn=
let result3=numbers.filter((a)=>{
    return a>2
})

console.log(result3)


let x=[5,6,1,2,9,4,3]

// console.log()
// let sorted=x.toSorted()
// let reversed=sorted.toReversed()
// console.log(reversed)

console.log(x.sort((b,a)=>{
    return b-a}))
console.log(x.sort((a,b)=>{
    return b-a}))

let products=[{name:"cat",price:1000,discount:10,category:"cricket"},{name:"all",price:500,discount:10,category:"cricket"},{name:"gloves",price:200,discount:10,category:"cricket"},{name:"badmintion racket",price:2500,discount:100,category:"badminton"}]


let filteredProdiucts=products.filter((a)=>a.category==="cricket")
// let sortedProducts=filteredProdiucts.sort((a,b)=>b.price-a.price)

let sortedAlpha=products.sort((a,b)=>a.name.localeCompare(b.name))

let names= ["hari","harsha","gayaz","vishnu"]

console.log(names.sort((a,b)=>b.localeCompare(a)))

// console.log(sortedProducts)
console.log(sortedAlpha)


let numbers2=[1,2,3]
// flatmap(callback)

let flatMapped=numbers2.flatMap(n=>{
    return [n,n*2,n*3]
})

console.log(flatMapped)


// mutating methods :splice, fill, reverse, sort, copywithin















