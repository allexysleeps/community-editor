'use strict';
const insertSuggestedText = require('../dbActions/insertSuggestedText');

function saveSuggestion (req, res) {
  insertSuggestedText(req.body)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
}

module.exports = saveSuggestion;