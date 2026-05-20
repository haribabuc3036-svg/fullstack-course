// for of loop and for in loops

// both are used to loop over values
// for of -> iterates over values
// for in -> iterates over keys/properties

// for of loop -> loop over iterables
// Arrays, strings, maps, sets

let fruits =["apple","banana","cherry","grapes","mango"]

// fruits.forEach(()=>{
//     console.log(e)
// })

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

for(let fruit of fruits){
    if(fruit==="grapes"){
        break
    }
    console.log(fruit)

}

let str="vishnu"

for(let char of "hari" ){
    console.log(char)
}

let entries=[["name","Hari"],["age",25],["city","tirupati"]]

for(let [key,value] of entries ){
    console.log(key, value)
}

let people=[{name:"hari",age:25},{name:"harsha",age:24},{name:"vishnu",age:19}]

for(let {name,age} of people ){
    console.log(`${name} is ${age} years old`)
}




// for in -> used for looping over keys/properties

let person={
    name:"vishnu",
    age:19,
    gender:"male",
    height:170,
    key:"kshfh"
}

for(let key in person){
    console.log(key,person[key])
}






