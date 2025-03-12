import { resolve as _resolve } from 'path';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as sass from 'sass';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entriesObject = {};
entriesObject['index'] = _resolve(__dirname, 'src/scripts/index.js');
// readdirSync('./src/scripts', { withFileTypes: true }).forEach(file => {
//     if (file.isFile()) {
//         const name = path.parse(file.name).name;
//         entriesObject[name] = _resolve(__dirname, `src/scripts/sections/${file.name}`);
//     }
// });

export default {
    resolve: {
        extensions: ['.js'],
    },
    entry: entriesObject,
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].js'
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
    })],
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env', {}],
                                    ['autoprefixer', {
                                        grid: 'autoplace'
                                    }]
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: sass
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            emitFile: false,
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    ignoreWarnings: [
        {
            module: /sass\.dart\.js/,
            message: /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/
        }
    ]
}
