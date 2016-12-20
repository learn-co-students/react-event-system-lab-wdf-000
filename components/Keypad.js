const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.inputting = this.inputting.bind(this);
  }
  inputting() {
    console.log('Entering password...');
  }
  render(){
    return (
      <input type="password" onKeyUp={this.inputting}></input>
    )
  }
}
module.exports = Keypad
