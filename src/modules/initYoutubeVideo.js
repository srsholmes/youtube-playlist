export default function initYoutubeVideo(videoId) {
	//Do a check here, if API, then change the ID attribute
	//of the iframe to load in the other video
	if (document.getElementById('player').length = 0) {
		//Get the api.
		let tag = document.createElement('script');
	  tag.src = "https://www.youtube.com/iframe_api";
	  let firstScriptTag = document.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	  let player = document.createElement('div');
	   		player.className='youtubePlayer';
	   		player.id = 'player';
	  let $wrapper = document.querySelector('.playerWrapper');
	  //Append the player to the wrapper
	  $wrapper.appendChild(player);
	  //set up the player.
	  let player;
	  var done = false;


	  global.onYouTubeIframeAPIReady = () => {
	  	console.log('onYouTubeIframeAPIReady');
	    player = new YT.Player('player', {
	      height: '390',
	      width: '640',
	      videoId: videoId,
	      events: {
	        'onReady': onPlayerReady,
	        'onStateChange': onPlayerStateChange
	      }
	    });
	  }

	  //player events
	  let onPlayerReady = (event) => {
	  	console.log('onPlayerReady');
	    event.target.playVideo();
	  }

	  let onPlayerStateChange = (event) => {
	    if (event.data == YT.PlayerState.PLAYING && !done) {
	      setTimeout(stopVideo, 6000);
	      done = true;
	    }
	  }

	  let stopVideo = () => {
	    player.stopVideo();
	  }
	} else {
		alert('player already here.')
	}


}
