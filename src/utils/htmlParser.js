const cheerio = require('cheerio');
const parsedTags = require('../config').parsedTags;

const getCheerioSelector = () => {
	let selector = '';
	parsedTags.forEach((item, index) => {
		selector += `${item}, `
	});
	return selector.slice(0, selector.length - 2);
};

const parseArticle = (html) => {
	const spreadArticle = {
		pharagraphs: []
	};
	const $ = cheerio.load(html, {ignoreWhitespace: true,});
	const articleContent =  $('article').find(getCheerioSelector());
	spreadArticle.title = $('h2.headline').text();
	articleContent.each((index, item) => {
		spreadArticle.pharagraphs.push({
			pharagraphId: index,
			text: $(item).text()
		})
	});
	return spreadArticle;
};

module.exports = parseArticle;