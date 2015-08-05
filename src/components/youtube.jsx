let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//The vPlayer has to be put here to allow it to be changed
//ouside of the scope of the render function.
var vPlayer;

let Player = React.createClass({

	stopVideo() {
    vPlayer.stopVideo();
  },

  onPlayerReady(event) {
  	console.log('onPlayerReady');
  },

  onPlayerStateChange(event) {
  	console.log('on player state chnaged');
  },

  shouldComponentUpdate(nextProps) {
  	//the toJSON is needed to compare the diff in the objects,
  	//without it, react compares the object reference not the value.
  	if ( nextProps.videoData.id === null ) return false;
    if (nextProps.videoData.toJSON() === this.props.videoData.toJSON()) return false;
    return true;
  },

  render() {
  	// console.log('Player render');
  	var videoData = this.props.videoData;
  	// console.log(videoData);
  	if (videoData.id === undefined || videoData.id === null ) {
  		global.onYouTubeIframeAPIReady = () => {
		  	console.log('onYouTubeIframeAPIReady');
		    vPlayer = new YT.Player('youtubeVideo', {
		      height: '390',
		      width: '640',
		      videoId: 'M7lc1UVf-VE',
		      events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
          }
		    });
  		}
  	} else {
			vPlayer.loadVideoById(videoData.id, 0, 'large');
  	}

    return (
    	<div>
    		<div id="youtubeVideo">
        </div>
      </div>
    )
  }
});

export default Player;
