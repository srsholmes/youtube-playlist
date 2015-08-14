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
		let isPlaying = this.props.videoData.playing ? 'pause' : 'play_arrow';
		return (
			<div className="controls">
				<ul>
					<li><i onClick={this.playPause} className={'small material-icons ' + isPlaying}>{isPlaying}</i></li>
					<li><i onClick={this.skipVideo.bind(null, 'prev')} className="small material-icons skip_previous">skip_previous</i></li>
					<li><i onClick={this.skipVideo.bind(null, 'next')} className="small material-icons skip_next">skip_next</i></li>
				</ul>
			</div>
		)
	}
});

export default Controls;
