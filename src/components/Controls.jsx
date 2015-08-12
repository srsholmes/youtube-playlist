let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Controls = React.createClass({

	playPause() {
		Actions.playPause();
	},

	skipVideo(dir) {
		Actions.skipVideo(dir);
	},

	render() {
		return (
			<div className="controls">
				<ul>
					<li><i onClick={this.playPause} className="small material-icons play_arrow">play_arrow</i></li>
					<li><i onClick={this.skipVideo.bind(null, 'prev')} className="small material-icons skip_previous">skip_previous</i></li>
					<li><i onClick={this.skipVideo.bind(null, 'next')} className="small material-icons skip_next">skip_next</i></li>
				</ul>
			</div>
		)
	}
});

export default Controls;
