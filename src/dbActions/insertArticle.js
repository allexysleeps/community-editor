'use strict';
const mongo = require('../database');

const insertArticle = ({url, title, pharagraphs}) => {
	return new Promise((resolve, reject) => {
		mongo.db.collection('articles')
			.insert({url, title, pharagraphs}, (err, result) => {
				if (err) {
					reject(err)
				}
				resolve(result);
			});
	})
};

module.exports = insertArticle;