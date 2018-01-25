'use strict';

const axios = require('axios');
const parseArticle = require('../utils/htmlParser');
const insertArticle = require('../dbActions/insertArticle');

function suggestArticle (req, res) {
	const url = req.query.articleURL;
	if (!url) {
		return res.sendStatus(404);
	}
	axios({
		method: 'get',
		url,
		'Content-type': 'text/html'
	})
		.then((response) => parseArticle(response.data))
		.then((data) => insertArticle({url, title: data.title, pharagraphs: data.pharagraphs}))
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		})
}

module.exports = suggestArticle;