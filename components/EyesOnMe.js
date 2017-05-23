import React, { Component } from 'react'

class EyesOnMe extends Component { 
  constructor() {
    super() 
  
  }

  focusMessage(){
    console.log('Good!')
  }

  blurMessage(){
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.focusMessage} onBlur={this.blurMessage} /> 
    )
  }
}

module.exports = EyesOnMe
