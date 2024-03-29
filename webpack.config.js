const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader',
            ],
          },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin ( {
            template: './src/index.html',
            filename: 'main.html'
        }),
        new MiniCssExtractPlugin ( {
            filename: 'main.css'
        }),
    ],

};
