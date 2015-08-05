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

  // onPlayerReady(event) {
  // 	console.log('onPlayerReady');
  //   // event.target.playVideo();
  // },

  // onPlayerStateChange(event) {
  // 	console.log('on player state chnaged');
  //   // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   //   setTimeout(stopVideo, 6000);
  //   //   done = true;
  //   // }
  // },

  //Stop the component re-rendering if the data is the same.
  shouldComponentUpdate(nextProps) {
    if (nextProps.videoData.id === this.props.videoData.id) return false;
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
			//Load in the video by ID here.
			console.log(vPlayer);
			vPlayer.loadVideoById(videoData.id, 5, 'large');
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
