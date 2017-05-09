import React from 'react';


class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.blurring = this.blurring.bind(this);

    this.focus = this.focus.bind(this);
  }


  blurring() {
    console.log('Hey! Eyes on me!');
  }


  focus() {
    console.log(`Good!`);
  }


  render() {
    return (
        <button onFocus={this.focus} onBlur={this.blurring}>Button</button>
    );
  }

};


module.exports = EyesOnMe
