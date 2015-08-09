let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
let Immutable = require('immutable');

let a;
let localStorageKey = 'youtubePlaylist';

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
  		playlist: JSON.parse(localStorage.getItem(localStorageKey)) || []
    }
  },

	_setupLocalStorage() {
		if (localStorage.getItem(localStorageKey) === null) {
		  a = [];
		} else {
		  a = JSON.parse(localStorage.getItem(localStorageKey));
		}
		localStorage.setItem(localStorageKey, JSON.stringify(a));
		a.push(JSON.parse(localStorage.getItem(localStorageKey)));
	},

  getInitialState() {
    return this.contents;
  },

  onSearchYoutubeApiCompleted(data) {
  	this.contents.results = data;
  	this.trigger(this.contents);
  },


  onChooseVideo(videoId) {
    this.contents = {...this.contents, ...{
      videoData: {id: videoId},
      searchBarOpen: false
    }}
    this.trigger(this.contents);
  },

  _updatePlaylist(item) {
    a = JSON.parse(localStorage.getItem(localStorageKey));
    a.push(item);
    localStorage.setItem(localStorageKey, JSON.stringify(a));
  },

  onAddToPlaylist(data) {
    //Refactor this with es6 lovilness
    console.log(data);
  	let videoID = data.id.videoId;
  	let title = data.snippet.title;
  	let thumbnail = data.snippet.thumbnails.medium.url;

  	let playlistItem = {
  		videoID: videoID,
  		title: title,
  		thumbnails: thumbnail
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
