// Напиши фукцнию findLongestWord(string), которая принимает 
//параметром произвольную строку(в строке будут только слова и пробелы)
//и возвращает самое длинное слово в этой строке.

/*
  Вызовы функции для проверки работоспособности твоей реализации.
 */
const findLongestWord = function (string) {

  let words = string.split(' ')
  // console.log(words)
let longestWord = words[0];
  // console.log(longestWord)
  
  for (let i = 0; i < words.length; i += 1){
    
    // console.log(`i`, i)
    // console.log(`words[i]`, words[i])
    
    let currentWord = words[i];
    // console.log(currentWord)
    let currentWordsLength = words[i].length
    // console.log(currentWordsLength)
    let longestWordLength = longestWord.length
    // console.log(longestWordLength)
  if (currentWordsLength >  longestWordLength) {
        longestWord=currentWord
  }
}
  return longestWord
}



console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'