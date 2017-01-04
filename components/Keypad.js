const React = require('react');

class Keypad extends React.Component {
  logInput() {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type='password' onKeyUp={this.logInput}/>
    );
  }
}

module.exports = Keypad;
