// LOGIN, GOES WITH index.html
document.addEventListener("DOMContentLoaded", event => {
	
	const app = firebase.app();
	console.log(app)

});

function googleLogin(){
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
	
	.then(result => {
		window.location.assign("home.html");
	//	const user = result.user;
	//	document.write('Hello ' + user.displayName);
	//	console.log(user)
	})

	.catch(console.log)
}