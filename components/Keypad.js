const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();
    this.keyUpHandler = this.keyUpHandler.bind(this)
  }

  keyUpHandler() {
    console.log('Entering password...')
  }

  render() {
    return (<input type='password' onKeyUp={this.keyUpHandler} />)
  }
}

module.exports = Keypad