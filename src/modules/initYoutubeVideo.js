export default function initYoutubeVideo(videoId) {
	console.log('initYoutubeVideo');

	var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  //Need to expose the youtube video on the window when instantiating it.
  global.onYouTubeIframeAPIReady = function() {
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

  function onPlayerReady(event) {
  	console.log('onPlayerReady');
    event.target.playVideo();
  }
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
}
