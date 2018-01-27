import axios from 'axios';

export const getArticlePharagraphs = (url) => {
  return axios.get(`/suggest/?articleURL=${url}`);
};

export const sendSuggestionText = (options) => {
  return axios.post(`/suggest/text`, options);
};