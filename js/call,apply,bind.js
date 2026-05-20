// call, apply and bind methods in javascript
// use these methods to control the value of this in functions.
// --> boroowing methods
// settint custom context
// --> delaying execution


// person.greet()

// const anotherGreet={greet:person.greet,name:"hey"}
// anotherGreet.greet() //lose its context




// greet.call(user,"tirupati","india")
// person.greet.call(user,"kurnool","india")
// person.greet.apply(user,["kurnool","india"])

// const callGreet=person.greet.call(user,"kurnool","india")
// const applyGree=person.greet.apply(user,["kurnool","india"])


// bindGreet("kurnool","india")

// function greet(city, country){
//     console.log("hello Im "+this.fullName,this.age,city,country)
// }

// const user={age:20,fullName:"vishnu y"}

// // let x=greet.call(user,"kurnool","india")
// // let y=greet.apply(user,["kurnool","india"])


// const z=greet.bind(user)

// z("kurnool","india")

const person={
    fullName:"gayaz",
    age:20,
    
    greet(){
        console.log(`im ${this.fullName} and age is ${this.age}`)
    }
}


let person2={
    fullName:"vishnu",
    age:25

}

let person3={
    fullName:"harsha",
    age:19


}

person.greet()
person.greet.call(person2)
person.greet.call(person3)

