const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: path.join(__dirname, 'client'),
	devtool: debug ? 'inline-sourcemap' : null,
	entry: './dev/react-app.js',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0']
				},
			},
            {
                test: /.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
		]
	},
	output: {
		path: path.join(__dirname, 'client/prod'),
		filename: 'bundle.min.js',
	},
	node: {
	    fs: 'empty'
    }
};