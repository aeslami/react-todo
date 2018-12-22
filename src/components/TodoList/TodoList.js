import React from 'react';
import './TodoList.module.css';

const TodoList = props => {
  const items = props.items.map(item => (
    <li
      key={item.id}
      style={{
        height: '40px',
        fontSize: '25px',
        borderRadius: '50px',
        listStyleType: 'none',
        cursor: 'pointer'
      }}
      onClick={() => props.removeItem(item.id)}
    >
      {item.text}
    </li>
  ));

  return (
    <div>
      {props.items.length > 0 && (
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto',
            padding: '1em',
            borderRadius: '50px',
            border: '4px solid black'
          }}
        >
          {items}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
