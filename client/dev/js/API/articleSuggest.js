import axios from 'axios';

export const getArticlePharagraphs = (url) => {
  return axios.get(`/suggest/article/?articleURL=${url}`);
};

export const sendSuggestionText = (options) => {
  return axios.post(`/suggest/article/text`, options);
};