const path = require('path');
var webpack = require('webpack');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',
    devtool: 'eval', //또는 hidden-source-map를 주로 씀
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx'] //밑에 entry에서 확장자를 적지 않아도 이 배열에 있는 확장자의 경우 웹팩이 알아서 확인 후 확장자 붙여줌
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
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
};