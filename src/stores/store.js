let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
let Immutable = require('immutable');

let playlist;
const LOCAL_STORAGE_KEY = 'youtubePlaylist';

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
  	this._setupLocalStorage();
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
		  playlist = [];
		} else {
		  playlist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		}
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(playlist));
		playlist.push(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
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

  _updatePlaylist(playlist) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(playlist));
  },

  onAddToPlaylist(data) {
  	let playlistItem = {...data, ...{
  			videoID: data.id.videoId,
  			title:  data.snippet.title,
  			thumbnails: data.snippet.thumbnails.medium.url
  		}
  	};
  	this.contents.playlist.push(playlistItem);
    this._updatePlaylist(this.contents.playlist);
  	this.trigger(this.contents);
  },

  onRemoveFromPlaylist(item) {
  	console.log('remove from playlust');
  	console.log(item);
  	playlist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  	var index = playlist.indexOf(item);
  	if (index > -1) {
  	  playlist.splice(index, 1);
  	}
  	//remove the item from local storage. maybe use arry reduce?
  	//dont forget to set the new playlist in local storage.
  },

  onToggleSearch(state) {
    this.contents.searchBarOpen = !state;
  	this.trigger(this.contents);
  }
});

module.exports = Store;
