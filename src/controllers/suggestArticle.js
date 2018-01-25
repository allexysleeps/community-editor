const axios = require('axios');

function suggestArticle (req, res) {
	const url = req.query.articleURL;
	if (url) {
		axios.get(url)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err);
			})
	}
	res.sendStatus(200);
}

module.exports = suggestArticle;