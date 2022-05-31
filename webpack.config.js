const HTMLWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};