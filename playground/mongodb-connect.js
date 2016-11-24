// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//ES6 destructure user object by turning pty into var



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	// db.collection('Todos').insertOne({
	// 	text:'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo');
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Carole',
	// 	age: 38,
	// 	location: 'Hobart'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert User', err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	db.close();
});