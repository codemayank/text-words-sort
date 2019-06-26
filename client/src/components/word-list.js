import React from 'react';
import PropTypes from 'prop-types';

const WordList = ({ words }) => (
  <table className="ui celled inverted table">
    <thead>
      <tr>
        <th>#</th>
        <th>Word</th>
        <th>Frequency</th>
      </tr>
    </thead>
    <tbody>
      {
          words.map(({ word, freq }, index) => (
            <tr key={word}>
              <td datalabel="No">{index + 1}</td>
              <td datalabel="Word">{word}</td>
              <td datalabel="Freq">{freq}</td>
            </tr>
          ))
          }
    </tbody>
  </table>
);


WordList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string,
    freq: PropTypes.number,
  })).isRequired,
};

export default WordList;
