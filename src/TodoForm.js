import React, { Component } from 'react';

export default class TodoForm extends Component {
  state = {
    text: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <input
        name='text'
        value={this.state.text}
        placeholder='text'
        onChange={this.handleChange}
      />
    );
  }
}
