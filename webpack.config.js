let path = require('path');

let conf = {
    mode: 'production',
    entry: './src/index.js',
    output: {       
        filename: 'main.js',
        path: path.resolve(__dirname, 'keybord'),
    }
};

module.exports = conf;  