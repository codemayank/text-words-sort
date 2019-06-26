
function divideWords(str) {
  const strArr = str.split(/[\W0-9]+/g);

  const wordFreq = strArr.reduce((acc, elm) => {
    const wordIndex = acc.findIndex(x => x.word.toUpperCase() === elm.toUpperCase());
    if (wordIndex > -1) {
      acc[wordIndex].freq += 1;
      return acc;
    }
    const newWord = {
      word: elm,
      freq: 1,
    };
    return [...acc, newWord];
  }, []);

  wordFreq.sort((a, b) => {
    if (a.freq > b.freq) {
      return -1;
    }
    if (a.freq < b.freq) {
      return 1;
    }
    return 0;
  });
  return wordFreq;
}

module.exports = { divideWords };
