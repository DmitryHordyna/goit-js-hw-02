
//make Array
const users = ['John', 'Trum', 'Poroshenko','Makar']
const cars = new Array('John', 'Trum', 'Poroshenko')

console.log(users);
console.log(cars);

let user = 'Alex'

const newUser = users;
newUser[1] = 'Baiden';
// console.log(newUser);
// console.log(users);



// const user2 = 'Wally';
// let result = '';

//split
const vaz = 'Welcome to Banana'
console.log(vaz.split(' '));

//join
const name = users.join(' ')
// console.log(name);

//indexOf
const position =users.indexOf('Trump')
// console.log(position);

//includes
const isPoroshenkoInclude = users.includes('Poroshenko')
// console.log(isPoroshenkoInclude);

//pop,push,shift,unshift
users.push('Янукович')
// console.log(users);
const lastItem = users.pop()
// console.log(users);
// console.log(lastItem);

const firstItem = users.shift()
// console.log(firstItem);
// console.log(users);

//splice slice


//slice(start ,end)
const card = ['bmv', 'audi', 'suzuki']
const newCard = card.slice(-1)
// console.log(newCard);
// console.log(card);

//splice(1.скільки елементов забрати.вставити новий елементт) (изминяет маcсив)
const newUserList = users.splice(1, 2,'Kollin','Marks')
console.log(newUserList);
console.log(users);

//concat
const newArray = card.concat(users)
console.log(newArray);


// for (let name of users) {
//     if (name === 'John') {
//         continue
//     }
//     result += ` ${name}`
// }
// console.log(result);
// for (let i = 0; i < users.length; i += 1){
//     result+=` ${users[i]}`
// }

// console.log(result);

// for (let value of users) {
//     result += ` ${value}`
// }

// console.log(result);


//только для обектов

// for (let key in users) {
//     result += ` ${users[key]}`
// }

// console.log(result);

// const userName = user;
// user = 'foo'

// console.log(userName,user);
// if (user === 'alex' || user2 === 'Wally') {
    
// }
