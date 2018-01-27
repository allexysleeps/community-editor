'use strict';
const mongo = require('../database');

const DBdeleteAllSuggestions = ({paragraphId, articleId}) => {
  console.log(paragraphId, articleId);
  return new Promise((resolve, reject) => {
    mongo.db.collection('suggestions').deleteMany({articleId, paragraphId}, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
};

module.exports = DBdeleteAllSuggestions;