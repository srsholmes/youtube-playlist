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

//The vPlayer has to be put here to allow it to be changed
//ouside of the scope of the render function.
var vPlayer;

let Player = React.createClass({

  // mixins: [
  //   Reflux.connect(Store)
  // ],

  getInitialState() {
  	return{
  		videoProps: {
  			id: null
  		}
  	}
  },

	stopVideo() {
    vPlayer.stopVideo();
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

  componentWillUpdate(nextProps, nextState) {
    if (nextState.videoProps.id === this.state.videoProps.id) return false;
    return true;
  },

  render() {
  	console.log('Player render');
  	// var videoProps = this.state.videoProps;
  	// console.log(videoProps);
  	// if (videoProps.id === undefined || videoProps.id === null ) {
  	// 	global.onYouTubeIframeAPIReady = () => {
		 //  	console.log('onYouTubeIframeAPIReady');
		 //    vPlayer = new YT.Player('youtubeVideo', {
		 //      height: '390',
		 //      width: '640',
		 //      videoId: 'M7lc1UVf-VE',
		 //      events: {
   //          'onReady': this.onPlayerReady,
   //          'onStateChange': this.onPlayerStateChange
   //        }
		 //    });
  	// 	}
  	// } else {
			// //Load in the video by ID here.
			// console.log(vPlayer);
			// vPlayer.loadVideoById(videoProps.id, 5, 'large');
  	// }

    return (
    	<div>
    		<div id="youtubeVideo">
          <h1>Youtube video here</h1>
        </div>
      </div>
    )
  }
});

export default Player;
