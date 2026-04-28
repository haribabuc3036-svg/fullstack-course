console.log("if else");

// what are if else statments?
// These are used to make decisions in the code


// basic if statement

let age=17

if(age>=18){
    console.log("you are eligible to vote")
}

// if else statement
let raining=true;

if(raining){
    console.log("take an umbrella")
    console.log("enjoy the rain")
}else {
    console.log("enjoy the sunshine")
}

// if ...else if ...else

let score=85;

if(score>=90){
    console.log("grade - A")
}else if(score>=80){
    console.log("grade - B")
}else if(score>=70){
    console.log("grade - C")
}else{
    console.log("grade F")
}

// multiple condition

let temperature=35;

if(temperature>40){
    console.log("its veryhot")
}else if(temperature>30){
    console.log("its hot")
}else {
    console.log("its cold")
}

// nested if statements

// let user ="harish"
// let password="12345"


// if(user==="hari"){
//     if(password==="1234"){
//         console.log("login successful")
//     }else {
//         console.log("incorrect password")
//     }
// }else{
//     console.log("user not found")
// }


let user1="hari"
let user2="harsha"
let user="hari"
let password ="12345"



if(user ==="hari" || user==="harsha"){

    // false || false

    if(user==="hari" && password==="1234"){

        // true && false
        console.log("logged in successful for hari")
    }else if(user==="harsha" && password==="12345"){

        // false && true
        console.log("login successful for harsha")
    }else {
        console.log("incorrect password")
    }

}else{
    console.log("user not found")
}