'use strict';
let money;
let time;
let expences = {};
let optionalExpences = {};
let income = [];
money = prompt ("Ваш бюджет на месяц?");
time = prompt ("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expences,
    optionalExpences,
    income,
    savings:false,
};

let budjetEntry1 = prompt ("Введите обязательную строку расходов в этом месяце");
let exp1 = prompt ("Во сколько обойдется?");
let budjetEntry2 = prompt ("Введите обязательную строку расходов в этом месяце");
let exp2 = prompt ("Во сколько обойдется?");
expences: {
    budjetEntry1:exp1
};
expences: {
    budjetEntry2:exp2
    };
let dayBudjet = (money - exp1 - exp2) / 30;  // - expences[budjetEntry1]-expences[budjetEntry2];//=money-expences;
alert (dayBudjet);
