module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
  	  { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
	},
  resolve: {
  	modulesDirectories: ['node_modules', 'app']
  }
};