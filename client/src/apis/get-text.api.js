import axios from 'axios';
import config from '../config';

const { serverURL, getWordsRoute } = config;

const getWords = (wordCount) => {
  const url = `${serverURL}${getWordsRoute}/${wordCount}`;
  return axios.get(url).then(response => response.data);
};

export default getWords;
