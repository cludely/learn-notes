const path = require('path')




module.exports = {
	entry: path.join(__dirname, './src/js/main.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.jpg$/, use: 'url-loader' }
		]
	}
}