'use strict';
const findSuggestions = require('../dbActions/findSuggestions');
const findArticle = require('../dbActions/findArticle');

// Not sure about this
const formatResponse = (article, suggestions) => {
  const {paragraphs, title, _id} = article;
  const response = {
    title: title,
    articleId: _id,
    paragraphs: [],
  };
  paragraphs.forEach(({paragraphId, text}) => {
    let hasSuggestions = false;
    const paragraphItem = {
      paragraphId: paragraphId,
      originalText: text,
      suggestions: []
    };
    suggestions.forEach((item) => {
      if (item.paragraphId === paragraphId) {
        paragraphItem.suggestions.push({
          suggestionId: item._id,
          usersText: item.usersText
        });
        hasSuggestions = true;
      }
    });
    if (hasSuggestions) {
      response.paragraphs.push(paragraphItem);
    }
  });
 return response;
};

function getSuggestResult (req, res) {
  const url = req.query.articleURL;
  if (!url) {
    return res.sendStatus(404);
  }
  let article = {};
  findArticle(url)
    .then((data) => {
      article = data;
    })
    .then(() => findSuggestions(url))
    .then((suggestionsData) => {
      res.json(formatResponse(article, suggestionsData));
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}

module.exports = getSuggestResult;