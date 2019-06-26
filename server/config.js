const { NODE_ENV, PORT = 3001 } = process.env;

let clientFolder = '../client/build';

if (NODE_ENV === 'development') {
  clientFolder = '../client/public';
}

module.exports = {
  clientFolder,
  port: PORT,
};
