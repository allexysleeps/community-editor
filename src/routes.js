'use strict';
const Router = require('express').Router();
const suggestArticle = require('./controllers/suggestArticle');
const saveSuggestion = require('./controllers/saveSuggestion');
const getSuggestResult = require('./controllers/getSuggestResult');

Router
	.get('/test', (req, res) => {
		res.sendStatus(200);
	})
	.get('/suggest/article', suggestArticle)
  .post('/suggest/article/text', saveSuggestion)
  .get('/suggest/article/result', getSuggestResult)
module.exports = Router;