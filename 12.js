// let options = new Object;
let options1 = {
    width : 1024,
    height : 1024,
    colors : {
        border : 'black',
        bg : "yellow"
    }
}
options1.colors.border1 = "pink";
options1.name = "myObj";
// console.log(options1)
// console.log(options1.name)
delete options1.colors.border;
console.log(options1)
for (let key1 in options1) {
    console.log(key1 + " " + options1[key1])
}
console.log(Object.keys(options1).length);
console.log(Object.keys(options1.colors).length)