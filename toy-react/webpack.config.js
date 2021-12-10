const { Module } = require("webpack");

Module.exports={
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-js', {pragma:'createElement'}]]
                    }
                }
            }
        ]

    },
    mode: "development",
    optimization: {
        minimize:false
    }
}