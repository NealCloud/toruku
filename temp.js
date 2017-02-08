var webpack = require('webpack');
var path = require('path');


module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	externals:{
		jquery: 'jQuery'
	},
	plugins:[
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	resolve:{
		root: __dirname, 
		alias:{
			Main: "app/components/Main.jsx",			
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader:{
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
};



  // Initialize Firebase
import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBndo_n5toRnfl8V7qJDlVWbUUMT3v58Pk",
	authDomain: "coolchats-e3b92.firebaseapp.com",
	databaseURL: "https://coolchats-e3b92.firebaseio.com",
	storageBucket: "coolchats-e3b92.appspot.com",
	messagingSenderId: "816810817685"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database.ref()

todos.on('child_added', (snap)=>{
	console.log(snap.val());
})


todos.push({text: "walk dago"}})



