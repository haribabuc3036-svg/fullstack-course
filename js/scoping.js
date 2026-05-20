console.log("scoping")

// scope determines where a variable is accessible.

// Three types of scopes 
// global scope 
// local scope
// function scope 
// block Scope

// Global scope
// Variables that are declared outside any function or block.
// Accessible anywhere in the program or in the code



// function sample(){
//     let firstName="hari"
// }

// if(true){
//     let 
// }

// for(let i=0;i<4;i++){
//     let sampleVariable=
// }



// let globalVar="I am global"
// function showGlobal(){
//     console.log(globalVar)
// }
// showGlobal()
// console.log(globalVar)

// local scope function (local scope)

// variables declared inside function 
// they can be only accessed within that function

// function greet(){
//     let message="hello"
//     console.log(message)
//     console.log(message)
// }
// // let message="hi"
// greet()
// console.log(message)

// function sampleFunction(){
//     console.log(message)
// }

// sampleFunction()

// block scope(let & const)

// {
//     let blockLet ="block let"
//     const blockConst="block const"
//     console.log(blockConst)
//     console.log(blockLet)

// }

// console.log(blockConst)
// console.log(blockLet)

// if(true){
//     let x=22
//     console.log(x)
// }

// console.log(x)


// when a variable is declared using var -> function scope but it is not block scoped 
// but variables declared using let and const they are block scoped


// var x=22

// function exmapleFunc() {
//     var x=22;
//     console.log(x)
    
// }

// exmapleFunc()
// // console.log(x)

// {
//     let blockLet ="block let"
//     const blockConst="block const"
//     var blockVar="block var"
//     console.log(blockConst)
//     console.log(blockLet)
//     console.log(blockVar)

// }

// if(true){
//     var y=10
// }

// // console.log(blockConst)
// console.log(blockVar)
// console.log(y)


// lexical scoping


let x=22

function outer(){
    // let x=10
    
    function inner(){
        let x=2
        // console.log(x)
    }
    console.log(x)

    inner()


}

outer()
// console.log(x)




