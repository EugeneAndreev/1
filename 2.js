'use strict';
let person = {
    name: "Jack",
    surname: "Andrew",
    age: 37
};
console.log(person.name,person.age);
//alert("Pause");
// console.log(person["surname"]);
let arr = ["apple.png","orange.png","pineapple.png"];
console.log(arr[1]);


// alert("Hello!");
// let answer = confirm ("Are you here?");
// console.log (answer);

// // let answer = prompt ("How age are you?");
// let answer = +prompt ("Есть ли Вам 18?", "Да");
// console.log(answer);
// console.log("typeof here:");
// console.log(typeof (answer));
// console.log("arr" + " - object1");
// console.log(4 + " - object");
// console.log(typeof );

// let incr=10,
//     decr=10;
// // incr++;
// decr--;
// console.log(incr++,incr,++incr,incr);
// console.log(--decr);
// console.log(10%3);
// console.log("2"==2);
// console.log("2"===2);
// console.log("!")

let isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
console.log( ! isChecked || isClose);



let a=1;
let b=1; 
b = ++b + ++a + a++; //2(b=1+1 + a=1+1 + a=2  = 2+2+2)
console.log(a,b);
// dl(person.name);