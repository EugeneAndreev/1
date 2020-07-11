'use strict'
let n=1,result =1; // счетчик лучше с 0 до 10
while (n<11) {
    n++;

    result = result*2;
    // console.log(1);
}


for (n=2;n<=12;) {
    
    console.log(n);
    n+=2;
}


let result = 1;
for (let n=0; ;n++) {
    
    result = 2*result;
    /*if(n!=9){
    console.log(result);
    }*/
    // if (n!==9) {
    //     console.log(result);
    // }
    // else {
    // break
    // }
    if (n==9) break
    console.log(result);
 
    
}

console.log(result);

// 2.1
let string = "#";
for (i=1;i<=7;i++) {
    console.log(string);
    string = '#' + string;
  
}

for (string = '#'; string.length <8; string += "#") {   //как в примере - тут красивее , в примере еще let line вместо string =
    console.log(string);
}

// 2.2

for (let i= 1; i <= 100; i++) {
    if (i%3 == 0) {
        console.log("Fizz", i);
    }
    else if (i%5 == 0 ) {
        console.log("Buzz", i);
    }
    else
    console.log(i)
}


for (let i= 1; i <= 100; i++) {
    
    if (i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz", i);
    }
    else if (i%3 == 0) {
        console.log("Fizz", i);
    }
    else if (i%5 == 0 ) {
        console.log("Buzz", i);
    }
    else
    console.log(i)
}

// в разгадке введен переменная, последовательная проверка ее изменяет и выводится в консоль с условием. тоже красиво :)
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

// 2.3
// рисуем шахматную доску произвольного размера
let size = 8;
let line = '';
let i=0;
for (n=0;n<size;n++)
{
    for (;i<size;i++) {
line += " ";
i++;
}
for (i;i<size;i++) {
    line += "#";
    i++;
}
if (i==size) {
    line += '\n';
}
console.log(line);
}

for (n=0;n<8;n++) {
    let myString = '';
    for (i=0; i<8; i++) {
    console.log(myString)  // неправильно, т.к. в задании указано что нужно использовать перевод строки
    }
}

let display = '';
display += " ";
display += "#";
display += "\n";
display += "#";
display += " ";
console.log (display)

let size = 8;
let display = '';
for (n=0;n<64;n++) {   //size*size
    display += ' ';
    if (n%size == 0){
        display += '\n';
        display += '#';
    }
    else {display += '#';
    if (n%size == 0){
        display += '\n';
        display += ' ';
    }
}
}
    // display += '#';

console.log(display);


let display = '';
for (n=0; n<64; n++) {
    if (n%8 != 0)    {
        let i=0;
        while (i<8) {
        display += '.';
        display += '#';
        i++;
        }
    }
    else {
        display += '\n';
        let i=0;
        while (i<8) {
        display += '#';
        display += '.';
        i++;
        }
    }
}
console.log(display);

display += '\n';
display += '#';
display += '.';

let size = 8;
let display = '';
let wLine = '';
let bLine = '';

for(i=0;i<(size/2);i++) {
    wLine += '[]';
    wLine += '#';
}
for(i=0;i<(size/2);i++) {
    bLine += '#';
    bLine += '[]';
}
// for(i=0;i<size;i++) { // а может лучше строка через цикл с выпадением белого поля на 8 и переносом строки?
display = wLine + '\n' + bLine + '\n'; // неправильнов случае размера = 3 и правильно ибо чередование в случае четного и нечетного разное
for (i=0;i<(size/4);i++) {
    // console.log(i);
    // display = wLine + '\n' + bLine + '\n';
    display += display;
}
// console.log(bLine);
// console.log(wLine);
console.log(display)
//мое решение
let size = 8;
let display = '';
let wLine = '';
let bLine = '';

for(i=0;i<(size/2);i++) {
    wLine += '[]';
    wLine += '#';
}
for(i=0;i<(size/2);i++) {
    bLine += '#';
    bLine += '[]';
}
display = wLine + '\n' + bLine + '\n'; 
for (i=0;i<(size/4);i++) {
    display += display;
}
console.log(display)




// из решения
let size = 3;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
    console.log(x,y)
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

display += '.';
display += '#';
display += '.';
display += '#';
display += '\n';

display += '#';
display += '.';
display += '#';
display += '.';
display += '\n';

display += '.';
display += '#';
display += '.';
display += '#';
// ....
// display = blackLine + whiteLine ?
console.log(display)



let size = 7;
let display = '';
for (i=0;i<size;i++) {
display += '.';
display += '#';
}
console.log(display) // .#.#.#.#.#.#.# -не то что нужно

let size = 7;
let display = '';
for (i=0;i<size*size;i++) {
    display += '.';
    if (display.length==size*size) {
        break;
    }
    display += '#';
}
console.log(display)

let display = '';
let size = 6;
for (i=0;i<size*size;i++) {
//    if (i%size == 0 && i%2 !== 0 || i%size !== 0 && i%2 == 0) { // это какой то пипец
    if (i%size == 0) {
        display += '\n';
    }
    else if (i%2 !== 0) {
        display += '.';
    }
    else{
        display += '#';
    }
}

console.log(display); //алгоритм работает для нечетных




