// (|| and &&)

// short-circuiting means: js stops evaluating once the re4sult is deteremined
// used for -> default value, condition executions, avoid errors

// console.log(true || true)
// console.log(false || true)
// console.log(true || false)
// console.log(false || false)


// console.log(true && true)
// console.log(false && true)
// console.log(true && false)
// console.log(false && false)


// falsy values, false, 0,"",undefined, null, NaN


// console.log(false || true)
// console.log("" || "hari")
// console.log("" || null || NaN || "" || false || null || "")
// console.log(false || true)
// console.log(true || false)
// console.log(false || false)

// console.log("" || "not-provied")

// let userInput="hari"

// let name= userInput || "guest"

// console.log(name)

// && returns the first falsy value

// falsy values, false, 0,"",undefined, null, NaN

// console.log("hari" && true && "hey" && true && "bye")

// console.log(true && true)
// console.log("" && true)

// let isLoggedIn=true
// let isAdmin=false

// console.log(isLoggedIn && isAdmin && "show this page")


// nullish coalescing operation ??


let count=0
let result = 0 || 1
let result2=null ?? "" ?? 20
// null or undefined

console.log(result )
console.log(result2)

console.log(null ?? undefined ?? null)

// opitional chaining 

let user ={
    profile:{
        name:{
            fullName:"haribabu",
            firstName:"hari"
        }
    },
    greet1(){
        return "hello"
    }
}

let displayName=user?.profile?.names?.fullName ?? "guest"
console.log(displayName)

console.log(user?.greet?.())

let arr =[{name:"hari"}]
console.log(arr?.[1])
console.log(arr?.[5])
console.log(arr?.[1]?.name)