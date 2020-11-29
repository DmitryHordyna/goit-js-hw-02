'use strict'

// let counter = 0;
// const products = ['apples', 'grapes', 'bananas']

// while (counter < products.length) {
//     console.log(products[counter])

//     counter+= 1;
// }
// console.log('after while');
  
//========================================

// let useInput
// do {
//     useInput = prompt('hey')
//     console.log(useInput);
// } while (useInput !== null)

  
//========================================

// let useInput
// do {
//     useInput =prompt('vvedi 10')
//     console.log(useInput);
     //Виполняем до тех пор пока не ровно null или если ровно 10
// } while (useInput !== null && Number(useInput) !== 10)  
  
//========================================

//условивие ВИПОЛНЕНИЕ

//userInput = null
//null !== null || Nubber(null) !== 10
//false || true --> true

//userInput = 10
//10 !== null || Nubber(10) !== 10
//true || false --> true

//userInput = null
//null !== null && Nubber(null) !== 10
//false && true --> false

//userInput = 10
//10 !== null && Nubber(10) !== 10
//true && false --> false

//==============================================
// counter i j k

// ИЗМЕНА МАСИВА
// const products =['apple', 'grapes', 'mandarin','banana'];
// for (let i = 0; i < products.length; i +=1 ){
//     console.log('i', i)
//     console.log(`products[${i}]:`, products[i])
//      products[i] = products[i] + '-cvet'

// }
// console.log(products)
 //===============================================

 //ПЕРЕБОР МАССИВА
// const numbers= [1,2,3,4,5,6];

// for (let number of numbers) {
//     number = number * 2;
//     console.log(number)
// }
// console.log(numbers)

//=================================


// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < matrix.length; i += 1){
//     console.group(`Iteration ${i}`)
//     console.log('i : ',i)
//     console.log(`matrix[${i}]: `, matrix[i])
    
//     for (let j = 0; j < matrix[i].length; j += 1) {
//          console.log('j : ',j)
//         console.log(`matrix[${i}][${j}]: `, matrix[i][j])
//     }
//     console.groupEnd(`Iterattion ${i}`);
// }

//===================================

//Напиши скрип которий проверяет произвольную стороку в переменной 
// message и находит в ней самое длинное слово записать в переменную
// longestWord

// const message = 'May the force yellow cat cit herovas  herovan  herovas be with you'



// //з временно зробить масив з окремими словами
// //на кожной итерации сравнить и новое
// // 

// let words = message.split(' ');
// // console.log(words);
// let longestWord = words[0];

// for (let i = 1; i < words.length; i += 1){
//      console.log('i: ', i);
//      console.log('words[i]; ', words[i])

//     let currentWord = words[i]
//     let cureentWordsLength = words[i].length
//     let longestWordLength = longestWord.length

//     if (cureentWordsLength >  longestWordLength) {
//         longestWord=currentWord
//     }
// }
// console.log(longestWord);
// инвариантние вичесления

// for (let i = 0; i < outsideWord.length; i += 1){
//     let words = outsideWord[i]
//     let howLenght = outsideWord[i].length
//     let normalView = console.log(`${words} - ${howLenght}`)
//     let longestWord = 
// }



// let howLength = outsideWord
// console.log(howLength)


// for (const word of words) {
//     if (word.length > longestWord.length)
//         longestWord = word
// }
// console.log(words)
// console.log(longestWord)

// const number = [13,21,354,42,53,64,71,8]

// const message = 'qq wwww eeee r ttttt eee';

// const words = message.split(' ')
// let target;
// const max = words.length - 1
// const leftCount = 4
// const rightCount = 5


// for (let i = 1; i < max; i += 1) {
//     console.log(words[i])
//     console.log(i)

//     const prevElementLenght = words[i -1].length

//     const nextElementLenght = words[i+1].length
    
//     if (prevElementLenght === leftCount && nextElementLenght === rightCount)
//         {target = words[i]
//     }

// }
//     console.log(words)
// console.log(target)



//=====================================

// const client = ['Namgo', 'Poly', 'Ajax']
// const clientNameToFind = 'Poly'
// let message= 'no found sorry';

// for (let i = 0; i < client.length; i += 1) {
//     if (client[i] === clientNameToFind) {
//         message = 'найден'

// }
// console.log(message)


// const client = ['Namgo', 'Poly', 'Ajax']
// const clientNameToFind = 'Pwoly'
// let message;

// for (let i = 0; i < client.length; i += 1) {
//     if (client[i] === clientNameToFind) {
//         message = 'найден'
//         break;
//     }
//     message = 'si=oewqry'
// }
//     console.log(message);

//=====================

const numbers = [12, 15, 25, 37, 41, 62, 74, 83]
const minNumber = 12;
const maxNumber = 83;

// console.log(numbers.includes(25))

const numberToFind = prompt('w')
let result = 'wow'
 
for (const number of numbers)
    if (number === Number(numberToFind)) {
        result = 'congratulation' 
        break
    }
 alert(result)