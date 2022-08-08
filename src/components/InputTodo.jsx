import React, { Component } from 'react';

export default class InputTodo extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Add Todo..." />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
