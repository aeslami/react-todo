import React, { Component, Fragment } from 'react';
import './main.css';
import Title from './components/Title';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  addItem = item => {
    this.setState({ items: [...this.state.items, { text: item }] });
  };

  render() {
    return (
      <Fragment>
        <Title />
        <SearchBox />
      </Fragment>
    );
  }
}

export default App;
