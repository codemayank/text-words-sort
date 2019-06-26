const { divideWords } = require('./wordFreq');

describe('divideWords()', () => {
  const words = 'this is this is that is something that was not.';
  const wordFreq = divideWords(words);
  const expectedOutput = [
    {
      word: 'is',
      freq: 3,
    }, {
      word: 'this',
      freq: 2,
    },
    {
      word: 'that',
      freq: 2,
    },
    {
      word: 'something',
      freq: 1,
    },
    {
      word: 'was',
      freq: 1,
    },
    {
      word: 'not',
      freq: 1,
    },
  ];
  expect(wordFreq).toEqual(expectedOutput);
});
