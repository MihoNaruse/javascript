//Q1
let nickname = 'ごっしー'
let age = 28
let greet = '私のニックネームは'+ nickname + 'です。年齢は' + age + '歳です。'
console.log(greet);

//Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
let favoriteLanguage = languages[0]; // JavaScript
let nextLanguage = languages[3]; // Python

console.log(`私の好きな言語は${favoriteLanguage}です。次は${nextLanguage}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1])

let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;
console.log(averageAge);

function sayHello() {
  console.log("Hello");
}
sayHello();

let sayWorld = function() {
  console.log("World");
};
sayWorld();

let updatedUser = {
  ...user,
  birthday: '2000-09-27'
};

console.log(updatedUser.birthday);

updatedUser = {
  ...updatedUser,
  sayHello: function() {
    console.log("Hello!");
  }
};

updatedUser.sayHello();

let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};
calc.add(3, 4);

calc.subtract = function(x,y) {
  console.log(x-y);
};
calc.subtract(13,3);

calc.multiply = function(x,y) {
  console.log(x*y);
};
calc.multiply(7,7);

calc.divide = function(x,y) {
  console.log(x/y);
};
calc.divide(15,3);

function remainder(x, y) {
  return x % y;
}
let result = remainder(5, 3);
console.log(`5 を 3 で割った余りは ${result} です。`);

//変数 x は foo 関数のスコープ内で宣言されているため、関数外から参照することはできない。

let randomInteger = Math.floor(Math.random() * 10);
console.log(randomInteger);

setTimeout(function() {
  console.log("Hello World!");
}, 3000);

let num = 5;
if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  let item = mixed[i];
  
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}
