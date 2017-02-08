import firebase from 'firebase';

try{
		var config = {
		apiKey: "AIzaSyBndo_n5toRnfl8V7qJDlVWbUUMT3v58Pk",
		authDomain: "coolchats-e3b92.firebaseapp.com",
		databaseURL: "https://coolchats-e3b92.firebaseio.com",
		storageBucket: "coolchats-e3b92.appspot.com",
		messagingSenderId: "816810817685"
	};
	firebase.initializeApp(config);
}
catch(e){
	console.log('fail firebase');
}

export var firebaseRef = firebase.database().ref();
export default firebase;