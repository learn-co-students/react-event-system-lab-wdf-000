const React = require('react');

class Keypad extends React.Component{
  constructor(){
    super();
    this.type = "password";
    this.keyUp = this.keyUp.bind(this);
  }
  keyUp(){
    console.log('Entering password...');
  }
    render(){
      return(
        <input type={this.type} onKeyUp={this.keyUp}></input>
      );
    }
}
module.exports = Keypad
