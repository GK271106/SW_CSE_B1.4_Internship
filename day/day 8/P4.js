//  variables in JS
var x = 10;
x = 30;
// console.log(x)

if (x === 30) {
    var message = "yes";
}
// console.log(message);

// using let keyword

let score = 99;
// console.log(score);

if (score === 99) {
    // let apple ="red"; /* using this we cant print outside the block */
    var apple = "red"; /*use this to print even outside the code  */
}
// console.log(apple);
if (true) {
    const pi = 3.147;
    // pi = 3.0000; /* altering the const is not possible */
}
// console.log(pi);
// var : function scoped || it is not recommeded
// let and const : block-scoped

// var : function scoped
function test() {
    if (true) {
        var a = 99;
        let b = 88;
        const c = 19;
    }
    // console.log(a);
    // console.log(b);
    // console.log(c);
}
console.log(a);
    // console.log(b);
    // console.log(c);
