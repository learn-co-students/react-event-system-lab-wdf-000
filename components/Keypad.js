const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();
    
    this.trigger = this.trigger.bind(this);
  }
  
  trigger() {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.trigger} />
    );
  } 
}

module.exports = Keypad;
