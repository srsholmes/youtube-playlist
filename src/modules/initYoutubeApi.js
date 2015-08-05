export default function initYoutubeApi(videoId) {
	let d = document;
	if (d.getElementById('player') == undefined || d.getElementById('player') == null) {
		//Get the api.
		let tag = d.createElement('script');
	  tag.src = "https://www.youtube.com/iframe_api";
	  let firstScriptTag = d.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
	}
}
