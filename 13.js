/*
var fruits = ['Яблоко', 'Банан'];

console.log(fruits.length);
// 2
var first = fruits[0];
// Яблоко

var last = fruits[fruits.length - 1];
// Банан

console.log(first,last)
fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });
  // Яблоко 0
  // Банан 1
*/


/*

let arr = [1,2,3,4,5];
arr.pop(); //удаление с конца
arr.pop(); //удаление с конца
arr.push("7");
arr.shift();
console.log(arr);
arr.unshift(+'-1'); //добавили и преобразовали в число
console.log(arr);

for (let i=0; i<arr.length; i++) {
    console.log('Array Index \'' + i + '\' contain: '+ arr[i]);
}

arr.forEach (function(i,i1,i2) {
    console.log (i,i1,i2);
});
/*
-1 0 [ -1, 2, 3, '7' ]
2 1 [ -1, 2, 3, '7' ]
3 2 [ -1, 2, 3, '7' ]
7 3 [ -1, 2, 3, '7' ]
*/ 

/*

let clearArr = [];
clearArr[100]=100;
// clearArr.pop();
console.log(clearArr);
console.log(clearArr.length) // возвращает последний индекс плюс 1
for (let i=0; i<clearArr.length; i++) {
    console.log('Array Index \'' + i + '\' contain: '+ clearArr[i]);
}

*/
alert("!");

let arr = new Array(10);
arr.length = 2;
console.log('arr lenght = ' + arr.length);
arr = [1,2,3,4,5,6,7,8,9,[1,2,3,4,6,7]];
console.log('arr:' + arr);
console.log('arr lenght = ' + arr.length);
console.log(arr[2] == 11);
arr[2] = 11;
arr[9][2] = 12;
console.log('arr:' + arr);
console.log(arr[2] == 11);
// arr = [,02,,];
arr.forEach(function(item, index, array) {
    console.log("Index '" + index + "'" + "item '" + item + "'" + " , array containes:" + array);
  });
arr.length = 5;
// let ans = prompt('','');
// let arr = [];
// arr = ans.split(', ');
console.log(arr);


let arr = [1, 15, 3];
let i=arr.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}
console.log (i);

