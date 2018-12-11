import React, { Component, Fragment } from 'react';
import './main.css';
import Title from './components/Title';
import SearchBox from './components/SearchBox';
import TodoList from './components/TodoList';

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
        <main
          style={{
            display: 'grid',
            gridGap: '50px'
          }}
        >
          <SearchBox addItem={this.addItem} />
          <TodoList items={this.state.items} />
        </main>
      </Fragment>
    );
  }
}

export default App;
