const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    mode:"production",
    entry: {
        "material-dashboard": "./resources/external-js/material-dashboard.js",
    },
    devtool: "source-map",
    output: {
        path: path.resolve("./public/assets/js"),
        filename: "[name].min.js"
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    }
};