// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//ES6 destructure user object by turning pty into var



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('58360d78f711c2e7b0691ca7')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58360063bd8a7239a07b3042')
	}, {
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});

	// db.close();
});