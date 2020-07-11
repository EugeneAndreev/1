// console.log (let1); ошибка
console.log (var1);  // пишет в конгсоль что неопределено
// console.log(let2);
// console.log(var2); не поределено
let let1 = 11;

var var1 = 12

function hello() {
    let let2 = 21;
    let var2 = 22;
console.log (let1);
console.log (var1);
console.log("let2:" + let2);
console.log(var2);
return let2;
};

hello();

console.log (let1);
console.log (var1);
// num = hello();
console.log ('num (= let2):' + (num = hello()));
// console.log(let2); не определено
// console.log(var2); не определено


let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str);
console.log(str.toLowerCase());

let twelwe = "12.2px";
// console.log(Math.round(twelwe));
console.log(parseInt(twelwe));
console.log(parseFloat(twelwe));

let a=1;

function f1(a) {
    // let a=2;
    console.log("f1 " + a);
    // return a
}

function f2() {
let a=2;
    f1(a);
console.log('f2 ' + a);
}
f2()


let val = 7
 function createAdder() {
   function addNumbers(a, b) {
    let ret = a + b 
    // let ret11 = 10
    //  let ret12 = 12
    //  return ret11, ret12 - весь скрипт вернет 12
    return ret
   }
   return addNumbers
 }
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function: ', sum)

function createCounter() {
   let counter = 0
   const myFunction = function() {
     counter = counter + 1
     return counter
   }
   return myFunction
 }
 const increment = createCounter()
//  const c1 = createCounter()
//  const c2 = createCounter()
//  const c3 = createCounter()
 const c1 = increment()
 const c2 = increment()
 const c3 = increment()
 console.log('example increment', c1, c2, c3)



 let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // список гостей, состоящий из нескольких строк


let str = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
}


console.log( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
console.log( '😂'.length ); // 2, FACE WITH TEARS OF JOY
console.log( '𩷶'.length ); // 2, редкий китайский иероглиф

console.log(this)

