import React, { Component, PropTypes } from 'react';

class Keypad extends Component {

  constructor() {
    super();
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  handleOnKeyUp(){
    console.log("Entering password...");
  }

  render() {
    return (
      <div>
        <input type='password' onKeyUp= {this.handleOnKeyUp} />
      </div>
    );
  }
}

module.exports = Keypad;
