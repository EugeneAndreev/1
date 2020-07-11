'use strict'
/*
let soldier = {
    health : 100,
    armor : 100
}
let John = {
    health : 90
}

soldier.prototype = (
  health1:100,
  armor1:100
)
// John.__proto__ = soldier;
// D.prototype = new C()  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof
// Object.setPrototypeOf(John,soldier);
// John.prototype = new soldier; // Не работает т.к. soldier Не фуккция конструктор
let Ben = new prototype.soldier (99,99)

console.log(soldier);
console.log(John);
console.log(John.armor);
console.log(Ben)



function Soldier(name) {
    this.name = name;
    this.health = 100;
    this.armor = 100;
}
Soldier.prototype = {
    kill: function(who,kills) {
         this.kills += 1;
         return kills;
    }
}


let John = new Soldier("John");
let Ken = new Soldier("Ken");
console.log(John);
console.log(Ken.kill("bill"));

let Bill = {
    name:'Bill',
    health:200,
    armor:0
}
console.log(Bill);

let ioann = new John("ioann"); //TypeError: John is not a constructor


class Soldat {
  constructor(name,armor) {
    this.name = name;
    this.armor = armor;
    this.health = 100;
  }
  sayYes (who) {
    console.log ("Yes, my " + who);
  }

}

let Iogann = new Soldat("Iogann",90);
console.log (typeof(Iogann));

// console.log ('heal:' + Iogann.health, 'armr ' + Iogann.armor, 'name ' + Iogann.name, 'sayyes ' + (Iogann.sayYes("general"))); //100 90 Iogann

// console.log ('heal:' + Iogann.health, 'armr ' + Iogann.armor, 'name ' + Iogann.name, 'gr '+ greeting)
console.log ('heal:' + Iogann.health, 'armr ' + Iogann.armor, 'name ' + Iogann.name)
Iogann.sayYes("general");// функция вызывает console.log

const Managerager = function(name, sales) {
    return {
      name: name,
      sales: sales,
      sell: function(thing) {
        this.sales += 1;
        return 'Managerager ' + this.name + ' sold ' + thing; 
      }
    };
  };

const john = Managerager('John', 10);
const mary = Managerager('Mary', 120);

console.log(john.sales, mary.sales); // 10 120
john.sell('Apple');      // Managerager John sold Apple
mary.sell('Pomegrade');  // Managerager Mary sold Pomegrade
console.log(john.sales, mary.sales); // 11 121
console.log(john.sell('Apple'));  //Managerager John sold Apple


// задание с learn.js
// Создайте пустой объект user.

let user = {
}

// Добавьте свойство name со значением John.
user.name = 'John';

// Добавьте свойство surname со значением Smith.
user ['surname'] = "Smith";
console.log(user);
// Измените значение свойства name на Pete.
user.name = 'Pete';
console.log(user.name,user.surname);
// Удалите свойство name из объекта.
delete user.name;
console.log(user)
*/
/*
const Manager = function(name, sales) {
    this.name = name;
    this.sales = sales;
    this.sell = function(thing) {
      this.sales += 1;
      return 'Managerager ' + this.name + ' sold ' + thing;
    };
    // return {prop1: 'Prop of new object'}; 
    // при установке явного ретурна 
    // - не работает функция как должна по умолчанию - не возвращает 
    // свойства джона и имя конструктора
  };
  
  let john = new Manager ('John', 10);
  console.log(john); // {"prop":"Prop of new object"}
// //   console.log(john.sell('яблоко'));
// //   let a = john.sell('apple1')
//   console.log(john.constructor);
  console.log(john.constructor.name);
  console.log(john.sales);
  console.log(john instanceof Manager); //false если с функции конструкторе стоит return prop1... true если нет

const Fruit = function(name) {
      this.name=name,
      this.canDoJuice=true;
  };
const apple = new Fruit('Apple');
console.log(apple);
console.log(apple.canDoJuice)
console.log(apple instanceof Fruit);
console.log(apple.constructor);
console.log(apple.constructor.name);







const Manager = function(name, sales) {
    this.name = name;
    this.sales = sales;
  };
  
  Manager.prototype = {
    sell: function(thing) {
      this.sales += 1;
      return 'Manager ' + this.name + ' sold ' + thing;
    },
    speak: function(word) {
      return this.name + ' says ' + word;
    }
  };
  
  const john = new Manager('John', 10);
  const mary = new Manager('Mary', 120);
  
 console.log( john.sell('Apple')); // Manager John sold Apple
 console.log( mary.speak('Hello!')); // Mary says Hello!
console.log(Manager);

*/

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

function function1(key1, key2) {
  key1.prop = key2;
  // return {
  //   father: key1,
  //   mother: key2
  // }
}
let hello = function1 ({
  k1:"k1"
},
{ 
  k2:"k2"
}
)