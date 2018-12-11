import React, { Component } from 'react';
import { ReactComponent as Plus } from '../img/plus-circle.svg';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
  handleInputChange = e => {
    this.setState({ text: e.target.value });
  }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <Plus />
      </div>
    );
  }
}

export default SearchBox;
