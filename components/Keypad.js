const React = require('react');

class Keypad extends React.Component {
  constructor(){
    super();
    this.handlesKeyUp = this.handlesKeyUp.bind(this);
  }

  handlesKeyUp(){
    console.log('Entering password...')
  };

  render() {
    return (
    <div>
      <input type="password" onKeyUp={this.handlesKeyUp}/>
    </div>
    );
  }
}

module.exports = Keypad;