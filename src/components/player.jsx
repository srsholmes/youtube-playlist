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

  render() {

  	var videoProps = this.state.videoProps;
  	console.log(videoProps);

  	if( videoProps.id === undefined || videoProps.id === null ) {
  		var vPlayer = <div>Here is an empty vPlayer div</div>
  	} else {

  		let d = document;
  		var vPlayer = <div id="youtubeVideo"></div>;
			global.onYouTubeIframeAPIReady = () => {
		  	console.log('onYouTubeIframeAPIReady');
		    vPlayer = new YT.Player('youtubeVideo', {
		      height: '390',
		      width: '640',
		      videoId: videoProps.id
		    });
  		}
  	}

    return (
    	<div>
    		<div>{vPlayer}</div>
      	<p videoProps={this.state.videoProps}>{this.props.videoProps}</p>
      </div>
    )
  }
});

export default Player;
