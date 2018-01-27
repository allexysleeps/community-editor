const cheerio = require('cheerio');
const parsedTags = require('../config').parsedTags;
const shortid = require('shortid');

const getCheerioSelector = () => {
	let selector = '';
	parsedTags.forEach((item, index) => {
		selector += `${item}, `
	});
	return selector.slice(0, selector.length - 2);
};

const parseArticle = (html) => {
	const spreadArticle = {
		paragraphs: []
	};
	const $ = cheerio.load(html, {ignoreWhitespace: true,});
	const articleContent =  $('article').find(getCheerioSelector());
	spreadArticle.title = $('h2.headline').text();
	articleContent.each((index, item) => {
		spreadArticle.paragraphs.push({
			paragraphId: shortid.generate(),
			text: $(item).text(),
      approved: false
		})
	});
	return spreadArticle;
};

module.exports = parseArticle;