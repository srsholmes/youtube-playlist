let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
let Immutable = require('immutable');

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.contents = {
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
    }
  },

  getInitialState() {
    return this.contents;
  },

  onSearchYoutubeApiCompleted(data) {
  	this.contents.results = data;
  	this.trigger(this.contents);
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
    ///https://facebook.github.io/react/docs/advanced-performance.html/
  	// this.contents.searchBarOpen = false;
  	// this.contents.videoData.id = videoId;

    //Create a copy of the this.contents and send that over using immutable.
    //
    var map = Immutable.Map({
      videoData: {
        id: videoId
      },
      searchBarOpen: false,
    });
    var copy = map.merge(this.contens, map).toJS();
  	this.trigger(copy);
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
    state == true ? this.contents.searchBarOpen = false : this.contents.searchBarOpen = true;
  	this.trigger(this.contents);
  }
});

module.exports = Store;
