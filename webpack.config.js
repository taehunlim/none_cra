
const path = require('path');
const webpack = require('webpack');
const HtmlwebPackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const dotenv = require('dotenv');


module.exports = (env, options) => {

	const { DEV } = env;

	if (DEV) {
		dotenv.config({ path: "./env/dev.env" })
	} else {
		dotenv.config({ path: "./env/.env" })
	}


	return {
		mode: DEV ? "development" : "production",

		devtool: DEV ? "inline-source-map" : "source-map",

		devServer: {
			contentBase: "./dist",
			historyApiFallback: true,
		},

		entry: {
			main: "./src/index.tsx",

		},

		output: {
			filename: DEV ? "[name].[hash].bundle.js" : '[name].[chunkhash].bundle.js',

			chunkFilename: '[name].chunk.js', //dynamic import

			path: path.resolve(__dirname, './dist'),

			publicPath: "/",
		},

		module: {

			rules: [
				{
					test: /\.js$|jsx$|ts$|tsx$/,
					use: [
						'babel-loader',
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true,
							},
						},
					],
					exclude: /node_modules/
				},
				{
					// write image files under 10k to inline or copy image files over 10k
					test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								fallback: 'file-loader',
								name: 'images/[name].[ext]'
							}
						}
					]
				},
				{
					// write files under 10k to inline or copy files over 10k
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								fallback: 'file-loader',
								name: 'fonts/[name].[ext]'
							}
						}
					]
				},

				{
					test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								fallback: 'file-loader',
								name: 'images/[name].[ext]'
							}
						}
					]
				},
			],
		},

		plugins: [

			//------------------------common
			new HtmlwebPackPlugin({
				template: './public/index.html',
				templateParameters: {
					env: DEV ? '(개발중)' : ''
				},

				showErrors: true
			}),

			new WebpackManifestPlugin({
				filename: 'manifest.json',
				basePath: "./dist"
			}),

			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				'process.env.API_URL': JSON.stringify(process.env.API_URL),
			}),

			//-------------------------dev

			new webpack.ProgressPlugin(),

			//-------------------------prod

			new CleanWebpackPlugin()

		],
	
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".jsx", "scss"]
		},

		optimization: {

			splitChunks: {
				name: "chunk",
				chunks: 'all',
			}, // vendors
			runtimeChunk: {
				name: "runtime"
			}, // runtime

			minimizer: [
				new OptimizeCSSAssetsPlugin({}),

				new UglifyJsPlugin({
					cache: true,
					parallel: true,
					sourceMap: true
				}),
			]
		},

	}

}