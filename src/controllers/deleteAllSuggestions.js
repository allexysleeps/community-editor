'use strict';
const DBdeleteAllSuggestions = require('../dbActions/DBdeleteAllSuggestions');

function deleteAllSuggestions  (req, res) {
  const {articleId, paragraphId} = req.params;
  DBdeleteAllSuggestions({articleId, paragraphId})
    .then((data) => {
      // console.log(data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
}


module.exports = deleteAllSuggestions;