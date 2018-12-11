import React, { Component, Fragment } from 'react';
import './main.css';
import Title from './components/Title';
import SearchBox from './components/SearchBox';

class App extends Component {
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
