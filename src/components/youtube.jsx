let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { LOCAL_STORAGE_KEY } from '../constants/constants';

//The vPlayer has to be put here to allow it to be changed
//ouside of the scope of the render function.
let vPlayer;

let Player = React.createClass({

  onPlayerReady(event) {
  	// console.log('onPlayerReady');
  },

  onPlayerStateChange(event) {
    //Need to handle when the user changes the state using the youtube video.
    //eg, when user clicks play/pause on video.
    //
  },

  componentWillReceiveProps(nextProps) {
  	nextProps.videoData.playing === true ? vPlayer.playVideo() : vPlayer.pauseVideo();
  },

  shouldComponentUpdate(nextProps) {
    return nextProps.videoData.id !== this.props.videoData.id;
  },

  componentWillMount(){
    let videoId;
    let playlist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    playlist.length > 0 ? videoId = playlist[0].id.videoId : videoId = 'M7lc1UVf-VE';

		global.onYouTubeIframeAPIReady = () => {
	    vPlayer = new YT.Player('youtubeVideo', {
	      height: '390',
	      width: '640',
	      videoId: videoId,
	      events: {
          'onReady': this.onPlayerReady,
          'onStateChange': this.onPlayerStateChange
        }
	    });
		}
  },

  render() {
  	let videoData = this.props.videoData;
  	if (videoData.id !== null) vPlayer.loadVideoById(videoData.id, 0, 'large');
    return (
    	<div className="video-container">
    		<div id="youtubeVideo"></div>
      </div>
    )
  }
});

export default Player;
