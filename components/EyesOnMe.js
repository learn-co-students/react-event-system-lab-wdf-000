const React = require('react' )

class EyesOnMe extends React.Component {
	constructor() {
		super();
		this.good = this.good.bind(this);
		this.eyes = this.eyes.bind(this);
	}
	good() {
		console.log('Good!');
	}
	eyes() {
		console.log('Hey! Eyes on me!')
	}
	render() {
		return (
			<button onFocus={this.good} onBlur={this.eyes}>Focus on this button</button>
		)
	}
}

module.exports = EyesOnMe;