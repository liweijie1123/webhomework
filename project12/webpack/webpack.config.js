const { resolve } = require("path"); // node内置核心模块，用来设置路径。
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


//2.创建HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',  //指定原文件的存放路径
    filename: './index.html',      //指定生成文件的存放路径
})



module.exports = {
    entry: "./src/sys/js/index.js", // 入口文件
    output: {
        // 输出配置
        filename: "./js/main.js", // 输出文件名
        path: resolve(__dirname, "build"), // 输出文件路径配置
        clean: true, // 清除打包目录的文件
    },
    // mode: "development", // 开发环境(二选一)
    mode: 'production',  // 生产环境(二选一)
    devServer: {
        contentBase: "./src",
        port: 9000,
        inline: true
    },
    plugins: [htmlPlugin,
        new webpack.ProvidePlugin({   //jquery解析器
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),


    ],
    module: {  //所有第三方模块匹配规则
        rules: [   //文件后缀名的匹配规则
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: ['url-loader?limit=22229'] },
            // //注意:必须使用exclude指定排除项：因为node_modules 目录下的第三方包不需要被打包
            // { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            

        ]
    }

};
