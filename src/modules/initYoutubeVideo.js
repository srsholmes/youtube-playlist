export default function initYoutubeVideo(videoId) {
	//Do a check here, if API, then change the ID attribute
	//of the iframe to load in the other video
	let d = document;
	if (d.getElementById('player') == undefined || d.getElementById('player') == null) {
		//Get the api.
		let tag = d.createElement('script');
	  tag.src = "https://www.youtube.com/iframe_api";
	  let firstScriptTag = d.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	  //Set up the player.
	  let player = d.createElement('div');
	   		player.className='youtubePlayer';
	   		player.id = 'player';
	  let $wrapper = d.querySelector('.playerWrapper');
	  $wrapper.appendChild(player);
	  let done = false;
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
		let player = d.querySelector('.youtubePlayer');
		player.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`
	}
}
