
const productionServer = 'https://peaceful-spire-79878.herokuapp.com';
const devServer = 'http://localhost:3001';
const serverURL = process.env.NODE_ENV === 'production' ? productionServer : devServer;

export default {
  serverURL,
  getWordsRoute: '/get-words',
  getTextRoute: '/get-text',
};
