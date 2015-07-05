let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
//Stores
let Store = require('../stores/store');

// Initialise the video here using a conditional render.
// Use state to set the videoObject
// and init a video using Actions/controlled by state
// to allow the video to change.

//If video props is blank, do not render iframe
//If there are props/the props change, render the iframe.

var vPlayer;

let Player = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
  	return{
  		videoProps: {
  			id: null
  		}
  	}
  },

  onPlayerReady(event) {
  	console.log('onPlayerReady');
    // event.target.playVideo();
  },

  onPlayerStateChange(event) {
  	console.log('on player state chnaged');
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    // }
  },

  render() {
  	var videoProps = this.state.videoProps;
  	console.log(videoProps);
  	if (videoProps.id === undefined || videoProps.id === null ) {
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
			//Load in the video by ID here.
			console.log(vPlayer);
			vPlayer.loadVideoById("bHQqvYy5KYo", 5, "large")
  	}

    return (
    	<div>
    		<div id="youtubeVideo"></div>
      	<p videoProps={this.state.videoProps}>{this.props.videoProps}</p>
      </div>
    )
  }
});

export default Player;
