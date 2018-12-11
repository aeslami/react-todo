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
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 50px',
          padding: '1em',
          borderRadius: '50px',
          border: '4px solid black'
        }}
      >
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
          style={{
            height: '40px',
            fontSize: '25px',
            borderRadius: '50px'
          }}
        />
        <Plus
          onClick={this.handleSubmit}
          style={{ height: '40px', width: '40px', marginLeft: '1em' }}
        />
      </form>
    );
  }
}

export default SearchBox;
