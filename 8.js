// if (1) {
//     console.log ("Верно!");
// }
// else {
//     console.log ("Неверно!")
// }

let a=50;
if (a<49) {
    console.log ("Неверно!");
} else if (a>100) {
    console.log ("Много!");
} else {
    console.log ("Верно!");
};

a=40;
(a!==50) ?  console.log("Верно!") : console.log("Неверно!");

let num=5;
console.log(num);
switch (num) {
    case num < 49: //тут и далее неверно, так как case проверяет строгое соответствие "проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство."
        console.log("неверно!!");
        break;
    case num > 100:
        console.log("много!!");
        break;
    case 50:
        console.log("верно!!");
        break;
    default:
        console.log ("вообще неверно!!");
        break;
}