const path = require('path');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'), // 절대경로를 입력해야 하므로 path 패키지 사용
        filename: '[name].js' // entry가 여러개일 경우 동적으로 생성될 수 있도록 한다.
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)/,
                loader: 'url-loader',
                options: {
                    publicPath: './dist/', 
                    name: '[name].[ext]?[hash]',
                    limit: 20000, // 20kb
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `
                
            `
        })
    ]
}