// Задачи на понимание основ JS (с реальных собеседований)

// Ответьте на вопросы. Если возникают затруднения - воспользуйтесь выводом в консоль (console.log())

// Вопросы к этому заданию
// Какое будет выведено значение: let x = 5; alert( x++ ); ?  5 - ok
// let x = 5; console.log( x++ )
// Чему равно такое выражение: [ ] + false - null + true ?  NaN - ok  - от строки отнимаем ноль (null)
// let res=[ ] + false - null + true;
// console.log (res)

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?  2 - ok
// let y = 1; let x = y = 2; console.log(x)

// Чему равна сумма [ ] + 1 + 2? NaN - неверно, строка, преобразуется в строку
// let x =[ ] + 1 + 2 + true + null + false; //если плюс null то null Добавляется в строку
// console.log (x);

// Что выведет этот код: alert( "1"[0] )? 1


// Чему равно 2 && 1 && null && 0 && undefined ? false
// console.log(2 && 1 && null && 0 && undefined && false)
// console.log(2 && null && 0 && undefined)

// Есть ли разница между выражениями? !!( a && b ) и (a && b)? нет разницы - есть разница - неверно. 
// с точки зрения булевой логики разницы нет, если приводить значение к true false
let a="ориои";
let b="1";
let res1 = !!( a && b ); // Отрицание преобразует в булевое значение, если a = 0 то false 
let res2 = (a && b); // сначала b , потом а, если одно из равно 0, то 0
console.log (res1); // выведет true 
console.log (!!res2); // 

console.log (5 || 3); //5 5-true значит 5
console.log (1 || 3); //1 1 - true значит 1
console.log (0 || 3); //3 0 - false значит 3
console.log (1 || 0); //1 1 - true значит 1
console.log (1 || 10); //1 1 - true значит 1

console.log (5 && 3); //3 5-true значит 3
console.log (1 && 3); //3 1- true значит 3
console.log (0 && 3); //0 0 - false значит 0
console.log (1 && 0); //0 1- true значит 0
console.log (0 && 3); //0 0-false значит 0
console.log (!!(1 && 10)); //10 1 - true значит 10

console.log (3 < 1 );

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ? null - неверно 3, почему?
console.log(( null || 2 && 3 || 4 )) //3 И&& возвращает 1е если оно false, или|| возв 1е если оно true
// 2 - 3 -3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? да - неверно объекты имеют ссылочный тип
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a);
console.log(b);
console.log(a == b);


let myCar = new Object();
myCar.make  = "Ford";
myCar.model = "Mustang";
myCar.year = "1969";
myCar.color;
// console.log(myCar);
// console.log(myCar.model);
// console.log(myCar['model']);

console.log (Object.getOwnPropertyNames(myCar));
console.log (Object.keys(myCar));

let perem1='make';
console.log(myCar[perem1]);

function showProps (obj, objName) {
    let result ='';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName +"." + i + '=' + obj[i] + '\n';
        }
    }
    return result;
}
console.log(showProps (myCar, 'myCar'))

var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(obj);
console.log(myObj);


// Что выведет этот код: alert( +"Infinity" ); ? Infinity -ok именно число


// Верно ли сравнение: "ёжик" > "яблоко"? стравнение строк
console.log ("ежик" < "яблоко") //true
console.log ("ежик" > "яблоко") //false

console.log ("0я" === "0я") //true
console.log ("а" > "я") //false
console.log ("я" < "а") //false
console.log ("ася" > "я") //false
console.log ("ася" < "яся") //true




// Чему равно 0 || "" || 2 || undefined || true || falsе ? если или то если первое тру то его - тут - 0, значит второе - нуль
// ""fasle или 2  - 2, 2 или false - 2, 2 или true - 2, 2 или false - 2 - ответ 2 - правильно
console.log(0 || "" || 2 || undefined || true || falsе)