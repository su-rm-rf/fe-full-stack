import path from 'path'
import { fileURLToPath } from 'url'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

// console.log(__filename, __dirname)
// console.log(import.meta)

const devMode = !true //process.env.NODE_ENV !== 'production'

export default {
	context: __dirname,
	mode: 'development',
	entry: src + '/client.js',
	output: {
		path: dist,
		filename: '[name].bundle.js'
	},
	resolve: {
		"extensions": ['*', '.js']
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /\\(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: src + '/index.html',
			publicPath: '/'
		}),
		new MiniCssExtractPlugin()
	],
	devServer: {
		static: dist,
		host: 'localhost',
		historyApiFallback: true,
		port: 8090
	}
}

