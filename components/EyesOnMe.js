import React, { Component, PropTypes } from 'react';

class EyesOnMe extends Component {

  constructor() {
    super();
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnFocus() {
    console.log("Good!");
  }
  handleOnBlur() {
    console.log("Hey! Eyes on me!");
  }
  render() {
    return (
      <div>
        <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} >Some button</button>
      </div>
    );
  }
}

module.exports = EyesOnMe;
