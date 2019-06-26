import React from 'react';

import WordList from './components/word-list';
import Form from './components/form';
import getWords from './apis/get-text.api';
import './App.css';

class App extends React.Component {
  state = {
    words: [],
  }

  getWordCount = async (wordCount) => {
    const response = await getWords(wordCount);

    this.setState({
      words: response.wordArray,
    });
  }

  render() {
    const { words } = this.state;
    return (
      <div className="ui container">
        <div className="m-10 ui grid">
          <div className="four wide column">
            <Form getNumber={this.getWordCount} />
          </div>
          <div className="eight wide column word-list">
            <WordList words={words} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
