// // let i = 0
// // do{
// //     console.log(i);
// //     i++
// // }
// // while(i < 11)

// /////////6.1

// // let i = 0 

// do{
//     console.log(i);
//     i += 2
// }
// while(i < 11)


// // let i = 0 

// // do{
// //     console.log(i);
// //     i += 2
// // }
// // while()


// // let m;
// // do{
// //     var m = parseFloat(prompt("Unesite broj:"))
// // }

// // while(m*m >= 100)

// ///////////////

// let n = parseInt(prompt("napisi vrednost grenice:"));
// let m = 0;

// do {
//     let a = Math.pow(2, m);
//     if (a >= 2 && a <= n) {
//         console.log(a);
//     }
//     m++;
// } while (Math.pow(2 , m) <= n);


//////////  \\\\\\\\\\
/////////    \\\\\\\\\
////////      \\\\\\\\
///////        \\\\\\\
//////          \\\\\\
/////            \\\\\
////              \\\\
///                \\\
//                  \\











let m = 0;
let n = 0;
let a = 100;

do {
    if (a % 64 === 0) {
        suma += a;
        n++;
    }
    a++;
} while (a < 1000);

console.log("Suma trocifrenih brojeva deljivih sa 64 je:"  + m);
console.log("Broj takvih brojeva je:" + n);

