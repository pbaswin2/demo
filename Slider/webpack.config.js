
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

var config = {
    "devtool": "cheap-eval-source-map",
    entry: [
        './src/index'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings:false
        //     }
        // })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
             {
                test: /\.jsx$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.gif/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    }
};

module.exports = config;