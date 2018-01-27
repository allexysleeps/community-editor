'use strict';
const mongo = require('../database');

const insertSuggestedTest = (suggestion) => {
  return new Promise((resolve, reject) => {
    mongo.db.collection('suggestions')
      .insert(suggestion, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result);
      })
  })
};

module.exports = insertSuggestedTest;