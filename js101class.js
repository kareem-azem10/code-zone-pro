// var x = 4
// const y = x++
// console.log("y", x);

// console.log(`x:${x}, y:${y}`);
// if (x == y) {
//     console.log("true");
    
// }else {
//     console.log("false");
    
// }

// let z = 5
// let q = 3 

// console.log("z:",q);
// console.log("q:",z);


// let x = 5
// let y = 3

// console.log(`x: ${y}`);
// console.log(`y: ${x}`);

// const number = 5
// switch(number){
//     case 1:
//     console.log("number is 1");
//     case 2:
//     console.log("number is 2");
//     case 3:
//     console.log("number is 3");
//     case 4:
//     console.log("number is 4");
//     case 5:
//     console.log("number is 5");
//     break
//     default:
//     console.log("please provide a number");
// };

// const day = 3   
// switch(day){
//     case 1:
//     console.log("day is sunday");
//     break
//     case 2:
//     console.log("day is monday");
//     break
//     case 3:
//     console.log("day is tuesday");
//     break
//     case 4:
//     console.log("day is wednesday");
//     break
//     case 5:
//     console.log("day is thursday");
//     break
//     case 6:
//     console.log("day is friday");
//     break
//     case 7:
//     console.log("day is saturday");
//         break
//         default:
//         console.log("pls provide a day");
            
// }

const getDate = () => {
    const currentDate=new Date()
    const currentyear=currentDate.getFullYear();
    return currentyear
}
const user ={
    name:"kareem",
    BD:2010
}

const getAge = (user) => {
    const currentyear = getDate()
    const userDB=user.BD;
    console.log("the age is:",currentyear-user.BD);
    
}
getAge(user)