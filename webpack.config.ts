// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

// module.exports = (env) => {
//     return {
//         mode: env.mode ?? 'development',
//         entry: path.resolve(__dirname, "src", "index.ts"),
//         output: {
//             path: path.resolve(__dirname, 'build'),
//             filename: '[name].[contenthash].js',
//             clean: true
//         },
//         plugins: [
//             new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
//             new webpack.ProgressPlugin()

//         ],
//         module: {
//             rules: [
//                 {
//                     test: /\.tsx?$/,
//                     use: 'ts-loader',
//                     exclude: /node_modules/,
//                 },
//             ],
//         },
//         resolve: {
//             extensions: ['.tsx', '.ts', '.js'],
//         },
//     }
// };



// TS
// import path from 'path';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import type { Configuration as DevServerConfiguration } from "webpack-dev-server";  // типы из npm
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// type Mode = 'production' | 'development';

// interface EnvVariables {
//     mode: Mode,
//     port: number
// }

// export default (env: EnvVariables) => {

//     const isDev = env.mode === 'development';
//     const isProd = env.mode === 'production';

//     const config: webpack.Configuration = {

//         mode: env.mode ?? 'development',
//         entry: path.resolve(__dirname, "src", "index.tsx"),
//         output: {
//             path: path.resolve(__dirname, 'build'),
//             filename: '[name].[contenthash].js',
//             clean: true
//         },
//         plugins: [
//             new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
//             isProd && new MiniCssExtractPlugin({
//                 filename: 'css/[name].[contenthash:8].css',
//                 chunkFilename: 'css/[name].[contenthash:8].css'
//             }),
//             isDev && new webpack.ProgressPlugin()

//         ].filter(Boolean),
//         module: {
//             rules: [
//                 {
//                     test: /\.s[ac]ss$/i,
//                     use: [
//                         // Creates `style` nodes from JS strings
//                         // "style-loader",
//                         isDev ? "style-loader" : MiniCssExtractPlugin.loader,
//                         // Translates CSS into CommonJS
//                         "css-loader",
//                         // Compiles Sass to CSS
//                         "sass-loader",
//                     ],
//                 },
//                 {
//                     test: /\.tsx?$/,
//                     use: 'ts-loader',
//                     exclude: /node_modules/,
//                 },
//             ],
//         },
//         resolve: {
//             extensions: ['.tsx', '.ts', '.js'],
//         },
//         devtool: isDev && 'inline-source-map',
//         devServer: isDev ? {
//             port: env.port ?? 3000,
//             open: true
//         } : undefined
//     }

//     return config;
// };




// Destructure
import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPath, BuildPlatform } from './config/build/types/types';

interface EnvVariables {
    mode?: BuildMode,
    port?: number,
    analyzer?: boolean;
    platform: BuildPlatform;
}


export default (env: EnvVariables) => {

    const paths: BuildPath = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, "public")
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        path: paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    });

    return config;

};

