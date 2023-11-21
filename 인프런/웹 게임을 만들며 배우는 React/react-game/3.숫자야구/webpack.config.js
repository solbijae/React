const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D // npm i -D webpack-dev-server

module.exports = {
    name: "numberbaseball-setting",
    mode: "development",
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client']
    },

    module: {
        rules: [{
            test: /\.jsx?/, //js, jsx파일에
            loader: 'babel-loader', //babel-loader 적용
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'], //preset = plugin들의 모음
                plugins: ['react-refresh/babel'], //핫리로딩 기능
            },
        }],
    },
    plugins: [
        new ReactRefreshWebpackPlugin() //핫리로딩 기능
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },

    devServer: {
        devMiddleware: { publicPath: '/dist' }, //웹팩이 빌드한 파일의 경로
        static: { directory: path.resolve(__dirname) }, //정적파일(index.html)의 위치
        hot: true
    }
};