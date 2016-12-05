const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.eventM = this.eventM.bind(this)
  }

  eventM() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
      <input type="password" onKeyUp={this.eventM} />
      </div>
    );
  }
}

module.exports =  Keypad;
