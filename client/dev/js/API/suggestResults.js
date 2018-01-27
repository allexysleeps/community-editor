import axios from 'axios';

export const getSuggestResults = ({url, showApproved}) => {
  return axios.get(`/result?articleURL=${url}&${showApproved ? 'showApproved=true' : ''}`)
};

export const deleteAllSuggestions = ({paragraphId, articleId}) => {
  return axios.delete(`/result/${articleId}/suggestions/all/${paragraphId}`)
};

export const sendSuggestion = ({paragraphId, articleId, text}) => {
  return axios.put(`/result/paragraph/${articleId}/${paragraphId}`, {text})
};