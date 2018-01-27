'use strict';
const insertSuggestedText = require('../dbActions/insertSuggestedText');

function saveSuggestion (req, res) {
  const {articleId, articleURL, paragraphId, usersText} = req.body;
  const newSuggestion  = {
    articleId,
    articleURL,
    paragraphId,
    usersText
  };
  insertSuggestedText(newSuggestion)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
}

module.exports = saveSuggestion;