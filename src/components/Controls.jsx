let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Controls = React.createClass({

	render() {
		return (
			<div className="controls">
				<ul>
					<li><i className="small material-icons play_arrow">play_arrow</i></li>
					<li><i className="small material-icons pause">pause</i></li>
					<li><i className="small material-icons skip_previous">skip_previous</i></li>
					<li><i className="small material-icons skip_next">skip_next</i></li>
				</ul>
			</div>
		)
	}
});

export default Controls;
