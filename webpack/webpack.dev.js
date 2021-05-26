const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "easy-components.css"
        })
    ],
    output: {
        filename: "easy-components.js"
    }
});