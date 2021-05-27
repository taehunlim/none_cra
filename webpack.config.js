// babel-loader : JSX 및 ES6+ 문법을 트랜스파일링
// style-loader : 변환된 CSS 파일을 <style> 태그로 감싸서 삽입
// css-loader : CSS 파일을 자바스크립트가 이해할 수 있도록 변환
// file-loader : 이미지 및 폰트 등의 파일 로딩

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
			main: "./src/index.js",

		},

		output: {
			filename: DEV ? "[name].[hash].bundle.js" : '[name].[chunkhash].bundle.js',

			chunkFilename: '[name].chunk.js', //dynamic import 결과 파일

			path: path.resolve(__dirname, './dist'),

			publicPath: "/",
		},

		module: {

			rules: [
				{
					test: /\.js$|jsx$/,
					use: 'babel-loader'
				},

				{
					test: /\.scss$/,
					use: ['css-loader', 'sass-loader']
				},

				{
					test: /\.(jpeg|jpg)$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
					},
				},
			],
		},

		plugins: [

			//------------------------common
			new HtmlwebPackPlugin({
				template: './public/index.html', // 템플릿 경로를 지정
				templateParameters: { // 템플릿에 주입할 변수들 지정
					env: DEV ? '(개발중)' : ''
				},

				showErrors: true
			}), // 따로 분리한 bundle한 css파일과 js파일을 각각 html 파일에 link 태그와 script태그로 추가하는 걸 자동화 해줌.

			new WebpackManifestPlugin({
				filename: 'manifest.json',
				basePath: "./dist"
			}),

			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				'process.env.API_URL': JSON.stringify(process.env.API_URL),
			}),


			//-------------------------dev

			new webpack.ProgressPlugin(), // webpback 의 빌드 진행률을 표시

			//-------------------------prod

			new CleanWebpackPlugin() // 새로 빌드하가 이전의 빌드물을 제거해줌

		],

		optimization: {

			splitChunks: {
				name: "chunk",
				chunks: 'all', // 모듈 중복을 방지해줌, a, b 모듈이 각각 (a,b,c) / (a,b,d) 를 가지고 있을 경우 공통 부분인 a,b 를 따로 분리한 vendor파일 을 만듬
			}, // vendors
			runtimeChunk: {
				name: "runtime"
			}, // runtime

			minimizer: [
				new OptimizeCSSAssetsPlugin({}), //css 압축 (min) 파일로 만들어줌

				new UglifyJsPlugin({ // 난독화 
					cache: true,
					parallel: true,
					sourceMap: true // set to true if you want JS source maps
				}),
			]
		},

	}

}