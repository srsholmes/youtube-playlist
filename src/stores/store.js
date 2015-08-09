let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
let Immutable = require('immutable');

let PLAYLIST;
const LOCAL_STORAGE_KEY = 'youtubePlaylist';

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
  		playlist: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    }
  },

  getInitialState() {
    return this.contents;
  },

	_setupLocalStorage() {
		if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
		  PLAYLIST = [];
		} else {
		  PLAYLIST = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		}
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(PLAYLIST));
		PLAYLIST.push(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
	},

  onSearchYoutubeApiCompleted(data) {
  	this.contents.results = data;
  	this.trigger(this.contents);
  },

  onChooseVideo(videoId) {
    this.contents = {...this.contents, ...{
      	videoData: {id: videoId},
      	searchBarOpen: false
    	}
  	}
    this.trigger(this.contents);
  },

  _updatePlaylist(item) {
    PLAYLIST = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    PLAYLIST.push(item);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(PLAYLIST));
  },

  onAddToPlaylist(data) {
  	let playlistItem = {...data, ...{
  			videoID: data.id.videoId,
  			title:  data.snippet.title,
  			thumbnails: data.snippet.thumbnails.medium.url
  		}
  	};
  	this.contents.playlist.push(playlistItem);
    this._updatePlaylist(playlistItem);
  	this.trigger(this.contents);
  },

  onToggleSearch(state) {
    this.contents.searchBarOpen = !state;
  	this.trigger(this.contents);
  }
});

module.exports = Store;
