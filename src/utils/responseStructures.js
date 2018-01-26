'use strict';

const userSuggestArticle = {
	title: null,
	paragraphs: null
};

const getResponseStructure = (data, structure, idParams = {passId: false, idPrefix: ''}) => {
	const structuredResponse = {};
	for (let key in structure) {
		if (structure.hasOwnProperty(key)) {
			structuredResponse[key] = data[key]
		}
	}
	const {passId, idPrefix} = idParams;
  if (passId) {
	  structuredResponse[`${idPrefix}Id`] = data._id.toString();
  }
	return structuredResponse;
};

module.exports = {
	userSuggestArticle,
	getResponseStructure
};