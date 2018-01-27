'use strict';
const mongo = require('../database');

const findSuggestions = (articleURL) => {
  return new Promise((resolve, reject) => {
    mongo.db.collection('suggestions')
      .find({articleURL}, {fields: {paragraphId: 1, usersText: 1}})
      .toArray((err, result) => {
        console.log(result);
        if (err) {
          reject(err);
        }
        resolve(result);
      })
  })
};

module.exports = findSuggestions;