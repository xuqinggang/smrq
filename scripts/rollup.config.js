import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import flow from 'rollup-plugin-flow';

export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs',
        name: 'bundle',
    },
    plugins: [
        resolve({
            browser: true,
        }),
        commonjs(),
        json(),
        flow({pretty: true}),
    ],
};
