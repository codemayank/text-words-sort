const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const cors = require('cors');

const app = express();

const { clientFolder, port } = require('./config');

const publicPath = path.join(__dirname, clientFolder);
const { divideWords } = require('./wordFreq.js');

app.use(express.static(publicPath));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get-words/:wordCount', (req, res) => {
  request('http://terriblytinytales.com/test.txt', (err, response, body) => {
    if (err) {
      return res.status(500).send();
    }
    const { wordCount } = req.params;
    console.log('logging wordCount', wordCount);
    const rawText = body;
    const wordArray = divideWords(rawText).slice(0, wordCount);
    return res.send({ wordArray });
  });
});

app.get('/get-text', (req, res) => {
  request('http://terriblytinytales.com/test.txt', (err, response, body) => {
    if (err) {
      return res.status(500).send();
    }
    const rawText = body;
    return res.send({ rawText });
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
