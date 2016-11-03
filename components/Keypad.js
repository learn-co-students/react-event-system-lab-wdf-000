const React = require('react');

class Keypad extends React.Component {
  constructor(){
    super();

    this.theCodeIsASecret = this.theCodeIsASecret.bind(this);
  }

  theCodeIsASecret(){
    console.log('Entering password...');
  }

  render(){
    return (
      <form id="eyes4days">
        <input type="password" onKeyUp={this.theCodeIsASecret}/>
      </form>
    )
  };
}

module.exports = Keypad
