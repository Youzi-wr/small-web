var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var STYLE_PATH = path.resolve(ROOT_PATH, 'style');
var IMAGE_PATH = path.resolve(ROOT_PATH, 'images');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'   
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true, 
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
                include: STYLE_PATH
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]',
                include: IMAGE_PATH
            }
        ],
        preLoaders: [
            {
                   test: /\.jsx?$/,
                   include: APP_PATH,
                   loader: 'jshint-loader'
            }
        ]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    //配置jshint的选项，支持es6的校验
    jshint: {
        "esnext": true
    }
};