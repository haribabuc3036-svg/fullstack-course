console.log("objects")

// object 
// Object is a type of data in js used to store "related information"
// unlike variables that store one value, object store multiple key-value pairs

let name="hari"
let age=25;
let country="india"
let phone=298203480234


let person2Name="Harsha";
let person2age=24;
let person2Country="india";
let person2Phone =29830982304

let person1Details=["hari",25,"india",928794723]

// let personDetials=[["hari",25,"india",280342934],["harsha",25,89923923,"india"]]

// console.log(personDetials[1][2])

/*let person1={
    name:"Hari",
    // name-property or key, "hari"-value
    age:25,
    country:"india",
    phone:9128092130,
    city:"tirupati"
}

console.log(person1)

// to access elements 
// dot notation
console.log(person1.name,person1.phone)
// bracket notation
let x="age"
console.log(person1.x,person1["age"])
*/


const person={
    name:"Harsha",
    age:24,
    country:"india",
    phone:29384082340,
    city:"chittoor"
}

console.log(person)
delete person.phone
delete person.city
console.log(person)
// // 8
// let x="city"

// console.log(person.x,person[x])

// // adding properties
// person.gender="male"
// person["height"]=170

// console.log(person)

// // updating the property values
// person.age=25
// person["age"]=26
// person.age=27

let mobile={
    brand:"samsung",
    model:"galaxy 15",
    price:1500
}

// add new property;
mobile.color="Blue"
console.log(mobile)

// changie existing value
mobile.price=1600
console.log(mobile)

// delete a property
delete mobile.model
console.log(mobile)











