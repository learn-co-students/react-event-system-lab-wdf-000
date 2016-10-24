const React = require('react')

class EyesOnMe extends React.Component {
  constructor() {
    super();
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    }
    
    blur() {
      console.log("Hey! Eyes on me!")
    }
    
    focus() {
      console.log("Good!")
    }
    
    render() {
      return (
        <button onFocus={this.focus} onBlur={this.blur}>Focus on this button</button>
      )
    }
}

module.exports = EyesOnMe
