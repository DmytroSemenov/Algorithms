module.exports = {
    entry: './ts/Init.ts',
    output: {
        filename: './dist/app.js',
        // path: __dirname + "./dist"
        // library: 'myApp'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{ test: /\.ts$/, use: 'awesome-typescript-loader' }]
    },
    devServer: {
        port: 3000
    }
};
