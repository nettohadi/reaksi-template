const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/reaksi-template.js',
        publicPath: "/public/",
    },
    devServer: {
        port: 3333,
        contentBase: path.resolve(__dirname, 'public'),
        filename: 'reaksi-template.js',
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    plugins: [new htmlWebpackPlugin({
        filename: "index.html",
        hash: true,
        publicPath: '/public/',
        template: './html_template/index.html'
    })]
};