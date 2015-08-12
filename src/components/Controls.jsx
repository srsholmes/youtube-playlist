let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Controls = React.createClass({

	render() {
		return (
			<div className="controls">
				<ul>
					<li><i class="large material-icons">insert_chart</i></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		)
	}
});

export default Controls;
