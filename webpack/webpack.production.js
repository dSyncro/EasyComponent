const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "easy-components.min.css"
        })
    ],
    output: {
        filename: "easy-components.min.js"
    }
});