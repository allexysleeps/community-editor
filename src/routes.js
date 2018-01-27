'use strict';
const Router = require('express').Router();
const suggestArticle = require('./controllers/suggestArticle');
const saveSuggestion = require('./controllers/saveSuggestion');

Router
	.get('/test', (req, res) => {
		res.sendStatus(200);
	})
	.get('/suggest/article', suggestArticle)
  .post('/suggest/article/text', saveSuggestion)
module.exports = Router;