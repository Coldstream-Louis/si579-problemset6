const path = require('path');

module.exports = {
    entry: ['./src/timeList.js','./src/vis.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};