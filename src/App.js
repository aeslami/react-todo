import React, { Component, Fragment } from 'react';
import './main.css';
import Title from './components/Title';
import SearchBox from './components/SearchBox';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      count: 0
    };
  }

  addItem = item => {
    this.setState({
      items: [...this.state.items, { text: item, id: this.state.count + 1 }],
      count: this.state.count + 1
    });
  };

  removeItem = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <Fragment>
        <Title />
        <main>
          <SearchBox addItem={this.addItem} />
          <TodoList items={this.state.items} removeItem={this.removeItem} />
        </main>
      </Fragment>
    );
  }
}

export default App;
