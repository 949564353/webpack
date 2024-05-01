const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Generator } = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
      ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(gif|png|jpg|jpeg)/,
                type: 'asset'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator:{
                    filename: 'fonts/[name].[hash:6][ext]'
                } 
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
              },
        ],
    },
    devServer:{
        port: 8888,
    }
}