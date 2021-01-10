
// Напиши функцию checkForSpam(message), принимающую 1 параметр
//message - строку.Функция проверяет ее на содержание 
//слов spam и sale.Если нашли зарещенное слово то функция
//возвращает true, если запрещенных слов нет функция
//возвращает false.Слова в строке могут 
//быть в произвольном регистре.


// const checkForSpam = function(message) {
//   // твой код
//  const SPAM = 'spam'
//   const SALE = 'sale'


//   const wordToLowerCase = message.toLowerCase();
//   let wordSplit = wordToLowerCase.split(' ');
//  console.log(wordSplit)
//   // for (let i = 0; i < message.length; i += 1){
 
// //     let word =wordSplit[i]
// //          console.log(String(word))
// //     if (word === SALE) {
// //       return true
// //     } else if (word === SPAM) {
// //       return true
// //     }
// //   }
// //  return false
// };
//  const SPAM = 'spam'
//   const SALE = 'sale'
//   let result;

//   const wordToLowerCase = message.toLowerCase();
//   let result = wordToLowerCase.includes(SPAM)||wordToLowerCase.includes(SALE);
//  return result
// /*
//   Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client)
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const number of order) {
//    total += number
//     console.log(total)
//   }
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//           filteredNumbers.push(number);
//   }
// }


//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3) )

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//   let newArrow = []
//   for (let i = start; i <= end; i += 1){
//     console.log(i)
//     if (i % 2 === 0) {
//       newArrow.push(i)
//     }
//   }

// return newArrow
// }
//   console.log(getEvenNumbers(3, 11))

// function includes(array, value) {
//   // Пиши код ниже этой строки

//   for (let number of array) {
//     console.log(number);
//     if (number === value) {
//       return true
//     }
//   }
//     //   }else{
//     //     return false}
      
//     // }
//   // Пиши код выше этой строки
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки

// for(const values in apartment){
//    console.log(apartment[key])
// }
// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   rating: 8.38,
// };
// const keys=[]
// for (const key in book) {
//   // Ключ
//   keys++key
//   console.log(keys);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }