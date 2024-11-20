const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Get, Put, Post, Patch, Delete
// Get - just to retrieve data. You CANNOT send data with this request
// app.TYPE_OF_REQUEST(PATH, ARROW FUNCTION)
app.get('/cow', (req, res) => {
	// req is our request info- include things like the data being sent, type of request, user requesting, etc...
	// res is our response - the server will use this to send data back in the request

	// to send data back, we use res.send(DATA)
	const cowBoy = {
		name: 'cow',
		age: 22,
		color: 'blue',
		isAlive: false,
	};
	return res.send(cowBoy);
});

// Make a new route for a get request
// You can pick the path name, but the path is to retrieve users in a room
// I want to return an array of strings (each string is a name. You specify the names)
app.get('/usersInRoom', (req, res) => {
	const users = ['bob', 'tom', 'sue'];
	return res.send(users);
});

// New route for a post request
// Should take in an object in the request body
// should return an array with 4 of the objects sent in the request
app.post('/objDupe', (req, res) => {
	const objectSent = req.body;
	console.log(objectSent);

	const arrayToReturn = [objectSent, objectSent, objectSent, objectSent];

	return res.send(arrayToReturn);
});

// route to get a users full name
// takes in an object with a first name and a last name
// returns the sent object with a new property "fullName"
app.post('/appendFullName', (req, res) => {
	const objectSent = req.body;
	// Same as below. req.body has two properties. firstName, and lastName. Example below is Jillian Koszuta
	// const objectSent = {
	// 	firstName: 'Jillian',
	// 	lastName: 'Koszuta',
	// };

	// console log only appears in server terminal (bottom of vs code)
	// does NOT appear in Postman
	console.log(objectSent);

	objectSent.firstInitial = objectSent.firstName.charAt(0);

	objectSent.fullName = objectSent.firstName + ' ' + objectSent.lastName;

	console.log(objectSent);

	// res.send is what appears in postman. It does not appear in the terminal.
	return res.send(objectSent);
});

app.listen(8000);
