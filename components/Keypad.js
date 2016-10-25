import React, { Component } from 'react';
import ReactDOM from 'react-dom';

module.exports = class Keypad extends React.Component {
  constructor() {
    super();
    this.entering = this.entering.bind(this);
  }

  entering() {
    console.log('Entering password...');
  }

  render() {
    return (<input onKeyUp={this.entering} type="password" />)
  }
}
