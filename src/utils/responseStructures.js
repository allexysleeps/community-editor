'use strict';

const userSuggestArticle = {
	title: null,
	pharagraphs: null
};

const getResponseStructure = (data, structure) => {
	const structuredResponse = {};
	for (let key in structure) {
		if (structure.hasOwnProperty(key)) {
			structuredResponse[key] = data[key]
		}
	}
	return structuredResponse;
};

module.exports = {
	userSuggestArticle,
	getResponseStructure
};