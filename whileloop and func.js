//FUNCTIONS TASK:

function x(){
    var a={
        heroname:"Alluarjun",
        moviename:"Pushpa",
        directorname:"Sukumar",
        plotofmovie:"smuggling"
    }
    console.log(a)
}
x()


// 1q).
// var i=1;
// while(i<=10){
//     console.log(i);
//     i++
// }

// 2Q).
// var x=10;
// while(x>=1){
//     console.log(x);
//     x--
// }



// 3Q).
// var y=-1;
// while(y>=-10){
//     console.log(y)
//     y--
// }


// 4Q).
// var z=-10;
// while(z<=-1){
//     console.log(z)
//     z++
// }

// 5Q).
// var sumEven=0;
// var sumOdd=0;
// var i=1;
// while(i<=10){
//     if(i%2==0){
//         sumEven+=i;
//         console.log(i,"Even")
//     }else{
//         sumOdd+=i;
//         console.log(i,"odd")
//     }
//     i++
// }
// console.log(sumEven,"sumEven");
// console.log(sumOdd,"sumOdd");


// 6Q).
// var sumEven=0;
// var sumOdd=0;
// var a=prompt("enter no:")
// var i=0;
// while(i<a.length){
//     if(a[i]%2==0){
//         sumEven+=Number(a[i]);
//         console.log(a[i],"Even")
//     }else{
//         sumOdd+=Number(a[i]);
//         console.log(a[i],"odd")
//     }
//     i++
// }
// console.log(sumEven,"sumEven");
// console.log(sumOdd,"sumOdd");

// 7Q).
// var userInput=prompt("enter a digit");
// console.log(typeof userInput)
// var i=0;
// while(i<userInput.length){
//     if(userInput[i]%2==0){
//         console.log(userInput,"Even no")
//     }else{
//         console.log(userInput,"Odd no")
//     }
//     i++
// }

// 8Q).
// var productEven=1;
// var productOdd=1;
// var a=prompt("Enter no:")
// var i=0;
// while(i<a.length){
//     if(a[i]%2==0){
//         productEven*=Number(a[i])
//         console.log(a[i],"Even nos")
//     }else{
//          productOdd*=Number(a[i])
//         console.log(a[i],"Odd nos")
//     }
//     i++
// }
// console.log(productEven,"Product even no")
// console.log(productOdd,"Product Odd no")

// 9Q).
var sumEven=0;
var sumOdd=0;
var prodeven=1;
var prododd=1;
var a=prompt("Enter :")
var i=0;
while(i<a.length){
    if(a[i]%2==0){
         sumEven+= Number(a[i])
         prodeven*= Number(a[i])
        console.log(a[i],"Even no")
    }else{
         sumOdd+= Number(a[i])
         prododd*= Number(a[i])
        console.log(a[i],"Odd no")
    }
    i++
}
console.log(sumEven,"Sum Even no")
console.log(sumOdd," Sum Odd no")
console.log(prodeven," product Even no")
console.log(prododd,"product Odd no")