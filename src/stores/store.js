let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
let Immutable = require('immutable');

//Set up localstorage
var a;
var localStorageKey = 'youtubePlaylist';
if (localStorage.getItem(localStorageKey) === null) {
  a = [];
} else {
  a = JSON.parse(localStorage.getItem(localStorageKey));
}
localStorage.setItem(localStorageKey, JSON.stringify(a));
a.push(JSON.parse(localStorage.getItem(localStorageKey)));

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

  getInitialState() {
    return this.contents;
  },

  onSearchYoutubeApiCompleted(data) {
  	this.contents.results = data;
  	this.trigger(this.contents);
  },


  onChooseVideo(videoId) {
    var map = Immutable.Map({
      videoData: {
        id: videoId
      },
      searchBarOpen: false,
    });
    var copy = map.merge(this.contents, map).toJS();
  	this.trigger(copy);
  },

  _updatePlaylist(item) {
    a = JSON.parse(localStorage.getItem(localStorageKey));
    a.push(item);
    localStorage.setItem(localStorageKey, JSON.stringify(a));
    console.log('updated local stroage');

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
    this._updatePlaylist(playlistItem);
  	this.trigger(this.contents);
  },

  onToggleSearch(state) {
    state == true ? this.contents.searchBarOpen = false : this.contents.searchBarOpen = true;
  	this.trigger(this.contents);
  }
});

module.exports = Store;
