var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
        //添加要打包在vendor里面的库
        vendor: ['lodash']
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                    // 'jshint-loader'
                ],
                exclude: /node_modules/,
                include: APP_PATH
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
                include: STYLE_PATH
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: 'url-loader?limit=8192&name=images/[name].[ext]',
                include: IMAGE_PATH
            }
        ]
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            // 这个使用uglifyJs压缩你的js代码            
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ],
        // runtimeChunk: {
        //     name: "bundle" //指定公共 bundle 的名称
        // }
        // splitChunks: {
        //     cacheGroups: { // 这里开始设置缓存的 chunks
        //         priority: "0", // 缓存组优先级 false | object |
        //         vendor: { // key 为entry中定义的 入口名称
        //             chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步)
        //             test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
        //             name: "vendor" // 要缓存的 分隔出来的 chunk 名称
        //         }
        //     }
        // }
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            // template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendor'],
            //要把script插入到标签里
            inject: 'body'
        })
        // new HtmlwebpackPlugin({
        //     title: 'Hello Mobile app',
        //     template: path.resolve(TEM_PATH, 'mobile.html'),
        //     filename: 'mobile.html',
        //     chunks: ['mobile', 'vendor'],
        //     inject: 'body'
        // })
    ]
};