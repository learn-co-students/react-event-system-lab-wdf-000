const React = require('react');

class EyesOnMe extends React.Component {
  isFocused() {
    console.log('Good!');
  }

  isBlurred() {
    console.log('Hey! Eyes on me!');
  }
  render() {
    return (
      <button onFocus={this.isFocused} onBlur={this.isBlurred} >Eyes On Me!</button>
    );
  }
}

module.exports = EyesOnMe;
