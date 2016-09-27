import React from 'react';
import ReactDOM from 'react-dom';

class EyesOnMe extends React.Component {
  constructor() {
    super();
    this.eyes = this.eyes.bind(this);
    this.good = this.good.bind(this);
  }
  eyes() {
    console.log('Hey! Eyes on me!');
  }
  good() {
    console.log('Good!');
  }
  render() {
    return (
      <button onFocus={this.good} onBlur={this.eyes} />
    )
  }
}

module.exports = EyesOnMe;
