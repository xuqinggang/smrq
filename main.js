// @flow

import answer from 'the-answer';
import foo from './foo';

// eslint-disable-next-line no-console
console.log('a');

export default function test() {
    console.log(foo, `the answer is ${answer}`);
}

test();
