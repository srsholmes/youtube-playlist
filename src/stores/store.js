let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

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

  onChooseVideo(id) {
  	console.log('onChooseVideo STORE');
  	// this.contents = {
  	// 	searchBarOpen: false,
  	// 	videoData: {
  	// 		id: id
  	// 	},
  	// 	playlist: []
  	// }
  	//Why doesnt this work?
  	this.contents.searchBarOpen = false;
  	this.contents.videoData.id = id;

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
    state == true ? this.contents.searchBarOpen = false : this.contents.searchBarOpen = true;
  	this.trigger(this.contents);
  }
});

module.exports = Store;
