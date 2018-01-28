const MongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://localhost:27017';

MongoClient.connect(dbURL, (err, connection) => {
	if (err) {
		console.log(`can not connect to mongodb server at ${dbURL}`);
		process.exit(-1);
	}
	module.exports.db = connection.db('community-editor');
});