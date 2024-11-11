const numbers = [1 , 4 , 6 ,8, 12 , 14 , 18 , 20];
function doubleIt(num){
   return num*2;
}
const result = numbers.map(doubleIt);
console.log(result);

// const doubled = [];

// for(num of numbers){
//     const double = num*2;
//     doubled.push(double);

// }
// console.log(doubled);