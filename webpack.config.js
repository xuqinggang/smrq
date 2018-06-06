const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './test.js',
    output: {
        path: path.resolve('dist'),
        filename: 'axios' + '.js',
        sourceMapFilename: 'axios' + '.map',
        library: 'axios',
        libraryTarget: 'umd'
    },
    // node: {
    //     process: false
    // },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
    ],
    devtool: 'source-map'
}
