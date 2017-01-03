const React = require('react')

class Keypad extends React.Component {
  constructor(){
    super()
    this.printText = this.printText.bind(this)
  }

  printText(){
    console.log('Entering password...')
  }

  render(){
    return (
    <input type='password' onKeyUp={this.printText}/>
    )
  }
}

module.exports = Keypad
