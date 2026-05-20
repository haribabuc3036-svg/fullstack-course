//  this keyword

// what is this?
// this refers to the object that is currently executing the function.
// it it not fixed -> its value depends on how and where the function is called
// simple rule -> who called this function\
// "use strict"
 
// console.log(this) // in the global scope this ->window object
// this.alert("hey") //{}


// 2. inside a regular function
// "use strict"


// function strictFunc(){
//     "use strict";
//     console.log(this)
// }

// strictFunc()

// function showThis(){
//     console.log(this)
// }
// // console.log(this)
// showThis()
// let name="harsha"
// let age=25
// "use strict"
const person={
    name:"hari babu",
    age:20,
    city:"tirupati",
    greet:function (){
        console.log(this)
        console.log(`Hi im ${this.name} and my age is ${this.age} from city ${this.city}`)
    },
    sample(){
        console.log("hi")
    },
    func(){
        console.log("hey")
    },
    start(){
        console.log(this)
     let x=()=>{
            console.log(this)
        }
        x()
    }
}
// person.greet()
person.start()

// console.log(person.age)
// console.log(person.name)

// person.greet("tirupati")
// person.sample()
// person.func()