'use strict'

/*символы start*/

console.log('It\'s ljs.js');

let user = {
    name: "Вася"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  console.log( user[id] ); // мы можем получить доступ к данным по ключу-символу
let id2 = Symbol('id22');
user[id2]=22;
console.log(user[id2]);
let id3 = Symbol('id22');
user[id3]=33;
console.log(user);

Symbol.for('id01');
let symres = Symbol.for('id01');
let id01 = Symbol.for('id01');
console.log(Symbol.for('id01'));
console.log(symres);
console.log(id01 === symres);
console.log(Symbol.keyFor(symres));

/*символы end*/
