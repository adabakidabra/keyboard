let path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
let conf = {
    mode: 'production',
    entry: './src/index.js',
    output: {       
        filename: 'main.js',
        path: path.resolve(__dirname, 'keyboard'),
    },

    plugins: [
        new HTMLWebpackPlugin({
          template: './src/index.html',
        }),
      ],

    module: {
        rules: [
            {
              test: /.css$/,
              use: ['style-loader', 'css-loader'],
            }
          ],
    }
};

module.exports = conf;  