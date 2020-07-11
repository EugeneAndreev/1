
// first();
scnd();
second();
function first() {
    setTimeout( function() {
        console.log(1);
    },1000);
}
function second () {
    console.log(2);
}
let scnd = function () {
    console.log(2);
}

// first();
// second();

function hello (lang, calbk) {
    console.log('Я учу ' + lang);
    calbk();
}

hello('JavaScript', function(){
    console.log("Учу Callback");
});
scnd();