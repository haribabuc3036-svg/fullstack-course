// console.log("async ")

// What is synchronous?
// code runs, it will execute the code line by line, one after another
// each line waits for previous line to finish
// blocking behaviour



// what is asynchronous?
// This code may start now and finish later (non blocking)
// It lets the rest of the program keep running while waiting

// settimeout, setInterval , api calls(fetch), promises


// console.log("first")
// console.log("second")
// console.log("third")

// // setTimeout(()=>{
// //     for(let i=0;i<10000;i++){
// //     console.log("running")
// // }
// // })

// console.log("first")
// console.log("second")

// console.log("done")
// console.log("waiting")

// console.log("start")
// // setTimeout(()=>{
// //     console.log("I will run later")
// // },1000)


// console.log("end")
// console.log("sljflskdj")


// callback hell

// console.log("started boiling water")
// setTimeout(() => {
//     console.log("water is boiling")
//     setTimeout(() => {
//         console.log("crack the eggs")
//         setTimeout(() => {
//             console.log("cooking eggs")
//             setTimeout(() => {
//                 console.log("start eating the eggs")
//                 setTimeout(() => {
//                     console.log("start eating the eggs")
//                     setTimeout(() => {
//                         console.log("start eating the eggs")
//                     }, 2000)
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)


// Promises
// a promise is an object that represent eventual completion or failure of an result
// pending state 
// fulfilled state
// rejected state

// const myPromise =new Promise((res,rej)=>{
//     // resolve("hello from promise")
//     rej("rejected")
// })

// myPromise.then((value)=>{
//     console.log(value,"from resolve")
// })

// myPromise.catch((value)=>{
//     console.log(value,"from reject")
// })


// const myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('done after 2 seconds')
//     }, 2000)
// })



// const anotherPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("it will run another 2 seconds")
//     }, 2000)
// })

// myPromise.then((value) => {
//     console.log(value)
//     return anotherPromise

// }).then((value) => {
//     console.log(value)
// })



// let h1 = document.getElementById("test")

// fetch("https://dummyjson.com/users").then(resp => resp.json()).then(data => {
//     console.log(data)

// }


// ).catch((error) => {
//     console.log("going to catch block")
//     console.log(error)
// })


// const newPromise = new Promise((resolve, reject) => {
//     let count = 2
//     console.log("order placed")

//     if (count === 2) {
//         setTimeout(() => {
//             resolve("order is preparing")
//         }, 4000)

//     } else {
//         setTimeout(() => {
//             reject("value is not 2")
//         }, 1000)

//     }
// })

// newPromise.then((value) => {
//     console.log(value)
//     return new Promise((resolve, reject) => {
//         let text = "hi"
//         if (text === "hi") {
//             setTimeout(() => {
//                 resolve("order is delevered")

//             }, 4000)

//         } else {
//             reject("bye")
//         }
//     })
// }).then((value) => {
//     console.log("i will start eating")
// }).catch((data) => {
//     console.log(data)
//     console.log("in catch")
// })

// let userData ={
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874"
//     }
// }


// console.log(userData)
// let x=JSON.stringify(userData)
// console.log(x)
// let y=`{"id":1,"name":"Leanne Graham"}`
// // console.log(x.id)
// console.log(JSON.parse(y))


// console.log(x)




// <note>
//   <to>Tove</to>
//   <from>Jani</from>
//   <heading>Reminder</heading>
//   <body>Don't forget me this weekend!</body>
// </note>

// let z={
//     "note":{
//         "to":"tove",
//         "from":"Jani",
//         "heading":"reminder",
//         "body":"dont forge me this weekened"
//     }
// }

// pending
// fulfilled 
// rejected 
// settled -> either resolves or rejects 


// let x=fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     // console.log(data.json())
//     return data.json()
// }).then((data)=>{
//     console.log(data)
// let obj=data.find((e)=>{
//     return e.username==="Delphine"
// })
// console.log(obj)
// return fetch(`https://jsonplaceholder.typicode.com/users/${obj.id}`)

// }).then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data.address)
// }).catch((error)=>{
//     console.log(error)
// })

// try {
//     console.log("hey")
//     console.log(user)

//     console.log("hi")

// } catch (error) {
//     console.log("this is from error block", error)
// }

// console.log(user)


let x = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "hari", age: 20 })

    }, 2000)

})


let y = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "harsha", age: 22 })

    }, 2000)

})





async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json()
        let obj = data.find((e) => {
            return e.username === "Delphine"
        })
        const userResponse = await fetch(`https://fakestoreapi.com/products`)
        const userData = await userResponse.json()
        console.log(userData)
    } catch (err) {
        console.log(err)
    }
}

getUser()