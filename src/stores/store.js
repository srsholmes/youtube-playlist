let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
let Immutable = require('immutable');

let playlist;

import { LOCAL_STORAGE_KEY } from '../constants/constants';

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
  			id: null,
  			playing: false,
  			playlistIndex: 0
  		},
  		searchBarOpen: false,
  		playlist: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
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

  onChooseVideo(videoID) {
    this.contents = {...this.contents, ...{
      	videoData: {id: videoID},
      	searchBarOpen: false
    	}
  	}
    this.trigger(this.contents);
  },

  onPlayPause() {
  	this.contents.videoData.playing = !this.contents.videoData.playing;
  	this.trigger(this.contents);
  },

//TOOD: Handle the begining and end of the playlist
//Refactor. Instead of grabbing the 'playlistIndex', from this.contents
//Get the actual index of the current video being played.
//Will be more accurate.
  onSkipVideo(dir) {
  	let index = this.contents.videoData.playlistIndex;
  	dir === 'next' ? index ++ : index --;
  	let newVideoID = playlist[index].videoID;
	  this.contents = {...this.contents, ...{
	    	videoData: {
	    		id: newVideoID,
	    		playing: true,
	    		playlistIndex: index
	    	},
	    	searchBarOpen: false,
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

  onRemoveFromPlaylist(index) {
  	playlist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  	playlist.splice(index, 1);
    this.contents.playlist = playlist;
    this._updatePlaylist(this.contents.playlist);
    this.trigger(this.contents);
  },

  onToggleSearch(state) {
    this.contents.searchBarOpen = !state;
  	this.trigger(this.contents);
  }
});

module.exports = Store;
