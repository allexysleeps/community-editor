'use strict';
const axios = require('axios');
const parseArticle = require('../utils/htmlParser');
const findArticle = require('../dbActions/findArticle');
const insertArticle = require('../dbActions/insertArticle');
const responseStructures = require('../utils/responseStructures');

const {userSuggestArticle, getResponseStructure} = responseStructures;

const addNewArticle = (url, res) => {
	axios({
		method: 'get',
		url,
		'Content-type': 'text/html'
	})
		.then((response) => parseArticle(response.data))
		.then((data) => insertArticle({url, title: data.title, paragraphs: data.paragraphs}))
		.then((data) => {
			res.json(getResponseStructure(
			  data, userSuggestArticle, {passId: true, idPrefix: 'article'}
      ));
		})
		.catch((err) => {
			console.log(err);
			if (err.response && err.response.status === 404) {
				res.sendStatus(404);
			}
			res.sendStatus(500);
		})
};

function suggestArticle (req, res) {
	const url = req.query.articleURL;
	if (!url) {
		return res.sendStatus(404);
	}
	findArticle(url)
		.then((data) => {
			if (data) {
        res.json(getResponseStructure(
          data, userSuggestArticle, {passId: true, idPrefix: 'article'}
        ));
			} else {
				addNewArticle(url, res);
			}
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
}

module.exports = suggestArticle;