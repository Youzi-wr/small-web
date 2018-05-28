var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var STYLE_PATH = path.resolve(ROOT_PATH, 'style');
var IMAGE_PATH = path.resolve(ROOT_PATH, 'images');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app: path.resolve(APP_PATH, 'index.js'),
        //添加要打包在vendors里面的库
        vendors: ['jquery', 'moment']
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     progress: true,
    // },
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
        preLoaders: [{
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        //把入口文件里面的数组打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        })
    ],
    //配置jshint的选项，支持es6的校验
    jshint: {
        "esnext": true
    }
};