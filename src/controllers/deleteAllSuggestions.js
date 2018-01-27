'use strict';
const DBdeleteAllSuggestions = require('../dbActions/DBdeleteAllSuggestions');

function deleteAllSuggestions  (req, res) {
  const {articleId, paragraphId} = req.params;
  DBdeleteAllSuggestions({articleId, paragraphId})
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
}


module.exports = deleteAllSuggestions;