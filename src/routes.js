const Router = require('express').Router();
const suggestArticle = require('./controllers/suggestArticle');

Router
	.get('/test', (req, res) => {
		res.sendStatus(200);
	})
	.get('/suggest/article', suggestArticle)

module.exports = Router;