const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    console.log('Good!');
  }

  onBlur() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur} >
        Eyes on me, please!
      </button>
    );
  }
}

module.exports = EyesOnMe;
