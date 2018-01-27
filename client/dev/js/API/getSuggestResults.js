import axios from 'axios';

export const getSuggestResults = ({url, showApproved}) => {
  return axios.get(`/suggest/article/result?articleURL=${url}&${showApproved ? 'showApproved=true' : ''}`)
};