import React from 'react';

const TodoList = props => {
  const items = props.items.map(item => <li key={item.text}>{item.text}</li>);
  return <ul>{items}</ul>;
};

export default TodoList;
