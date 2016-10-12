/// <binding ProjectOpened='Watch - Development' /> 

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
require("es6-promise").polyfill();
var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        Bundle: "./main.ts",
        Vendor: './vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // Template based on keys in entry above
        pathinfo: true
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    watch: true,

    plugins: [
        new WebpackNotifierPlugin()//,
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
        //new ExtractTextPlugin("style.css", { allChunks: true })
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    // devtool: 'eval',
    devtool: 'source-map',
    module: {
        loaders: [
            { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery!" },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            // },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loaders: ["to-string-loader", "css-loader"] //style-loader!css-loader"
            },
            /*{
                test: /\.ts/,
                loaders: ['ts-loader'],
                exclude: [/node_modules/, /.*\.spec\.ts$/]
            },*/
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    }
};

function here(d) {
    return d ? path.join(__dirname, d) : __dirname;
}

