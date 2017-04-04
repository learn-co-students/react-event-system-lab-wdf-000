import React from 'react';

export default class Keypad extends React.Component {
  constructor() {
    super();

    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputPassword() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    );
  }
}
