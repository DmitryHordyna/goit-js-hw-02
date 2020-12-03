'use strict'
// const prodact = 'apples';

// const prodacts = ['apples', 'grapes', 'bananas', 1];

// console.log(prodacts[0]); //обращение к елементу
// console.log(prodacts[2]);

// prodacts[0] = 'chicken';//перезаписать значение
// console.log(prodacts.length) //длина масива

//=============================================


// prodacts[7] = '123'
// console.log(prodacts)

// prodacts[4] = 'hare'
// console.log(prodacts)

// const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(board[2][2]); //вложений массив; // 9

//=============================================


// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a === b) //адреса пам.яті сравнюються
// console.log(5 === 5) // значение сравнюються

// let a = 5
// let b = a
//  a = 10
// console.log('a:',a) //записується минуле присвоєння
// console.log('b:',b)

// const q = [1, 2, 3,]
// const w = q
// console.log(q === w) //указатель пам.яті  однакове ібуде змінюватись однакове і true
// q[3] = 4;

// console.log('q:',q) 
// console.log('w:', w)

//=============================================


// const products = ['apples', 'grape', 'onion'];
// const message = 'Lorem input dilor sit 3 212'
// console.log(message);

// const words = message.split(' ');//розбиває всі слова на коремі і робить масив із кількості слів
// console.log(words);

// const snakeCaseMessage = words.join('_');// збирає в оне слово та розділяє чим ми попросим
// console.log(snakeCaseMessage);

//=============================================


// const indexOfApples = products.indexOf('apples')
// console.log(indexOfApples) // что би узнасть індекс
// if (indexOfApples !== -1) {
//     console.log('yes')
// }

// const indexNo = products.indexOf('gerl') // нет в масиве когда -1 для проверки делают
// console.log(indexNo);//если елемент

// const isInProducts = products.includes('dasd') //проверка если елемент в масиве false and true
// console.log(isInProducts)

//=============================================


// const users = ['mango', 'Cherry', 'baby'];

// const login = prompt('Введите логин!') 

// const isRegistered = users.includes(login)

// if (isRegistered) {
//     console.log('welcome')
// }else {
//         console.log('sorry')//проверка как пароль
//     }

// if (login !== null) {
// } 

//=============================================

// const numbers = [1, 2, 3];
// numbers.push(4,8,5);

// numbers.push(7);//добавляеть елемент
// console.log(numbers);

// console.log(numbers.pop())
// numbers.pop();
// numbers.pop();// только удалеет з конца
// console.log(numbers)
// numbers.shift
// numbers.unshift

//============================

// const numbers = [1, 2, 3, 4, 5, 6];
// const copy = numbers.slice(0, 4);
// console.log(copy);
// console.log(numbers);

// copy[1] = 55;
// console.log(copy);
// console.log(numbers)

//============================

// const cards = ['card-1', 'card-2','card-3','card-4']

// console.log(cards.splice(3, 4,'card-5'));
// console.log(cards)  //удаляе елементи метод или вставление между

//======================================
//найти карточку за индекмос
//2вийнять с масива  и сохранить
//вставить ее

// const index = cards.indexOf('card-5');
// console.log(index);
// const card = cards.splice(index, 1)[0];
// console.log(card);
// cards.splice(1, 0, card);
// console.log(cards)

//================================

// const images = ['image-1', 'image-2', 'image-3', 'image-4', 'image-5', 'image-6',]

// let currentImageIdx = 0
// console.log(images[currentImageIdx]); 
// currentImageIdx += 1
// console.log(images[currentImageIdx]);
// currentImageIdx -= 1
// console.log(images[currentImageIdx]);
// currentImageIdx += 1
// console.log(images[currentImageIdx]);

