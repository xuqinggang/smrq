'use strict';

var index = 42;

function foo2() {
    console.log('foo2');
}

let a = null;
if (process.browser) {
    a = foo2;
} else {
    a = foo2;
}

console.log(a, a());
var foo = 'hello world!';

// 

function test() {
    console.log(foo, `the answer is ${index}`);
}

test();

module.exports = test;
