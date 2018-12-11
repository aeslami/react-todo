import React, { Component } from 'react';
import { ReactComponent as Plus } from '../img/plus-circle.svg';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    const text = this.state.text.trim();
    e.preventDefault();
    if (text) {
      this.props.addItem(text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
          <Plus onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default SearchBox;
