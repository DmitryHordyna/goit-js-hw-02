'use strict'
// console.log('werwe')
// const x = alert('hey')

// const add = function (x, y) {
    
//     console.log(x);
//     console.log(y);
   
//     const summ = x + y
// console.log(summ) 
//     // код
//     console.log('визов функції')
  
 
// }

// add(2, 4)
// add(5, 5)
// add(10, 5) // аргументи 2 и 3 /параметри x and y

// // console.log(add)

//===================================

// const add = function (x, y) {

//     const summ = x + y
//     console.log('визов функції add!')
    
//    return summ
// }

// const resA = add(2, 3)
// console.log('результат 2 + 3: ', resA)

// const resB =add(5, 5)
// console.log('резульата 5 + 5: ', resB)

// console.log('резульата 10 + 5: ', add(10, 5))
//  // аргументи 2 и 3 /параметри x and y

//===================================

// add1(2,3)

// function add1(x, y){
//     const summ = x + y
//         console.log('визов функції add!')
    
//    return summ
// }



// const string = 'sdasdas weqwedsdw asdasd sadasc xcx'
// const words = string.split(' ')

// console.log(words)

// let longWord = words[0]

// for (let word of words) {
//     if (word.length > longWord.length)
//         longWord = word
// }
// console.log(longWord)


// const findLongestWords = function (string) {

//     const words = string.split(' ');
//     let longestWord = words[0];
    
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
    
// }

// console.log(findLongestWords('Мама мила раму та рамку домила її'))
// console.log(findLongestWords('Мама мила раму та рамкучку домила її'))
// console.log(findLongestWords('Мама мила рнічогобовід та рамкучку домила її'))


// const pleace = findLongestWords(prompt('водим не стісняеся'))
// alert(pleace) 
  
//===================================

// let input = 5;
// const name = mango;

//array.includes своїми руками

// [].includes(2)// true

// const includes = function (array, value) {
//  //array [1, 2 ,3]
// // value 4
//     for (const item of array) {
//         if (item === value) {
//             return true;
//         }
//     }
//           return false;
// }

// console.log(includes([1, 2 ,3], 4))
// console.log(includes([1, 2 ,3, 4, 5], 3))
// console.log(includes(['mango', 'ajax', 'poly'], 'mango')) 

  
//===================================

//параметри по умолчание
// const counter = function (initialalue = " ", step = 1) {
    
// }
// counter(3, 4);

//передача по силке

// const double = function (array) {
//     console.log('array arg: ', array)
   
//     for (let i = 0; i < array.length; i += 1){
//         array[i]= array[i]*2
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// double(numbers);

// console.log('numbers:',numbers);



//предикатнрие фуккции
//возращают тру фолс

// const isEqual = function (a, b) {
//     return a === b;
// }

// console.log(isEqual(5, 2))
// console.log(isEqual(5, 5))


// Array.isArray;
// Number.isNaN;
// Number.isInteger;

//aeyrwsz ckj;tybt ghjw xbctk

// const add = function () {
//     console.log(arguments);
//     let total = 0

//     for (let i = 0; i < arguments.length; i += 1){
//         total +=arguments[i]
//     }
//     return total
// }
// console.log(add(1,2,3))
// console.log(add(1,2,3,4))
// console.log(add(1,2,3,3,5,6))

// const add = function () {
//     console.log(arguments)
//     const args = Array.from(arguments)
//     const mult = arguments[0];
//     let total = 0
//     for (let i = 1; i < arguments.length; i += 1){
//         total +=[i]
//     }
//     return total * mult
// }
// console.log(add(5, 1,2,3))
// console.log(add(10, 1,2,3,4))
// console.log(add(15,1,2,3,3,5,6))


// const add = function () {

//     let  args = Array.from(arguments)
//     const mult = args[0]
//     args = args.slice(1);
//     // args = args.shift();

//     let total = 0
  
//     for (let i = 0; i < args.length; i += 1){
//         total += args[i]
//     }
//     return total * mult
// }
// console.log(add(5, 1,2,3))
// console.log(add(10, 1,2,3,4))
// console.log(add(15,1,2,3,3,5,6))

//операция rest

// const add = function (...args) {

// console.log('args: ', args)

//      let total = 0
  
//     for (let i = 0; i < args.length; i += 1){
//         total += args[i]
//     }
//     return total 
// }

// console.log(add(5, 1,2,3))
// console.log(add(10, 1,2,3,4))
// console.log(add(15,1,2,3,3,5,6))

///


const add = function (mult,...args) {

    let total = 0
    for (let i = 0; i < args.length; i += 1){
        total += args[i]
    }
    return total * mult
}
console.log(add(5, 1,2,3))
console.log(add(10, 1,2,3,4))
console.log(add(15,1,2,3,3,5,6))