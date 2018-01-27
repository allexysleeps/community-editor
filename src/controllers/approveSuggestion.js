'use strict';
const updateParagraph = require('../dbActions/updateParagraph');

function approveSuggestion (req, res) {
  const {articleId, paragraphId} = req.params;
  const {text} = req.body;
  updateParagraph({articleId, paragraphId, text})
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
}

module.exports = approveSuggestion;