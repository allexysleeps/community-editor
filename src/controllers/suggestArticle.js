const axios = require('axios');
const cheerio = require('cheerio');
const parsedTags = require('../config').parsedTags;

const getCheerioSelector = () => {
	let selector = '';
	parsedTags.forEach((item) => {
		selector += `div.body-copy ${item}, `
	});
	return selector;
};

const parseArticleCheerio = (html, res) => {
	const $ = cheerio.load(html);
	const selector = getCheerioSelector();
	const articleContent =  $(`article`)[0];
	console.log(articleContent);
	res.sendStatus(200);

};



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
		.then((response) => {
			parseArticleCheerio(response.data, res);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		})
}

module.exports = suggestArticle;