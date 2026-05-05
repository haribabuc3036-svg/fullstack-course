// console.log("string methods")

// length -- similar to array
// let text="12345678"
// console.log("askjdff".length)

// charAt(index)

let text="javascript";
//        0123456789

console.log(text.charAt(4),text.charAt(9),text.charAt(100))
console.log(text.charAt(11))
console.log(text.charAt(10),text.charAt(1)) // if the character is not present at the particular index we will be getting ""-empty string
// []
console.log(text[11],text[1],text[4])

// at

console.log(text.at(0),text.at(4),text.at(11)) //if the character is not present at specific index using at method will be getting undefined
console.log(text.charAt(text.length-2))
console.log(text[text.length-1])
console.log(text.at(-3))

// concat --- similar to "+"
let a="hello";
let b="world";

console.log(a+" "+b+" hey"+ " there ")
console.log("hi ".concat(" ", b," hey ","there "))
console.log(`${a} ${b} hey there`) // always try to use template literals

// startsWith

let msg="sjavascript is fun"
//       0123456789
console.log(msg.startsWith("javas"));
console.log(msg.startsWith("ascript ",3));

// endswith
console.log(msg.endsWith("un"))
console.log(msg.length)
console.log(msg.endsWith("scr",7))

// includes

console.log(msg.includes("his"))
console.log(msg.includes("ja",1)) 

// indexOf

console.log(msg.indexOf("s")) // if the characters or string doesnt exist it returns -1

// lastIndexOf

console.log(msg.lastIndexOf("lsjdf"))

// padstart ->
let firstName="hari";
console.log(firstName.padStart(20,"123456789"))

// padEnd
let lastName="babu"
console.log(lastName.padEnd(15,"abc"))

// repeat(n) -repeat string n times

let x="abc"

console.log("hi".repeat(2))

// replace(old,new)

let sentence="red blue green yellow green"

console.log(sentence.replace("green","orange"))
console.log(sentence.replace("e","hi").replace("r","bye"))


// replaceAll(old,new)

console.log(sentence.replaceAll("green","orange"))
console.log(sentence)
console.log(sentence.replaceAll("e","hi").replaceAll("hi","e"))

// let count=0

// for(let i=0;i<sentence.length;i++){
//     if(sentence[i]==="e"){
//         count++
//     }

//     if(count===1){
//         console.log(i)
//     }

// }

// console.log(count)
// console.log(sentence)


// slice

let data ="javascript";
console.log(data.slice(4))
console.log(data.slice(4,7))
console.log(data.slice(7,9))
console.log(data.slice(-5))
console.log(data.slice(-5,9))

// console.log(data.indexOf("s"))
// console.log(data.slice(0,4)+"hi"+data.slice(data.indexOf("s")+1))

let line="hello world from world js"

console.log(line.split(""))
console.log(line.split("world"))
console.log(line.split())
// console.log(arrstr.join(""))

function convertTheSecondone(string,replaceSecondString,occurence){
    let arrstr=string.split("")
    let count=0
    for(let i=0;i<arrstr.length;i++){
    // let count=0;
    if(arrstr[i]===replaceSecondString){
        count++;
    }
    if(count===occurence && arrstr[i]===replaceSecondString){
        arrstr[i]="hi"
    }
    
}
}

// touppercase() - converts to uppercase
let randomStr="javaScript"

console.log(randomStr.toUpperCase())

// toLowerCase() - converts to lowercase

console.log(randomStr.toLowerCase())

// console.log((randomStr.slice(0,1).toUpperCase()+randomStr.slice(1).toLowerCase()).indexOf("s"))

// trim ()

let spacey="         sdfsdf  "

console.log(spacey)

console.log(spacey.trimStart())
console.log(spacey.trimEnd())
console.log(spacey.trim().length)




