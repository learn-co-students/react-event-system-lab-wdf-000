import React, { Component } from 'react'

class Keypad extends Component { 
  constructor() {
    super();
    this.showPassword = this.showPassword.bind(this)

   }

  showPassword() {
     console.log("Entering password...") 
  }

  render() {
    return (
      <input type="password" onKeyUp={this.showPassword} />
    )

  }

}

module.exports = Keypad
