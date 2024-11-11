const numbers = [1 , 4 , 6 ,8, 12 , 14 , 18 , 20];
// function doubleIt(num){
//    return num*2;
// }
// const result = numbers.map(doubleIt);

// const double2 = n => n*2;
// const output = numbers.map(double2);
const output2 = numbers.map(n => n*2);
console.log(output2);

// const doubled = [];

// for(num of numbers){
//     const double = num*2;
//     doubled.push(double);

// }
// console.log(doubled);

const friends = ['Rafee' , 'Mahim' , 'Fahim' , 'Tanvir' , 'Tonmoy'];
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);