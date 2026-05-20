// console.log("object methods")

// object.freeze(),object.seal(),object.preventExtensions()

// these methods control how modifiable an object  like
// can you add new properties
// delete properties
// change the existing values

// obj.freeze(Obj)
// it makes the object completely immutable
// cannot add new properties
// cannot delete existing properties
// cannot modify existing properties

// const person={
//     name:"sai"
// }

// // person={age:25}
// // person.age=25
// // person.name="sai pavan"
// // delete person.name

// Object.freeze(person)

// person.age=25
// person.name="sai pavan"
// delete person.name

// console.log(person)


// seal
// cannot add new properties
// cannot delete existing properties
// can modify the existing values
// let person={
//     name:"vishnu",
//     height:170
// }

// Object.seal(person)

// person.name="y vishnu"
// person.age=19
// delete person.name
// person.height=172

// console.log(person)

// preventExtensions(obj)

// prevents new properties from being added
// cannot add new properties
// modify
// delete

// let person={
//     name:"vishnu",
//     height:170
// }

// Object.preventExtensions(person)
// Object.seal(person)
// Object.freeze(person)

// person.age=20
// person.name="y vishnu"
// delete person.height

// person.age=20


// Object.isFrozen,Object.isSealed,Object.isExtensible

// console.log(Object.isFrozen(person))


// common object utility methods

// let user={
//     name:"harsha",
//     age:24,
//     city:"hyderabad"
// }

// Object.keys(obj)

// let keys=Object.keys(user)
// console.log(Object.keys(user))
// // Object.values(obj)
// console.log(Object.values(user))
// // Object.entries(obj)
// console.log(Object.entries(user))

// // obj.hasOwnProperty(key)

// console.log(user.hasOwnProperty("name"))
// console.log(user.hasOwnProperty("age"))

// // in operator
// console.log("name" in user)

// console.log("age" in user)

// console.log("height" in user)


// let obj1={a:1,b:2};
// let obj2={c:10,d:20};
// let obj3={e:10,f:20}

// // object.assign(target,...sources)

// const merged=Object.assign({},obj1,obj2,obj3)
// console.log(merged)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


// const merged2=Object.assign(obj1)
// console.log(merged2)
// console.log(obj2)


// let obj={a:1,b:2,b:10,d:20,b:45}
// console.log(obj)


let entries=[["name","hari"],["age",20],["height",170]]

console.log(Object.fromEntries(entries))