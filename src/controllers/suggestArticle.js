const axios = require('axios');
const htmlparser = require('htmlparser2');
const CircluarJSON = require('circular-json');

const parseArticle = (html, res) => {
	const handler = new htmlparser.DomHandler((error, dom) => {
		if (error) {
			console.log(error);
			res.sendStatus(500);
		} else {
			res.json(CircluarJSON.stringify(dom)).status(200);
		}
	});

	const parser = new htmlparser.Parser(handler);

	parser.write(html);
	parser.end();
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
			parseArticle(response.data, res);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		})
}

module.exports = suggestArticle;