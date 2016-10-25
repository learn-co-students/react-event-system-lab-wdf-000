const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();
    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this)
  }

  focusHandler() {
    console.log('Good!')
  }

  blurHandler() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (<button onFocus={this.focusHandler} onBlur={this.blurHandler}>Eyes on me!</button>)
  }
}


module.exports = EyesOnMe