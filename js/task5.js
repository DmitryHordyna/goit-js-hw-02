
// Напиши функцию checkForSpam(message), принимающую 1 параметр
//message - строку.Функция проверяет ее на содержание 
//слов spam и sale.Если нашли зарещенное слово то функция
//возвращает true, если запрещенных слов нет функция
//возвращает false.Слова в строке могут 
//быть в произвольном регистре.


const checkForSpam = function(message) {
  // твой код
 const SPAM = 'spam'
  const SALE = 'sale'


  const wordToLowerCase = message.toLowerCase();
  let wordSplit = wordToLowerCase.split(' ');
 console.log(wordSplit)
  // for (let i = 0; i < message.length; i += 1){
 
//     let word =wordSplit[i]
//          console.log(String(word))
//     if (word === SALE) {
//       return true
//     } else if (word === SPAM) {
//       return true
//     }
//   }
//  return false
};
 const SPAM = 'spam'
  const SALE = 'sale'
  let result;

  const wordToLowerCase = message.toLowerCase();
  let result = wordToLowerCase.includes(SPAM)||wordToLowerCase.includes(SALE);
 return result
/*
  Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true