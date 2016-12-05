const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.doSomeF = this.doSomeF.bind(this);
    this.doSomeB = this.doSomeB.bind(this);
  }


doSomeF() {
  console.log('Good!')
}

doSomeB(){
  console.log('Hey! Eyes on me!')
}

  render() {
    return (
      <button onFocus={this.doSomeF} onBlur={this.doSomeB}/>
    )
  }
}

module.exports = EyesOnMe;
