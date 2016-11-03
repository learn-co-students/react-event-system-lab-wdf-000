const React = require('react');

class Keypad extends React.Component {
  constructor () {
    super();
    this.Keypad  = this.Keypad.bind(this)
  }

  Keypad() {
    console.log('Entering password...')
  }

  render () {
    return (
      <input type="password" onKeyUp={this.Keypad}></input>
    )
  }
}

module.exports = Keypad;

