import axios from 'axios';

export const getArticlePharagraphs = (url) => {
  return axios.get(`/suggest/article/?articleURL=${url}`)
};