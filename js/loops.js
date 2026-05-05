// console.log("loops")

// for loop

/*let fullName = "Vishnu"

// console.log(fullName)
// console.log(fullName)
// console.log(fullName)
// console.log(fullName)
// console.log(fullName)
// console.log(fullName)
// console.log(fullName)

for (let i = 1; i <=7; i=i+2) {
    console.log(fullName)
    console.log("hari"+i)
}


// let x=1
// x++
// x=x+1
// console.log(x)


console.log("count from 1 to 5")

for(let i=1;i<=5;i++){
    console.log(i)
}

console.log("count from 5 to 1")

for(let i=5;i>=1;i--){
    console.log(i)
}

// log the even numbers from 2 to 10

for(let i=2;i<=10;i=i+2){
    console.log(i)
}

// log squares from 1 to 5

let a=2

for(let hari=1;hari<=5;hari++){
    console.log(hari*hari)

}

// let i=1;
// let i=2

// looping with arrays

let colors=["red","green","blue","yellow"]
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
// console.log(colors[3])

for(i=0 ; i<colors.length;i++){
    console.log(colors[i])
}
*/

// continue and break
let colors = ["red", "green", "orange", "yellow","red", "green", "blue", "yellow","red", "green", "blue", "yellow",]



for (let i = 0; i < colors.length; i++) {
    if(colors[i]==="blue"){
        console.log("found blue")
        break
    }
    console.log(colors[i])
}


// for (i = 0; i < colors.length; i++) {
//     if(colors[i]==="blue" || colors[i]==="green"){
//         // console.log("skipping blue")
//         continue
//     }
//     console.log(colors[i])
// }

// 0,1,3

// for(i=0;i<=20;i++){
//     if(i%2===0){
//         continue
//     }

//     console.log(i)
// }

// nested for loop

// 1 2 3
// 1 2 3
// 1 2 3

for(let row=1;row<=3;row++){
    console.log("Row:",row)
    for(let col=1;col<=2;col++){
        console.log("  ->column:",col)
    }
}

// row:1
// column-1
// column-2

// row-2
// column-1
// column-2

// row-3
// column-1
// column-2


// while 
// while loop repeats the code as long as the condition is true

// let i=1;

// console.log("counting")

// while(i<=5){
//     console.log("number",i)
//     i=i+1
// }

// let i=5;

// while(i>=1){
//     console.log(i);
//     i--
// }

// let pocketMoney=2000

// while(pocketMoney>0){
//     console.log("buy an item");
//     pocketMoney-=400
//     console.log("remaining pocketMoney",pocketMoney)
// }

let m=0;
// console.log("skip when the value is 3")
while(m<5){
    console.log("value",m)
    m++
}


let i = 7;
do {
console.log(i);
i++;
} while (i < 5);



let n=0;

while(n<5){
       
    n++
    if(n===3){
        continue
    }
    console.log(n);
 
}

// 


for(let x=0;x<2;x++){
    console.log(x)
    for(let y=0;y<2;y++){
        console.log(y)
        for(let z=0;z<2;z++){
                 console.log(z)
           
        }
    }
}

// 0-x
// 0-y
// z-0
// z-1
// 1-y
// z-0
// z-1
// 1-x
// 0-y
// z-0
// z-1
// 1-y
// z-0
// z-1





