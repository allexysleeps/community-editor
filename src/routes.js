'use strict';

const Router = require('express').Router();
const suggestArticle = require('./controllers/suggestArticle');
const saveSuggestion = require('./controllers/saveSuggestion');
const getSuggestResult = require('./controllers/getSuggestResult');
const deleteAllSuggestions = require('./controllers/deleteAllSuggestions');
const approveSuggestion = require('./controllers/approveSuggestion');

Router
	.get('/test', (req, res) => {
		res.sendStatus(200);
	})
	.get('/suggest', suggestArticle)
  .post('/suggest/text', saveSuggestion)
  .get('/result', getSuggestResult)
  .delete('/result/:articleId/suggestions/all/:paragraphId', deleteAllSuggestions)
  .put('/result/paragraph/:articleId/:paragraphId', approveSuggestion)
  ;
module.exports = Router;