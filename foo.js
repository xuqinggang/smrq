import foo1 from './foo1';
import foo2 from './foo2';

let a = null;
if (process.browser) {
    a = foo1;
} else {
    a = foo2;
}

console.log(a, a());
export default 'hello world!';
