const MongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://localhost:27017';

MongoClient.connect(dbURL, (err, connection) => {
	if (err) {
		console.log(err);
	}
	module.exports.db = connection.db('aller-test-db');
});