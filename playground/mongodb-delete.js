// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//ES6 destructure user object by turning pty into var



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
	// console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Carole'}).then((result)=>{
	// console.log(result);
	// });

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5836007ee7dbb839accee9b1')
	}).then((result)=>{
	console.log(result);
	});

	// db.close();
});