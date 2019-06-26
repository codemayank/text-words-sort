import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  state = {
    wordCount: '',
  }

  onWordCountChange = (e) => {
    e.preventDefault();
    this.setState({
      wordCount: e.target.value,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { getNumber } = this.props;
    const { wordCount } = this.state;
    getNumber(wordCount);
  }

  render() {
    const { wordCount } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleClick}>
        <div className="field">
          <div className="ui big input">
            <input name="wordCount" onChange={this.onWordCountChange} value={wordCount} type="number" placeholder="How Many Words?" />
          </div>
        </div>
        <div>
          <button className="ui secondary button" type="submit">Get Words</button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  getNumber: PropTypes.func.isRequired,
};


export default Form;
