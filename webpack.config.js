const path = require('path');

//console.log();

module.exports = {
    entry : './src/app.js',
    // entry : './src/playground/hoc.js',
    output : {
        path : path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module: {
        rules : [
            {
                loader : 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude : /node_module/
            },
            {
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test : /\.s?css$/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname, 'public'),
        historyApiFallback : true
    }
};