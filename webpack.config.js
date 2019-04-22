const path = require('path');

const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js'
	},
	mode: MODE,

	devServer: {
		open: true,
		contentBase: 'dist'
	},

	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: enabledSourceMap
						}
					}
				]
			}
		]
	}
};
