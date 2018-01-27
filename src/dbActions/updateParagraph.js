'use strict';
const mongo = require('../database');
const ObjectId = require('mongodb').ObjectID;

const updateParagraph = ({articleId, paragraphId, text}) => {
  return new Promise((resolve, reject) => {
    const searchQuery = {_id: ObjectId(articleId), "paragraphs.paragraphId": paragraphId };
    const updateQuery = {$set: {[`paragraphs.$.text`]: text, approved: true}};
    mongo.db.collection('articles').update(searchQuery, updateQuery, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
};

module.exports = updateParagraph;