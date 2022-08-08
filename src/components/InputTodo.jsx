import React, { Component } from 'react';

export default class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    } 
  };

  render() {
    const { title } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
          className="input-text"
            type="text"
            placeholder="Add Todo..."
            name="title"
            value={title}
            onChange={this.onChange}
          />
          <button className="input-submit">Submit</button>
        </form>
      </div>
    );
  }
}
