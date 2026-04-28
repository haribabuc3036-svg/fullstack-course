console.log("string")

// what is string?
// a string is a sequence of characters - letters, numbers, symbols, etc.
let string1="Hello"
let string2='world'
let string3="123545";
let string4="Hello, world!"

console.log(string1,string2)

let sentence="It's a \"good day\".\" \\"
let sentence2='he said, "javascript"'
let sentecne3="this is line one .\nthis is second line\nthis is third line"
let sentence4='It\'s to add this "forward slash" \" \. \\'
console.log(sentence)
console.log(sentecne3)
console.log(sentence4)


// Template liternals (ES6 feature)

let fullName="hari babu";
let age=26;
let city="chennai"

let oldStyle="My name is "+fullName+" and I am "+age +" years old and I'm from "+city

console.log(oldStyle)

let newStyle=`My name is ${fullName} and "I" a'm ${age} yearsd old and I'm from ${city}`

// whenever you are adding a variable you have to use ${variableName}

console.log(newStyle)


let multiLine=`Hello ${fullName},
Welcome to the js course,
you're ${age} years old
`

console.log(multiLine)


