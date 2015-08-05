let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
let Immutable = require('immutable');

let AppData = Immutable.Map({
  results: {
    data: {
      items: []
    }
  },
  videoData: {
    id: null
  },
  searchBarOpen: false,
  playlist: []
});


let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    // this.contents = Immutable.Map({
    // 	results: {
    // 		data: {
    // 			items: []
    // 		}
    // 	},
    // 	videoData: {
  		// 	id: null
  		// },
  		// searchBarOpen: false,
  		// playlist: []
    // });
  },

  getInitialState() {
    return AppData.toJS();
  },

  onSearchYoutubeApiCompleted(data) {
    var copy = AppData.set('results', data).toJS();
    console.log(copy);
  	// this.contents.results = data;
  	this.trigger(copy);
  },


  onChooseVideo(videoId) {
  	console.log('onChooseVideo STORE');
  	// this.contents = {
  	// 	searchBarOpen: false,
  	// 	videoData: {
  	// 		id: id
  	// 	},
  	// 	playlist: []
  	// }
  	//Why doesnt this work?
  	//May need to use https://facebook.github.io/immutable-js/
  	this.contents.searchBarOpen = false;
  	this.contents.videoData.id = videoId;

  	this.trigger(this.contents);
  },

  onAddToPlaylist(data) {
  	let videoID = data.id.videoId;
  	let title = data.snippet.title;
  	let thumbnail = data.snippet.thumbnails.medium.url;
  	let playlistItem = {
  		videoID: videoID,
  		title: title,
  		thumbnails: thumbnail
  	};
  	this.contents.playlist.push(playlistItem);
  	this.trigger(this.contents);
  },

  onToggleSearch(state) {
    var copy = AppData.set('searchBarOpen', !state).toJS();
    this.trigger(copy);
  }
});

module.exports = Store;
