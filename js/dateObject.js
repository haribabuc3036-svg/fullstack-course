console.log("date")

// javascript date object

// no arguments -> current date and time
let now=new Date()
console.log(now)

const d1=new Date("2025-12-25")
console.log(d1)

const d2=new Date("2025-12-25T10:30:00")
console.log(d2)

const d3=new Date("2025-12-25T12:00:00Z")
console.log(d3)

const d4=new Date(2025,11,25)
console.log(d4)


const d5=new Date(2025,11,25,10,32,11,10)
console.log(d5)

const d6=new Date("jan 30, 2025")
console.log(d6)

const d7=new Date("nov 30 2025 12:30:00")
console.log(d7)


let date= new Date(2025,11,25,10,32,11,100)
console.log(date)
console.log(date.getFullYear())
let months=["jan","feb","march","april","may","june","july",,"dec"]
console.log(date.getMonth())
console.log(date.getDate())
let days=["sun","monday","tue","wed","thu","fri","sat"]
console.log(days[date.getDay()])
console.log(date.getHours())
console.log(date.getMinutes(),date.getSeconds(),date.getMilliseconds())


date.setFullYear(2024)
date.setMonth(0)
date.setDate(1)
date.setHours(10)
date.setMinutes(30)
date.setMilliseconds(10)
date.setSeconds(52)
console.log(date)

// compare dates
const a= new Date()
const b=new Date("2026-01-01")

console.log(a>b)
console.log(b>a)
// console.log(a.getTime())
console.log(a-b)


const dt=new Date("2025-12-25T12:00:00Z")

console.log(dt.toString())
console.log(dt.toDateString())
console.log(dt.toTimeString())
console.log(dt.toISOString())
console.log(dt.toLocaleString())

const nextWeek=new Date();
nextWeek.setDate(nextWeek.getDate()+7)
console.log(nextWeek)



