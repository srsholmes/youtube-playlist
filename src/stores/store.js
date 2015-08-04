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
  		searchBarOpen: false
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
  	this.contents = {
  		searchBarOpen: false,
  		videoData: {
  			id: id
  		}
  	}
  	//Why doesnt this work?
  	// this.contents.searchBarOpen = false;
  	this.contents.videoData.id = id;

  	this.trigger(this.contents);
  	console.log(this.contents);
  },

  // onChooseVideo(id, searchState) {
  // 	this.contents.searchBarOpen = searchState;
  // 	this.contents.videoData.id = id;
  // 	this.trigger(this.contents);
  // 	console.log(this.contents);
  // },

  onToggleSearch(state){
    state == true ? this.contents.searchBarOpen = false : this.contents.searchBarOpen = true;
  	this.trigger(this.contents);
  }
});

module.exports = Store;
