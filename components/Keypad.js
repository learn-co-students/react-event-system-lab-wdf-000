const React = require('react')

class Keypad extends React.Component {
  constructor() {
    super();
    
    this.enPas = this.enPas.bind(this);
  }

  enPas() {
    console.log("Entering password...");
  }

  render() {
    return(
      <input onKeyUp={this.enPas} type="password" />
    );
  }
}

module.exports = Keypad
