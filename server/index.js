const express = require('express');
const request = require('request');
const path = require('path');
const cors = require('cors');

const app = express();

const { clientFolder, port } = require('./config');

const publicPath = path.join(__dirname, clientFolder);
const { divideWords } = require('./wordFreq.js');

app.use(express.static(publicPath));
app.use(cors());


app.get('/get-words/:wordCount', (req, res) => {
  request('http://terriblytinytales.com/test.txt', (err, response, body) => {
    if (err) {
      return res.status(500).send();
    }

    let { wordCount } = req.params;
    wordCount = parseInt(wordCount, 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(wordCount)) {
      return res.status(400).send('invalid word count');
    }

    const rawText = body;
    const wordArray = divideWords(rawText).slice(0, wordCount);
    return res.status(200).send({ wordArray });
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
