'use strict';
const mongo = require('../database');

const insertArticle = ({url, title, paragraphs}) => {
	return new Promise((resolve, reject) => {
		mongo.db.collection('articles')
			.insert({url, title, paragraphs}, (err, result) => {
				if (err) {
					reject(err)
				}
				resolve(result.ops[0]);
			});
	})
};

module.exports = insertArticle;