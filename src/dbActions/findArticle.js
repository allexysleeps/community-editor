'use strict';
const mongo = require('../database');

const findArticle = ({url}) => {
	return new Promise((resolve, reject) => {
		mongo.db.collection('articles').findOne({url}, (err, result) => {
			if (err) {reject(err)}
			resolve(result)
		})
	})
};

module.exports = findArticle;