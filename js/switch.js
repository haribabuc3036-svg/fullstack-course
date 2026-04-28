// swith statement 

let day="saturday";


// if(day==="monday"){
//     console.log("start of the week")
// }else if(day ==="wednesday"){
//     console.log("midweek vibes")
// }else if(day==="friday"){
//     console.log("weekend is near")
// }else {
//     console.log("just another day")
// }

switch (day){
    case "monday":  
    case "tuesday":
    case "wednesday":
    case "thursday":
        // console.log("midweek");
          console.log("weekday");
          break

    case "friday":
        console.log("weekend is near");
        break;
    default:
        console.log("happy weekend");
        break
};

// ===


if (3>5){
    console.log("three is greater than five")
}else {
    console.log("three is lesser than five")
}


if(day ==="monday" || day ==="tuesday" || day==="wend"){
    console.log("weekday")
}else if(day ==="frid"){
    // "sfdljdf"
}