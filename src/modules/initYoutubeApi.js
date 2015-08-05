export default function initYoutubeApi() {
	let d = document;
	if (d.getElementById('player') == undefined || d.getElementById('player') == null) {
		let tag = d.createElement('script');
	  tag.src = "https://www.youtube.com/iframe_api";
	  let firstScriptTag = d.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}
}
