// console.log(1, 1, 1 + 1, 2 + 2, 3+3, 4 + 4);

///////////////////////////////////////////////////////5.7 a

// let fp = 1, fpp = 1;

// let n = parseInt(prompt("unesite broj elemenata"))

// let rowOutput = '1 1';

// let i = 3

// while(i <= n){
//     let pom = fp + fpp
//     rowOutput += `${pom}`
//     fp = fpp;
//     fpp = pom;
//     i++
// }

// console.log(rowOutput);





/////////////////////////////////////////////////5.8 b)

// let fp = 1, fpp = 1;

// let n = parseInt(prompt("unesite broj elemenata"))

// let rowOutput = '1 1';

// let i = 3, suma = 2;

// while(i <= n){
//     let pom = fp + fpp
//     rowOutput += `${pom}`
//     fp = fpp;
//     fpp = pom;
//     i++
// }

// console.log(rowOutput);

// let n = parseInt(prompt("Unesite broj"))
// let m = parseInt(prompt("Unesite stepen broja"))

// console.log(Math.pow(n, m));

// let i = 0, proizvod = 1;

// while(i<a){
//     proizvod *= n
//     i++
// }
// console.log(proizvod);

////////////////////5.9

// let suma = 0

// let stop = parseFloat(promt("unesite broj:"))

// while(stop !== 0){
//     suma+= stop
    
// }


///////////////////5.15


// let n = parseInt(prompt("unesite broj:"))

// let suma = 0;


// let pom=n;  

// while(pom >= 1){
//     suma += pom%10
//  pom = Math.floor(  pom/=10)

// }

// if(n % suma === 0)

///////////////////////////////////////////////////////////////////////////


// let n = parseInt(prompt("Unesite broj:"))
// let k = 2;for( let k = 2; k <= n; k++){
//     while( n % k === 0){
//     n /= k;
//     console.log(k);
//     }

// }


// for (let n = 1; n <= 20; n++) {
//     for (let b = 1; b <= 20; b++) {
      
//         let c = Math.sqrt(a ** 2 + b ** 2);


//         if (Number.isInteger(c)) {
//             console.log(`Pitagorina trojka: (${a}, ${b}, ${c})`);
//         }
//     }
// }


//////////5.21

// for(let a = 1; a <= 20; a++){

// for(let b = 1; b <= 20; b++){
//     let zbir = a*a + b*b;
//     let c=1
//     while(c*c >= zbir)
//     if(c*c)
// }
// }


// let n = parseInt(prompt('ukuca nesto Boga ti'));

// let max = 0;

// for(i=2; i<n, i++){
//    let broj = parseFloat(prompt(`Unesite ${ i + 1 } element:`))
//    if(max < broj){
//     max = broj
//    }
// }
// console.log(max);


/////////////////////////////////////////////////////////


// let suma = 0;

// console.log("Brojevi od 1 do 100 koji su deljivi sa 6:");

// for (let i = 1; i <= 100; i++) {
//   if (i % 6 === 0) {
//     console.log(i);
//     suma += i;
//   }
// }

// console.log("Resenje: " + suma);


// //////////////////////////////////////////////////////////////////////////////////////////////4.17for (let A = 1; A <= 9; A++) {
    

// for (let A = 1; A <= 9; A++) {
//     for (let B = 0; B <= 9; B++) {
//         for (let C = 0; C <= 9; C++) {
//             let ABC = A * 100 + B * 10 + C;
//             let AB = A * 10 + B;
//             if (ABC === AB * AB - C * C) {
//                 console.log(ABC);
//             }
//         }
//     }
// }

///////////////////////


// for (let broj = 100; broj < 1000; broj++) {
//     let digit1 = Math.floor(broj / 100);
//     let digit2 = Math.floor((broj % 100) / 10);
//     let digit3 = number % 10;
//     let divisor = parseInt(digit1.toString() + digit3.toString());

//     if (broj % divisor === 0) {
//         console.log(broj);
//     }
// }





///////////////////////////////4.37

// let n =  parseInt(prompt("Unesite broj linija u gornjem redu:"))

// let rowOutput =  "+"

// for (let i = 0; i < n-1; i++){

//     rowOutput += "-"
// }

// rowOutput += "+"

// console.log(rowOutput);


// for(let i = 0; i < n-2; i++)
// rowOutput += " "
// if()



// let n = parseInt(prompt("Unesite neparan broj:"))
 
// let rowOutput = "+";
 
// for(let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
 
// rowOutput += "+"
 
// console.log(rowOutput);
// for(let j = 0; j < n-2; j++){
//     rowOutput = ""
//     for(let i = 1; i <= n; i++){
//         if(i === 1 || i === n){
//             rowOutput += "|\\"
//         }
//          else if (i === n){
//             if()
//          }
    
//         else{
//             rowOutput += " "
//         }
//     }
//     console.log("");
//     console.log(rowOutput);
// }
 
 
// rowOutput = "+";
 
// for(let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
 
// rowOutput += "+"
// console.log(rowOutput);





// let n = parseInt(prompt("Unesite neparan broj:"))
 
// let rowOutput = "+";
 
// for(let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
 
// rowOutput += "+"
 
// console.log(rowOutput);
// for(let j = 0; j < n-2; j++){
//     rowOutput = ""
//     for(let i = 1; i <= n; i++){
//         if(i === 1 || i === n){
//             rowOutput += "|"
//         }
//         else if(j + 2 === Math.ceil(n/2)){
//             if(i === Math.ceil(n/2) && j + 2 === Math.ceil(n/2)){
//                 rowOutput += "+"
//             }
//             else{
//                 rowOutput += "-"
//             }
//         }
//         else if (i === Math.ceil(n/2)){
//             rowOutput += "|"
//         }
//         else{
//             rowOutput += " "
//         }
//     }
//     console.log("");
//     console.log(rowOutput);
// }
 
 
// rowOutput = "+";
 
// for(let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
 
// rowOutput += "+"
// console.log(rowOutput);




/////////////////////////

let n = parseInt(prompt("Unesite neparan broj:"))
 
let rowOutput = "+";
 
for(let i = 0; i < n-2; i++){
    rowOutput += "-"
}
 
rowOutput += "+"
 
console.log(rowOutput);
for(let j = 0; j < n-2; j++){
    rowOutput = ""
    for(let i = 1; i <= n; i++){
        if(i === 1 || i === n){
            rowOutput += "|\\"
        }
         else if (i === n){
         }
    
        else{
            rowOutput += " "
        }
    }
    console.log("");
    console.log(rowOutput);
}
 
 
rowOutput = "+";
 
for(let i = 0; i < n-2; i++){
    rowOutput += "-"
}
 
rowOutput += "+"
console.log(rowOutput);
