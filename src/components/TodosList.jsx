import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodosList extends Component {
  render() {
    const { handleChangeProps, deleteTodoProps, setUpdate } = this.props;

    return (
      <div>
        <ul>
          {this.props.todos?.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodoProps={deleteTodoProps}
              handleChangeProps={handleChangeProps}
              setUpdate={setUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }
}
