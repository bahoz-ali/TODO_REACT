import React, { Component } from 'react';

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          props.handleChangeProps(id);
        }}
      />
      {title}
      <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
