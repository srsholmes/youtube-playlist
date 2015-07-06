let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Store = Reflux.createStore({
//Set up multiple stores as triggers on this store affect
//everything listening to them.
  listenables: [Actions],

  init() {
    console.log('store init');
  },

  onSearchYoutubeApiCompleted(data) {
  	console.log('onsearchYoutubeApiCompleted STORE');
  	this.trigger({
  		results: data
  	});
  },

  onChooseVideo(id) {
  	console.log('onChooseVideo STORE');
  	this.trigger({
  		videoProps: {
  			id: id
  		}
  	});
  },

//Refactor into one function to toggle the search.
  onCloseSearch() {
  	this.trigger({
     	searchBarOpen: false
    });
  },

  onOpenSearch() {
  	this.trigger({
     	searchBarOpen: true
    });
  }

});

module.exports = Store;
