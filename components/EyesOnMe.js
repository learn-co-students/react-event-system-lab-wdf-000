const React = require('react');

class EyesOnMe extends React.Component {
  constructor(){
    super();

    this.lookingAtIt = this.lookingAtIt.bind(this);
    this.hazyEyes = this.hazyEyes.bind(this);
  }

  lookingAtIt(){
    console.log('Good!');
  }
  hazyEyes(){
    console.log('Hey! Eyes on me!');
  }

  render(){
    return <button onFocus={this.lookingAtIt} onBlur={this.hazyEyes}>Come at me!</button>
  };
}

module.exports = EyesOnMe
